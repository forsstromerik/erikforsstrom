import React from 'react';

const Contact = props =>  {
  return [
    <h2 id="contact">{ props.language === "eng" ? "Contact" : "Kontakt"}</h2>,
    <div className="contact">
      <div className="contact-card">
        <span>Erik Forsström</span>
        <a href="mailto:hello@erikforsstrom.se?subject=Saw your fantastic website!" >hello@erikforsstrom.se</a>
        <a href="https://www.google.se/maps/place/gothenburg" target="_blank">Gothenburg, Sweden</a>
      </div>
    </div>
  ]
}

export default Contact;