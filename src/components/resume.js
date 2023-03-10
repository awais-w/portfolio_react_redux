import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import SubNav from './subNav';
import ResumeAbout from './resumeAbout';
import ResumeSkills from './resumeSkills';
import ResumeExperience from './resumeExperience';
import ResumeEducation from './resumeEducation';

import titleImage from '../images/profile_vectors.png';
import titleImageMobile from '../images/profile_vectors_mobile.png';

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-sep resume-sep">
          <Container className="title-img">
            {/* <img alt="showcase" src={isMobileOnly ? titleImageMobile : titleImage} /> */}
            <img alt="Profile" className="wide-img" src={titleImage} />
            <img alt="Profile" className="mobile-img" src={titleImageMobile} />
          </Container>
          <div className="clip-top"></div>
        </div>
        <div className="section-wrapper resume" id="resumeSection">
          <div className="clip-top"></div>
          <Container fluid={false}>
            <Row>
              <Col xs="12">
                <h1 className="title lightItalic sizeXlarge">PROFILE</h1>
                <hr className="sep" />
              </Col>
            </Row>

            <Row>
              <Col sm="8" lg="9" id="resumeSection">
                <div className="tabs">
                  <SubNav {...this.props} mobile={true} />
                </div>
                <div id="about" className="section">
                  <ResumeAbout />
                </div>
                <div id="experience" className="section">
                  <ResumeExperience />
                </div>
                <div id="education" className="section">
                  <ResumeEducation />
                </div>
                <div id="skills" className="section">
                  <ResumeSkills />
                </div>
              </Col>
              <Col sm="4" lg="3" className="mui--hidden-xs">
                <SubNav {...this.props} mobile={false} />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    sticky: state.sticky,
    activeResumeSection: state.activeResumeSection,
  };
};

Resume.propTypes = {
  sticky: PropTypes.object,
  activeResumeSection: PropTypes.object,
};

export default connect(mapStateToProps)(Resume);
