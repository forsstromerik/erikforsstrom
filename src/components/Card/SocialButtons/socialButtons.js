import React, { Component } from 'react';
import linkedin from '../../../images/linkedin-logo.svg';
import github from '../../../images/github-sign.svg';
import facebook from '../../../images/facebook-logo.svg';

class SocialButtons extends Component {
  state = {

  }

  render() {
    return (
      <div className="buttons-row">
        <a href="https://www.linkedin.com/in/forsstromerik" target="_blank">
          <img src={linkedin} height={'30px'} />
        </a>
        <a href="https://github.com/forsstromerik" target="_blank">
          <img src={github} height={'30px'} />
        </a>
        <a href="https://www.facebook.com/forsstromerik" target="_blank" >
          <img src={facebook} height={'30px'} />
        </a>
      </div>
    );
  }
}

export default SocialButtons;