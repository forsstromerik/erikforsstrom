import React from 'react';

const Footer = props => (
    <div className="footer">
        <span>{`Erik Forsström ${new Date().getFullYear()}`}</span>
        <cite>{props.quote}</cite>
        <p>{props.info}</p>
    </div>
)

export default Footer;
