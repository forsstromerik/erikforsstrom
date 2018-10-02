import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import { LANGUAGES, translate } from '../../helpers/localization';

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
            {translate(language, 'about')}
          </li>
          <li
            className="menu-button"
            onClick={() => this.scrollTo('skills')}
          >
            {translate(language, 'skills')}
          </li>
          <li
            className="menu-button"
            onClick={() => this.scrollTo('timeline')}
          >
            {translate(language, 'timeline')}
          </li>
          <li
            className="menu-button"
            onClick={() => this.scrollTo('contact')}
          >
            {translate(language, 'contact')}
          </li>
        </ul>
        <ul>
        <li onClick={() => this.props.setLanguage(LANGUAGES.SWEDISH.key)}>
            <img
              src={LANGUAGES.SWEDISH.image}
              className={language === LANGUAGES.SWEDISH.key ? "active" : ""}
              alt="swedish"
            />
          </li>
          <li onClick={() => this.props.setLanguage(LANGUAGES.ENGLISH.key)}>
            <img
              src={LANGUAGES.ENGLISH.image}
              className={language === LANGUAGES.ENGLISH.key ? "active" : ""}
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
            {translate(language, 'about')}
          </li>
          <li
            className="menu-button"
            onClick={() => {this.scrollTo('skills'); this.toggleBurger(true);}}
          >
            {translate(language, 'skills')}
          </li>
          <li
            className="menu-button"
            onClick={() => {this.scrollTo('timeline'); this.toggleBurger(true);}}
          >
            {translate(language, 'timeline')}
          </li>
          <li
            className="menu-button"
            onClick={() => {this.scrollTo('contact'); this.toggleBurger(true);}}
          >
            {translate(language, 'contact')}
          </li>
        </ul>
        <ul>
        <li onClick={() => this.props.setLanguage(LANGUAGES.SWEDISH.key)}>
            <img
              src={LANGUAGES.SWEDISH.image}
              className={language === LANGUAGES.SWEDISH.key ? "active" : ""}
              alt="swedish"
            />
          </li>
          <li onClick={() => this.props.setLanguage(LANGUAGES.ENGLISH.key)}>
            <img
              src={LANGUAGES.ENGLISH.image}
              className={language === LANGUAGES.ENGLISH.key ? "active" : ""}
              alt="english"
            />
          </li>
        </ul>
      </div>
    ]
  }
}

export default Menu;
