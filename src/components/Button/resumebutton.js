import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import { LANGUAGES } from '../../helpers/localization';

class ResumeButton extends Component {
  state = {

  }

  componentDidMount() {
    let tl = new TimelineMax();
    const button = this.button;
    tl
      .from(button, 1, { y: 30, autoAlpha: 0 })
  }

  render() {
    const { url, language } = this.props;

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="general-button"
        ref={ref => this.button = ref}
      >
        <button>
          <span>{language === LANGUAGES.ENGLISH.key ? "Download résumé" : "Ladda ned CV"}</span>
        </button>
      </a>
    );
  }
}

export default ResumeButton;