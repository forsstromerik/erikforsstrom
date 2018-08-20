import React, { Component } from 'react';
import HeaderImage from '../images/header.jpg';
import Menu from './menu';
import Card from './card';
import ResumeButton from './resumebutton';
import ShortDescription from './shortdescription';

const styles = {
  position: 'absolute',
  bottom: '50%'
}

class Main extends Component {
  state = {}

  render(){
    
    return (
      <div>
        <img src={HeaderImage} width={"100%"} style={styles}/>
        <Menu />
        <Card />
        <ResumeButton />
        <ShortDescription />
      </div>
    );
  }
}

export default Main;