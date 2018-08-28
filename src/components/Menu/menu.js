import React, { Component } from 'react';
import { TimelineMax, Power1 } from 'gsap';
import swe from '../../images/sweden.svg';
import eng from '../../images/united-kingdom.svg';

class Menu extends Component {
  state = {
    atTop: true
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    
    this.timeline = new TimelineMax()
      .set(this.menu, { css: {transition: 'none'}})
      .from(this.menu, 0.8, { y: -100 })
      .set(this.menu, { css: {transition: '0.5s'}})
      //.to(this.menu, 0.3 , { ease: Power1.easeInOut, y: '0px' }, 0.2)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { atTop } = this.state;
    const position = document.documentElement.scrollTop;
    if(position > 0 && atTop === true){
      this.setState({ atTop: false });
    } else if (position === 0 && atTop === false){
      this.setState({ atTop: true });
    }
  }

  render() {
    const { language } = this.props;
    const { atTop } = this.state;
    return (
      <div className={`menu${atTop ? "" : " scrolled-down"}`} ref={ref => this.menu = ref}>
        <ul>
          <li className="menu-button">About</li>
          <li className="menu-button">Skills</li>
          <li className="menu-button">Portfolio</li>
          <li className="menu-button">Contact</li>
          <li className="menu-button">Other</li>
        </ul>
        <ul>
          <li onClick={() => this.props.setLanguage('swe')}>
            <img 
              src={swe}
              className={language === "swe" ? "active" : ""}
            />
          </li>
          <li onClick={() => this.props.setLanguage('eng')}>
            <img 
              src={eng}
              className={language === "eng" ? "active" : ""}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;