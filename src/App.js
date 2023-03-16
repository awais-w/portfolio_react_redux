import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './layout/Header';
import Pages from './layout/Pages';
import Footer from './layout/Footer';
import PageOverlay from './layout/PageOverlay';
// import { offset } from './utilities';
import { connect } from 'react-redux';
import {
  navSticky,
  navNormal,
  showcaseSticky,
  showcaseNormal,
  resumeSticky,
  resumeNormal,
  aboutActive,
  skillsActive,
  experienceActive,
  educationActive,
} from './store/actions';
// import './App.css';
import 'muicss/dist/css/mui.min.css';
import './scss/style.scss';

class App extends Component {
  componentDidMount() {
    this.handleStickies();
    this.handleQS();
  }

  handleQS() {
    const section = window.location.href;
    if (section.length) {
      if (section.includes("=")) {
        let sectionID = section.split('=')[1];
        if (document.getElementById(sectionID)) {
          document.getElementById(sectionID).click();
        }
      } else if (section.includes("#showcase")) {
        document.querySelector('[href="#showcaseSection"]').click();
      }
    }
  }

  handleStickies() {
    let self = this;
    // const tabsBar = document.querySelector('.showcase .tabs');
    // let showcaseOffset = offset(tabsBar).top - 55;
    // let aboutOffset = offset(document.getElementById('about')).top;
    const resumeSection = document.getElementById('resumeSection');
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const experienceSection = document.getElementById('experience');
    const educationSection = document.getElementById('education');
    let resumeNavOffset, aboutTop, skillsTop, experienceTop, educationTop;

    window.onscroll = function() {
      resumeNavOffset = resumeSection.getBoundingClientRect().top + 20;
      aboutTop = aboutSection.getBoundingClientRect().top - 120;
      skillsTop = skillsSection.getBoundingClientRect().top - 120;
      experienceTop = experienceSection.getBoundingClientRect().top - 120;
      educationTop = educationSection.getBoundingClientRect().top - 120;

      if (window.scrollY > 257) {
        if (!self.props.nav) self.props.navSticky();
      } else {
        if (self.props.nav) self.props.navNormal();
      }
      // if (window.scrollY > showcaseOffset && resumeNavOffset > 250) {
      // if (window.scrollY > aboutOffset) {
      //   if (!self.props.showcase) self.props.showcaseSticky();
      // } else {
      //   if (self.props.showcase) self.props.showcaseNormal();
      // }
      if (resumeNavOffset < 0) {
        if (!self.props.resume) self.props.resumeSticky();
      } else {
        if (self.props.resume) self.props.resumeNormal();
      }
      if (aboutTop < 0 && experienceTop > 0) {
        if (!self.props.activeResumeSection.about) self.props.aboutActive(true);
      } else {
        if (self.props.activeResumeSection.about) self.props.aboutActive(false);
      }
      if (experienceTop < 0 && educationTop > 0) {
        if (!self.props.activeResumeSection.experience)
          self.props.experienceActive(true);
      }
      if (educationTop < 0 && skillsTop > 0) {
        if (!self.props.activeResumeSection.education)
          self.props.educationActive(true);
      }
      if (skillsTop < 0) {
        if (!self.props.activeResumeSection.skills)
          self.props.skillsActive(true);
      }
    };
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <div id="main-wrapper">
          <Header sticky={this.props.nav} />
          <Pages />
          <Footer />
        </div>
        <PageOverlay />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.sticky.nav,
    showcase: state.sticky.showcase,
    resume: state.sticky.resume,
    activeResumeSection: state.activeResumeSection,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navSticky: () => dispatch(navSticky()),
    navNormal: () => dispatch(navNormal()),
    showcaseSticky: () => dispatch(showcaseSticky()),
    showcaseNormal: () => dispatch(showcaseNormal()),
    resumeSticky: () => dispatch(resumeSticky()),
    resumeNormal: () => dispatch(resumeNormal()),
    aboutActive: active => dispatch(aboutActive(active)),
    skillsActive: active => dispatch(skillsActive(active)),
    experienceActive: active => dispatch(experienceActive(active)),
    educationActive: active => dispatch(educationActive(active)),
  };
};

App.propTypes = {
  nav: PropTypes.bool,
  showcase: PropTypes.bool,
  resume: PropTypes.bool,
  activeResumeSection: PropTypes.object,
  navSticky: PropTypes.func,
  navNormal: PropTypes.func,
  showcaseSticky: PropTypes.func,
  showcaseNormal: PropTypes.func,
  resumeSticky: PropTypes.func,
  resumeNormal: PropTypes.func,
  aboutActive: PropTypes.func,
  skillsActive: PropTypes.func,
  experienceActive: PropTypes.func,
  educationActive: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
