import React, { Component } from 'react';
import { createClient } from 'contentful';

import Card from './Card/card';
import Contact from './Contact/contact';
import Footer from './Footer/footer';
import Menu from './Menu/menu';
import ResumeButton from './Button/resumebutton';
import ShortDescription from './shortdescription';
import Skills from './Skills/skills';
import Timeline from './Timeline/timeline';
import Loader from './loader';

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
      elements: [],
      footer: {
        quote: '',
        info: ''
      }
    },
    loading: true,
    language: 'eng'
  }

  setLanguage = string => {
    let data;   
    this.state.client.getEntries({ locale: string === "eng" ? "en-US" : "sv"}).then(res => {
      data = parser(res)
    }).then(() => this.setState({ data, loading: false, language: string === "eng" ? "eng" : "swe" }));
  }

  componentDidMount() {
    let data;
    this.state.client.getEntries().then(res => {
      data = parser(res);
    }).then(() => this.setState({ data, loading: false }));
  }
  
  render(){
    const { data, loading, language } = this.state;
    return (
      <div>
        {loading && <Loader />}
        {!loading && [
        <div key={0} className="header">
          <img src={data.headerImageURL} alt="header" />
        </div>,
        <Menu  
          key={1}
          setLanguage={this.setLanguage}
          language={language}
        />,
        <Card 
          key={2}
          cardInfo={data.cardInfo} 
          //loading={loading}  
          language={language}
        />,
        <ResumeButton 
          key={3}
          language={language} 
          url={data.resumeURL} 
        />,
        <ShortDescription 
          key={4}
          text={data.shortDescription} 
          //loading={loading}
        />,
        <Skills 
          key={5}
          language={language}
        />,
        <Timeline 
          key={6}
          language={language}
          elements={data.elements}
        />,
        <Contact 
          key={7}
          language={language}
        />,
        <Footer 
          key={8}
          quote={data.footer.quote}
          info={data.footer.info}
        />
        ]}
      </div>
    );
  }
}

export default Main;
