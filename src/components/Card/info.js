import React from 'react';

const Info = props => (  
  <div className="card-info">
    <span><div>{props.language === "eng" ? "Name" : "Namn"}</div>{props.name}</span>
    <span><div>{props.language === "eng" ? "Age" : "Ålder"}</div>{props.age}</span>
    <span><div>{props.language === "eng" ? "Email" : "Email"}</div>{props.email}</span>
    <span><div>{props.language === "eng" ? "Occupaction" : "Sysselsättning"}</div>{props.occupation}</span>
    <span><div>{props.language === "eng" ? "Other" : "Annat"}</div>{props.occupation2}</span>
  </div>
)

export default Info;
