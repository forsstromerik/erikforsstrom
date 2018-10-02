import React from 'react';
import { LANGUAGES } from '../../helpers/localization';

const Contact = props => {
  return [
    <h2 key={0} id="contact">{ props.language === LANGUAGES.ENGLISH.key ? "Contact" : "Kontakt"}</h2>,
    <div className="contact" key={1}>
      <div className="contact-card">
        <span>Erik Forsström</span>
        <a href="mailto:hello@erikforsstrom.se?subject=Saw your fantastic website!">hello@erikforsstrom.se</a>
        <a href="https://www.google.se/maps/place/gothenburg" target="_blank" rel="noopener noreferrer">Gothenburg, Sweden</a>
      </div>
    </div>
  ]
}

export default Contact;
