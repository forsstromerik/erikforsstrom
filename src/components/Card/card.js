import React, { Component } from 'react';

import Info from './info';
import SocialButtons from './SocialButtons/socialButtons';

import { TimelineMax } from 'gsap';

class Card extends Component {

  setTimeline = () => {
    if(!this.card) return;
    let tl = new TimelineMax();
    const card = this.card;
    tl
      .from(card, 1, { y: 30, autoAlpha: 0 })
  }

  componentDidMount() {
    this.setTimeline();
  }

  render() {
    const { cardInfo, loading, language} = this.props;
    if(!loading){
      return (
        <div className="card" ref={ref => this.card = ref}>
          <div className="upper">
            <img src={cardInfo.profileImageURL} height={'70%'} alt="profile" />
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
      return null;
    }
  }
}

export default Card;
