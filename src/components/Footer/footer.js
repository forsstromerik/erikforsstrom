import React from 'react';

const Footer = props => (
    <div className="footer">
        <span>{`Erik Forsström ${new Date().getFullYear()}`}</span>
        <cite>"Choose a job you love, and you will never have to work a day in your life." - Unknown</cite>
    </div>
)

export default Footer;