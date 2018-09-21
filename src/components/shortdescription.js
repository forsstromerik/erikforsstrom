import React, { Component } from 'react';
import { TimelineMax } from 'gsap';

class ShortDescription extends Component {
  
  setTimeline = () => {
    if(!this.text) return;
    let tl = new TimelineMax();
    const text = this.text;
    tl
      .from(text, 1, { y: 30, autoAlpha: 0 })
  }

  componentDidMount() {
    this.setTimeline();
  }

  render() {
    const { text } = this.props;
    return (
      <div 
        className="short-description" 
        style={{ padding: '40px 12%', top: '700px', lineHeight: '1.4rem'}}
        ref={ref => this.text = ref}  
      >
        {text.map((section, i) => <p key={i}>{section}</p>)}
      </div>
    );
  }
}

export default ShortDescription;