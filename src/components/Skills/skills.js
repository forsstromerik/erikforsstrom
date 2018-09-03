import React, { Component } from 'react';
import imgJavascript from '../../images/if_javascript.svg';
import imgReact from '../../images/if_react.svg';
import imgCss from '../../images/if_css.svg';
import imgHtml from '../../images/if_html.svg';
import imgGithub from '../../images/if_github.svg';
import imgDatabase from '../../images/if_database.svg';
import imgLinux from '../../images/if_linux.svg';
import imgVscode from '../../images/if_vscode.svg';
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

  checkIfInView = () => {
    const limit = document.documentElement.clientHeight;
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
    // } if (aPos > limit && this.a.style.opacity === '1') {
    //   this.animate(this.a, 'reverse', A);
    // }
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
    }
  }

  setTimeline = (obj, x, y, timeLine, reverse = false) => {
    if(!reverse){
      console.log("not reverse");
      timeLine
        .set(obj, { x: x, y: y }) 
        .to(obj, 0.7, { x: 0, y: 0, autoAlpha: 1, ease: Power1.easeOut })
    } else {
      console.log("reverse");
      timeLine.reverse();
    }
  } 
  
  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>
        <div ref={ref => this.a = ref} style={{ opacity: 0 }}>
          <img src={imgJavascript} />
          <span>Javascript</span>
        </div>
        <div ref={ref => this.b = ref} style={{ opacity: 0 }}>
          <img src={imgReact} />
          <span>React</span>
        </div>
        <div ref={ref => this.c = ref} style={{ opacity: 0 }}>
          <img src={imgCss} />
          <span>CSS</span>
        </div>
        <div ref={ref => this.d = ref} style={{ opacity: 0 }}>
          <img src={imgHtml} />
          <span>HTML</span>
        </div>
        <div ref={ref => this.e = ref} style={{ opacity: 0 }}>
          <img src={imgGithub} />
          <span>Version Control</span>
        </div>
        <div ref={ref => this.f = ref} style={{ opacity: 0 }}>
          <img src={imgDatabase} />
          <span>Database management</span>
        </div>
        <div ref={ref => this.g = ref} style={{ opacity: 0 }}>
          <img src={imgLinux} />
          <span>Unix based systems</span>
        </div>
        <div ref={ref => this.h = ref} style={{ opacity: 0 }}>
          <img src={imgVscode} />
          <span>VS Code</span>
        </div>
      </div>
    );
  }
}

export default Skills;