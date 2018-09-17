import React, { Component } from 'react';



class Info extends Component {
  state = {

  }

  render() {

    const { age, email, name, occupation, occupation2, language } = this.props;    
    return (
      <div className="card-info">
        <span><div>{language === "eng" ? "Name" : "Namn"}</div>{name}</span>
        <span><div>{language === "eng" ? "Age" : "Ålder"}</div>{age}</span>
        <span><div>{language === "eng" ? "Email" : "Email"}</div>{email}</span>
        <span><div>{language === "eng" ? "Occupaction" : "Sysselsättning"}</div>{occupation}</span>
        <span><div>{language === "eng" ? "Other" : "Annat"}</div>{occupation2}</span>
      </div>
    );
  }
}

export default Info;