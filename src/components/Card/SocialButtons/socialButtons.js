import React from 'react';
import linkedin from '../../../images/linkedin-logo.svg';
import github from '../../../images/github-sign.svg';
import facebook from '../../../images/facebook-logo.svg';

const SocialButtons = () => (
  <div className="buttons-row">
    <a href="https://www.linkedin.com/in/forsstromerik" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} height={'30px'} alt="linkedin"/>
    </a>
    <a href="https://github.com/forsstromerik" target="_blank" rel="noopener noreferrer">
      <img src={github} height={'30px'} alt="github"/>
    </a>
    <a href="https://www.facebook.com/forsstromerik" target="_blank" rel="noopener noreferrer">
      <img src={facebook} height={'30px'} alt="facebook"/>
    </a>
  </div>
)

export default SocialButtons;
