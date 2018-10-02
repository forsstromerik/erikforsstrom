import React from 'react';
import { LANGUAGES } from '../../helpers/localization';

const Info = props => (
  <div className="card-info">
    <span><div>{props.language === LANGUAGES.ENGLISH.key ? "Name" : "Namn"}</div>{props.name}</span>
    <span><div>{props.language === LANGUAGES.ENGLISH.key ? "Age" : "Ålder"}</div>{props.age}</span>
    <span><div>{props.language === LANGUAGES.ENGLISH.key ? "Email" : "Email"}</div>{props.email}</span>
    <span><div>{props.language === LANGUAGES.ENGLISH.key ? "Occupaction" : "Sysselsättning"}</div>{props.occupation}</span>
    <span><div>{props.language === LANGUAGES.ENGLISH.key ? "Other" : "Annat"}</div>{props.occupation2}</span>
  </div>
)

export default Info;
