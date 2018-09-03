import React, { Component } from 'react';
import Menu from './Menu/menu';
import Card from './Card/card';
import ResumeButton from './Button/resumebutton';
import ShortDescription from './shortdescription';
import Skills from './Skills/skills';
import Timeline from './Timeline/timeline';

import { createClient } from 'contentful';
import { parser } from '../helpers/parser';

class Main extends Component {

  state = {
    client: createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN
    }),
    loading: true,
    language: 'eng'
  }

  setLanguage = string => {
    if(string === 'eng'){
      this.setState({ language: 'eng' });
    } else {
      this.setState({ language: 'swe' });
    }
  }

  componentDidMount() {
    this.state.client.getEntries().then(res => {
      res.items.forEach(item => {
        this.setState(parser(item.fields)); // GÖR OBJEKT ISTÄLLET
      })
    }).then(() => this.setState({ loading: false }))
  }

  render(){
    const { cardInfo, loading, shortDescription, resumeURL, headerImageURL, language } = this.state;
    return (
      <div>
        <div className="header">
          <img src={headerImageURL} />
        </div>
        <Menu  
          setLanguage={this.setLanguage}
          language={language}
        />
        <Card 
          cardInfo={cardInfo} 
          loading={loading}  
        />
        {!loading && <ResumeButton url={resumeURL} />}
        <ShortDescription 
          text={shortDescription} 
          loading={loading}
        />
        <Skills />
        <Timeline />
      </div>
    );
  }
}

export default Main;