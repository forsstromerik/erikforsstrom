import React, { Component } from 'react';

import Info from './info';
import SocialButtons from './socialButtons';

import profileImg from '../images/profileImage.jpg';

const styles = {
  width: '900px',
  borderRadius: '1px',
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: '0',
  right: '0',
  top: '200px',
  backgroundColor: '#fbfbfb',
  boxSizing: 'border-box',
  boxShadow: '0 0 7px 0px #000000',
  paddingBottom: '200px',
  paddingTop: '200px'
}

const imgStyles = {
  position: 'absolute',
  margin: 'auto',
  marginTop: '5%',
  top: '0',
  bottom: '0',
  left: '5%'
}

class Card extends Component {
  state = {

  }

  render() {
    return (
      <div className="card" style={styles}>
        <img src={profileImg} height={'70%'} style={imgStyles} />
        <Info />
        <SocialButtons />
      </div>
    );
  }
}

export default Card;