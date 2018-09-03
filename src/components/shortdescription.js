import React, { Component } from 'react';
import { TimelineMax } from 'gsap';

const styles = {
  padding: '40px 12%',
  top: '700px',
  lineHeight: '1.4rem'

}

class ShortDescription extends Component {
  
  setTimeline = () => {
    if(!this.text) return;
    let tl = new TimelineMax();
    const text = this.text;
    tl
      .from(text, 1, { y: 30, autoAlpha: 0 })
  }

  componentDidUpdate(prevProps) {
    if(this.props.loading === false && prevProps.loading === true){
      this.setTimeline();
    }
  }

  render() {
    const { text, loading } = this.props;
    if(!loading){
      return (
        <div 
          className="short-description" 
          style={styles}
          ref={ref => this.text = ref}  
        >
          {text.map(section => <p>{section}</p>)}
        </div>
      );
    } else {
      return <div className="loader-container"><div className="loader"><div></div><div></div><div></div><div></div></div></div>
    }
  }
}

export default ShortDescription;