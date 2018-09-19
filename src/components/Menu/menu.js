import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import swe from '../../images/sweden.svg';
import eng from '../../images/united-kingdom.svg';

class Menu extends Component {
  state = {
    atTop: true,
    burgerOpen: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    
    this.timeline = new TimelineMax()
      .set(this.menu, { css: {transition: 'none'}})
      .from(this.menu, 0.8, { y: -100 })
      .set(this.menu, { css: {transition: '0.5s'}})
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { atTop } = this.state;
    const position = document.documentElement.scrollTop;
    if(position > 20 && atTop === true){
      this.setState({ atTop: false });
    } else if (position === 0 && atTop === false){
      this.setState({ atTop: true });
    }
  }

  scrollTo = elementID => {
    const elem = document.getElementById(elementID);
    if(!elem) return;
    document.documentElement.scrollTo({ top: elem.offsetTop - 100, behavior: "smooth" })
  }

  toggleBurger = (close = false) => {
    if(close) {
      this.setState({ burgerOpen: false });
    } else {
      this.setState(prev => ({ burgerOpen: !prev.burgerOpen }));
    }
  }

  render() {
    const { language } = this.props;
    const { atTop, burgerOpen } = this.state;
    return [
      <div key={0} className={`menu${atTop ? "" : " scrolled-down"}`} ref={ref => this.menu = ref}>
        <ul>
          <li 
            className="menu-button" 
            onClick={() => this.scrollTo('root')}
          >
            {language === "eng" ? "About" : "Om"}
          </li>
          <li 
            className="menu-button" 
            onClick={() => this.scrollTo('skills')}
          >
            {language === "eng" ? "Skills" : "Kompetens"}
          </li>
          <li 
            className="menu-button"
            onClick={() => this.scrollTo('timeline')}
          >
            {language === "eng" ? "Timeline" : "Tidslinje"}
          </li>
          <li 
            className="menu-button"
            onClick={() => this.scrollTo('contact')}
          >
            {language === "eng" ? "Contact" : "Kontakt"}            
          </li>
        </ul>
        <ul>
          <li onClick={() => this.props.setLanguage('swe')}>
            <img 
              src={swe}
              className={language === "swe" ? "active" : ""}
              alt="swedish"
            />
          </li>
          <li onClick={() => this.props.setLanguage('eng')}>
            <img 
              src={eng}
              className={language === "eng" ? "active" : ""}
              alt="english"
            />
          </li>
        </ul>
      </div>,
      <div key={1} className={`burger-button${burgerOpen ? " open" : ""}`} onClick={() => this.toggleBurger()} >

      </div>,
      <div key={2} className={`burger-menu${burgerOpen ? " open" : ""}`}>
        <ul>
          <li 
            className="menu-button" 
            onClick={() => {this.scrollTo('root'); this.toggleBurger(true);}}
          >
            {language === "eng" ? "About" : "Om"}
          </li>
          <li 
            className="menu-button" 
            onClick={() => {this.scrollTo('skills'); this.toggleBurger(true);}}
          >
            {language === "eng" ? "Skills" : "Kompetens"}
          </li>
          <li 
            className="menu-button"
            onClick={() => {this.scrollTo('timeline'); this.toggleBurger(true);}}
          >
            {language === "eng" ? "Timeline" : "Tidslinje"}
          </li>
          <li 
            className="menu-button"
            onClick={() => {this.scrollTo('contact'); this.toggleBurger(true);}}
          >
            {language === "eng" ? "Contact" : "Kontakt"}            
          </li>
        </ul>
        <ul>
          <li onClick={() => this.props.setLanguage('swe')}>
            <img 
              src={swe}
              className={language === "swe" ? "active" : ""}
              alt="swedish"
            />
          </li>
          <li onClick={() => this.props.setLanguage('eng')}>
            <img 
              src={eng}
              className={language === "eng" ? "active" : ""}
              alt="english"
            />
          </li>
        </ul>
      </div>
    ]
  }
}

export default Menu;
