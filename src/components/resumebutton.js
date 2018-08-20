import React, { Component } from 'react';

const styles = {
  width: '250px',
  height: '70px',
  background: '#fbfbfb',
  border: '1px solid #bbb',
  display: 'inline-block',
  float: 'left',
  clear: 'left',
  position: 'absolute',
  top: '635px',
  marginLeft: 'auto',
  marginRight: 'auto',
  left: '0',
  right: '0'
}

class ResumeButton extends Component {
  state = {

  }

  render() {
    return (
      <button className="general-button" style={styles}>
        <span>Download resume</span>
      </button>
    );
  }
}

export default ResumeButton;