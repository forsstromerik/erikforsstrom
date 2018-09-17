import React, { Component } from 'react';

import IMGinneva from '../../images/inneva.png';
import IMGnouw from '../../images/nouw.svg';
import IMGchalmers from '../../images/chalmers.png';
import IMGgoogleplay from '../../images/googleplay.png';

class Timeline extends Component {

  state = {
    amtInView: 0
  }

  componentDidMount() {
    document.addEventListener('scroll', this.checkIfInView);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.checkIfInView);
  }

  checkIfInView = () => {
    const { amtInView } = this.state;
    let timeline = this.timeline;
    if (amtInView >= timeline.children.length) return;
    for (let i = 0; i < timeline.children.length - 1; ++i) {
      if (timeline.children[i].getBoundingClientRect().top + (timeline.children[i].getBoundingClientRect().height/2) - document.documentElement.clientHeight < 0
          && timeline.children[i].className !== "timeline-element inview") {
        timeline.children[i].className = "timeline-element inview";
        timeline.children[i].getElementsByClassName("timeline-header-dot")[0].className = "timeline-header-dot inview"
        this.setState(prev => ({ amtInView: prev.amtInView + 1 }))
      }
    }
  }

  renderTimeline = () => {
    const { elements } = this.props;

    return elements.map(el => {
      return (
        <div className="timeline-element">
          <div className="timeline-header-dot" />
          <div className="timeline-header-tag" />
          <div className="timeline-header">
            <div className="image-holder">
              <img src={el.imageURL} />
            </div>
            <h3><span>{el.year}:</span>{el.title}</h3>
          </div>
          <div className="timeline-content" dangerouslySetInnerHTML={{__html: el.description}} />
        </div>
      );
    });

  }

  render() {
    const { language } = this.props;
    let elements = this.renderTimeline();
    return [
      <h2 id="timeline">{language === "eng" ? "Timeline" : "Tidslinje"}</h2>,
      <div className="timeline-holder">
        <div className="timeline" ref={ref => this.timeline = ref}> 
          {elements}
          {/* <div className="timeline-element">
            <div className="timeline-header-dot" />
            <div className="timeline-header-tag" />
            <div className="timeline-header">
              <div className="image-holder">
                <img src={IMGinneva} />
              </div>
              <h3><span>2018:</span>Co-founder</h3>
            </div>
            <div className="timeline-content">
              Co-founded the IT-counsultancy firm <a target="_blank" href="https://inneva.se">Inneva</a> together with <a target="_blank" href="https://axelniklasson.se/">Axel Niklasson</a>. I have done several projects with focus on techniques for web development, where <strong>React</strong> was used both for websites and TV-graphic overlays. I have learnt so much from the start and running a company is really a great merit to have!
            </div>
          </div>
          <div className="timeline-element">
            <div className="timeline-header-dot" />
            <div className="timeline-header-tag" />
            <div className="timeline-header">
              <div className="image-holder">
                <img src={IMGnouw} />
              </div>
              <h3><span>2018:</span>Fullstack developer</h3>
            </div>
            <div className="timeline-content">
              Developing new functionality at <a target="_blank" href="https://nouw.com">nouw.com</a>, the biggest blogging portal of Scandinavia. Worked mainly with frontend development, spending a lot of time with <strong>React</strong>, but also <strong>.NET</strong> in the backend together with <strong>TSQL</strong> for database management.
            </div>
          </div>
          <div className="timeline-element">
            <div className="timeline-header-dot" />
            <div className="timeline-header-tag" />
            <div className="timeline-header">
              <div className="image-holder">
                <img src={IMGchalmers} />
              </div>
              <h3><span>2017:</span>Master Student</h3>
            </div>
            <div className="timeline-content">
              Started studying at the master's programme <a target="_blank" href="https://www.chalmers.se/en/education/programmes/masters-info/Pages/Computer-systems-and-networks.aspx">Computer Systems and Networks</a> at <a target="_blank" href="https://www.chalmers.se/en">Chalmers University of Technology</a>, where I am due to finish in June 2019. A list of courses I have taken can be found on my <a target="_blank" href="https://www.linkedin.com/in/forsstromerik">Linkedin profile</a>.
            </div>
          </div>
          <div className="timeline-element">
            <div className="timeline-header-dot" />
            <div className="timeline-header-tag" />
            <div className="timeline-header">
              <div className="image-holder">
                <img src={IMGgoogleplay} />
              </div>
              <h3><span>2017:</span>App developer</h3>
            </div>
            <div className="timeline-content">
              Ran a project together with <a target="_blank" href="http://www.erikalmblad.se/">Erik Almblad</a> during spring and finished in the summer. The goal was to release an MVP game app on Google Play, and learn to work with the development platform <strong>Unity3D</strong>. We reached our goal and the game can be found on Google Play as <a target="_blank" href="https://play.google.com/store/apps/details?id=com.bitsquarestudios.miningmania">Mining Mania</a>.
            </div>
          </div>
          <div className="timeline-element">
            <div className="timeline-header-dot" />
            <div className="timeline-header-tag" />
            <div className="timeline-header">
              <div className="image-holder">
                <img src={IMGchalmers} />
              </div>
              <h3><span>2014:</span>Bachelor's student</h3>
            </div>
            <div className="timeline-content">
              Started studying at the bachelor's programme <a target="_blank" href="https://www.chalmers.se/sv/utbildning/program-pa-grundniva/Sidor/Automation-och-mekatronik.aspx">Automation and Mechatronics</a> at <a target="_blank" href="https://www.chalmers.se/en">Chalmers University of Technology</a>, where I finished in June 2017. I was part of the reception committee for Automation and Mechatronics 2015, and part of the recruitment group of 2016/2017.
            </div>
          </div> */}
          <div className="timeline-end" />
        </div>
      </div>
    ]      
  }
}

export default Timeline;