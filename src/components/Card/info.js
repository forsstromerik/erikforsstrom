import React from 'react';
import { translate } from '../../helpers/localization';

const Info = props => (
  <div className="card-info">
    <span><div>{translate(props.language, 'name')}</div>{props.name}</span>
    <span><div>{translate(props.language, 'age')}</div>{props.age}</span>
    <span><div>{translate(props.language, 'email')}</div>{props.email}</span>
    <span><div>{translate(props.language, 'occupation')}</div>{props.occupation}</span>
    <span><div>{translate(props.language, 'other')}</div>{props.occupation2}</span>
  </div>
)

export default Info;
