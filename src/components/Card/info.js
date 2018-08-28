import React, { Component } from 'react';



class Info extends Component {
  state = {

  }

  render() {

    const { age, email, name, occupation, occupation2 } = this.props;    
    return (
      <div className="card-info">
        <span><div>Name</div>{name}</span>
        <span><div>Age</div>{age}</span>
        <span><div>Email</div>{email}</span>
        <span><div>Occupation</div>{occupation}</span>
        <span><div>Other</div>{occupation2}</span>
      </div>
    );
  }
}

export default Info;