import React, { Component } from 'react';

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
      if (timeline.children[i].getBoundingClientRect().top + (timeline.children[i].getBoundingClientRect().height/4) - document.documentElement.clientHeight < 0
          && timeline.children[i].className !== "timeline-element inview") {
        timeline.children[i].className = "timeline-element inview";
        timeline.children[i].getElementsByClassName("timeline-header-dot")[0].className = "timeline-header-dot inview"
        this.setState(prev => ({ amtInView: prev.amtInView + 1 }))
      }
    }
  }

  renderTimeline = () => {
    const { elements } = this.props;
    return elements.map((el, i) => {
      return (
        <div className="timeline-element" key={i}>
          <div className="timeline-header-dot" />
          <div className="timeline-header-tag" />
          <div className="timeline-header">
            <div className="image-holder">
              <img src={el.imageURL} alt="logo"/>
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
      <h2 key={0} id="timeline">{language === "eng" ? "Timeline" : "Tidslinje"}</h2>,
      <div key={1} className="timeline-holder">
        <div className="timeline" ref={ref => this.timeline = ref}> 
          {elements}
          <div className="timeline-end" />
        </div>
      </div>
    ]      
  }
}

export default Timeline;