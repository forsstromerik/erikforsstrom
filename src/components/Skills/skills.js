import React, { Component } from 'react';
import IMGjavascript from '../../images/if_javascript.svg';
import IMGreact from '../../images/if_react.svg';
import IMGcss from '../../images/if_css.svg';
import IMGhtml from '../../images/if_html.svg';
import IMGgithub from '../../images/if_github.svg';
import IMGdatabase from '../../images/if_database.svg';
import IMGlinux from '../../images/if_linux.svg';
import IMGvscode from '../../images/if_vscode.svg';
import { TimelineMax, Power1 } from 'gsap';

let A = new TimelineMax();
let B = new TimelineMax();
let C = new TimelineMax();
let D = new TimelineMax();
let E = new TimelineMax();
let F = new TimelineMax();
let G = new TimelineMax();
let H = new TimelineMax();

class Skills extends Component {

  componentDidMount() {
    document.addEventListener('scroll', this.checkIfInView);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.checkIfInView);
  }

  checkIfInView = () => {
    const limit = document.documentElement.clientHeight + 150;
    const aPos = this.a.getBoundingClientRect().top + this.a.getBoundingClientRect().height;
    const bPos = this.b.getBoundingClientRect().top + this.b.getBoundingClientRect().height;
    const cPos = this.c.getBoundingClientRect().top + this.c.getBoundingClientRect().height;
    const dPos = this.d.getBoundingClientRect().top + this.d.getBoundingClientRect().height;
    const ePos = this.e.getBoundingClientRect().top + this.e.getBoundingClientRect().height;
    const fPos = this.f.getBoundingClientRect().top + this.f.getBoundingClientRect().height;
    const gPos = this.g.getBoundingClientRect().top + this.g.getBoundingClientRect().height;
    const hPos = this.h.getBoundingClientRect().top + this.h.getBoundingClientRect().height;

    if(aPos < limit && this.a.style.opacity === '0'){
      this.animate(this.a, 'left', A);
    }
    if(bPos < limit && this.b.style.opacity === '0'){
      this.animate(this.b, 'top', B);
    } 
    if(cPos < limit && this.c.style.opacity === '0'){
      this.animate(this.c, 'right', C);
    }  
    if(dPos < limit && this.d.style.opacity === '0'){
      this.animate(this.d, 'left', D);
    } 
    if(ePos < limit && this.e.style.opacity === '0'){
      this.animate(this.e, 'top', E);
    } 
    if(fPos < limit && this.f.style.opacity === '0'){
      this.animate(this.f, 'right', F);
    }
    if(gPos < limit && this.g.style.opacity === '0'){
      this.animate(this.g, 'left', G);
    } 
    if(hPos < limit && this.h.style.opacity === '0'){
      this.animate(this.h, 'top', H);
    }
  }

  animate = (obj, from, timeLine) => {
    switch (from) {
      case 'top':
        this.setTimeline(obj, 0, -100, timeLine);
        break;
      case 'right':
        this.setTimeline(obj, 100, 0, timeLine);
        break;
      case 'bottom':
        this.setTimeline(obj, 0, 100, timeLine);
        break;
      case 'left':
        this.setTimeline(obj, -100, 0, timeLine);
        break;
      case 'reverse':
        this.setTimeline(obj, 0, 0, timeLine, true);
        break;
      default:
        return;
    }
  }

  setTimeline = (obj, x, y, timeLine, reverse = false) => {
    if(!reverse){
      timeLine
        .set(obj, { x: x, y: y }) 
        .to(obj, 0.7, { x: 0, y: 0, autoAlpha: 1, ease: Power1.easeOut })
    } else {
      timeLine.reverse();
    }
  } 
  
  render() {
    const { language } = this.props;
    return [
      <h2 key={0} id="skills">{language === "eng" ? "Skills" : "Kompetens"}</h2>,      
      <div key={1} className="skills">
        <div className="skill-item" ref={ref => this.a = ref} style={{ opacity: 0 }}>
          <img src={IMGjavascript} alt="javascript" />
          <span>Javascript</span>
        </div>
        <div className="skill-item" ref={ref => this.b = ref} style={{ opacity: 0 }}>
          <img src={IMGreact} alt="react" />
          <span>React</span>
        </div>
        <div className="skill-item" ref={ref => this.c = ref} style={{ opacity: 0 }}>
          <img src={IMGcss} alt="css" />
          <span>CSS</span>
        </div>
        <div className="skill-item" ref={ref => this.d = ref} style={{ opacity: 0 }}>
          <img src={IMGhtml} alt="html" />
          <span>HTML</span>
        </div>
        <div className="skill-item" ref={ref => this.e = ref} style={{ opacity: 0 }}>
          <img src={IMGgithub} alt="github" />
          <span>Version Control</span>
        </div>
        <div className="skill-item" ref={ref => this.f = ref} style={{ opacity: 0 }}>
          <img id="needs-help" src={IMGdatabase} alt="database" />
          <span>Database management</span>
        </div>
        <div className="skill-item" ref={ref => this.g = ref} style={{ opacity: 0 }}>
          <img src={IMGlinux} alt="linux" />
          <span>Unix based systems</span>
        </div>
        <div className="skill-item" ref={ref => this.h = ref} style={{ opacity: 0 }}>
          <img src={IMGvscode} alt="vscode" />
          <span>VS Code</span>
        </div>
      </div>
    ]
  }
}

export default Skills;
