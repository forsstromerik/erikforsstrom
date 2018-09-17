import React, { Component } from 'react';

import Info from './info';
import SocialButtons from './SocialButtons/socialButtons';
import { TimelineMax, Power1 } from 'gsap';

class Card extends Component {

  setTimeline = () => {
    if(!this.card) return;
    let tl = new TimelineMax();
    const card = this.card;
    tl
      .from(card, 1, { y: 30, autoAlpha: 0 })
  }

  componentDidUpdate(prevProps) {
    if(this.props.loading === false && prevProps.loading === true){
      this.setTimeline();
    }
  }

  render() {
    const { cardInfo, loading, language} = this.props;
    if(!loading){
      return (
        <div className="card" ref={ref => this.card = ref}>
          <div className="upper">
            <img src={cardInfo.profileImageURL} height={'70%'} />
            <Info
              age={cardInfo.age}
              email={cardInfo.email}
              name={cardInfo.name}
              occupation={cardInfo.occupation}
              occupation2={cardInfo.occupation2}
              language={language}
              /> 
          </div>
          <SocialButtons />
        </div>
      );
    } else {
      return (
        <div className="card" ref={ref => this.card = ref}>
          <div className="upper">
          <div className="loader-container" style={{top: '0'}}><div className="loader"><div></div><div></div><div></div><div></div></div></div>
          </div>
          <SocialButtons />
        </div>
      );
    }
  }
}

export default Card;