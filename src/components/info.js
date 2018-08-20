import React, { Component } from 'react';

const styles = {
  position: 'absolute',
  width: '50%',
  height: '68%',
  right: '5%',
  top: '10%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'

}

class Info extends Component {
  state = {

  }

  render() {
    return (
      <div style={styles}>
        <span><strong>Foo:</strong> Bar baz</span>
        <span><strong>Foo:</strong> Bar baz</span>
        <span><strong>Foo:</strong> Bar baz</span>
        <span><strong>Foo:</strong> Bar baz</span>
        <span><strong>Foo:</strong> Bar baz</span>
      </div>
    );
  }
}

export default Info;