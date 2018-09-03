import React, { Component } from 'react';
import { TimelineMax } from 'gsap';

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
    const { url } = this.props;
    
    return (
      <a 
        href={url} 
        target="_blank"
        className="general-button" 
        ref={ref => this.button = ref}
      >
        <button>
          <span>Download resumé</span>
        </button>
      </a>
    );
  }
}

export default ResumeButton;