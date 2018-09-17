import React, { Component } from 'react';
import Menu from './Menu/menu';
import Card from './Card/card';
import ResumeButton from './Button/resumebutton';
import ShortDescription from './shortdescription';
import Skills from './Skills/skills';
import Timeline from './Timeline/timeline';
import Contact from './Contact/contact';
import Footer from './Footer/footer';

import { createClient } from 'contentful';
import { parser } from '../helpers/parser';

class Main extends Component {

  state = {
    client: createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN
    }),
    data: {
      cardInfo: {
        age: '',
        email: '',
        name: '',
        occupation: '',
        occupation2: '',
        profileImageURL: ''
      },
      headerImageURL: '',
      shortDescription: [],
      resumeURL: '',
      elements: [
        // {
        //   imageURL: '',
        //   year: '',
        //   title: '',
        //   description: ''
        // }
      ]
    },
    loading: true,
    language: 'eng'
  }

  setLanguage = string => {
    if(string === 'eng'){
      this.setState({ language: 'eng' });
    } else {
      this.setState({ language: 'swe' });
    }
    let { data } = this.state;    
    this.state.client.getEntries({ locale: string === "eng" ? "en-US" : "sv"}).then(res => {
      data = parser(res, data)
    }).then(() => this.setState({ data, loading: false }));
  }

  componentDidMount() {
    let { data } = this.state;
    this.state.client.getEntries().then(res => {
      data = parser(res, data);
    }).then(() => this.setState({ data, loading: false }));
  }
  render(){
    const { data, loading, language } = this.state;
    return (
      <div>
        <div className="header">
          <img src={data.headerImageURL} />
        </div>
        <Menu  
          setLanguage={this.setLanguage}
          language={language}
        />
        <Card 
          cardInfo={data.cardInfo} 
          loading={loading}  
          language={language}
        />
        {!loading && <ResumeButton url={data.resumeURL} />}
        <ShortDescription 
          text={data.shortDescription} 
          loading={loading}
        />
        <Skills 
          language={language}
        />
        <Timeline 
          language={language}
          elements={data.elements}
        />
        <Contact 
          language={language}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;