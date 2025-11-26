import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import { connect } from 'react-redux';
// import {isMobileOnly} from 'react-device-detect';
import { offset } from '../utilities';
import { showDetails } from '../store/actions';

import titleImage from '../images/showcase_vectors.png';
import titleImageMobile from '../images/showcase_vectors_mobile.png';

let tabsOffset;
class Showcase extends Component {
  onTabChange(i, value, tab, ev) {
    // console.log(arguments);
  }

  onTabActive(tab) {
    // console.log(this.props);
    tabsOffset = offset(document.querySelector('.tabs')).top - 90;
    if (this.props.sticky)
      document.body.scrollTop = document.documentElement.scrollTop = tabsOffset;
  }

  handleThumbClick(id) {
    this.props.showDetails(id);
  }

  render() {
    return (
      <React.Fragment>
        <div className="section-sep showcase-sep">
          <Container className="title-img title-img-showcase">
            {/* <img alt="showcase" src={isMobileOnly ? titleImageMobile : titleImage} /> */}
            <img alt="Showcase" className="wide-img" src={titleImage} />
            <img alt="Showcase" className="mobile-img" src={titleImageMobile} />
          </Container>
          <div className="clip-top"></div>
        </div>
        <div className="section-wrapper showcase" id="showcaseSection">
          <div className="thumbs-bg"></div>
          <Container fluid={false}>
            <Row>
              <Col xs="12">
                <h1 className="title lightItalic sizeXlarge">SHOWCASE</h1>
                <hr className="sep" />
              </Col>
            </Row>

            <p className="textCenter marTop marBottomTwice">
              Here are some of the case studies of my recent work
            </p>

            <Tabs
              className="tabs marTopTwice"
              onChange={this.onTabChange}
              defaultSelectedIndex={1}
              justified={true}
            >
              {this.props.tabs.map((tab, i) => (
                <Tab
                  key={i}
                  value={`pane-${i + 1}`}
                  label={tab.caption}
                  onActive={this.onTabActive.bind(this)}
                >
                  <Row className="thumbs">
                    {tab.projects.map((item, j) => (
                      <Col
                        key={j}
                        xs="12"
                        md="6"
                        className="showcase-thumb marTop marBottom hvr-bob"
                      >
                        <div className="thumb-wrapper">
                          <img
                            className="fullWidth"
                            alt={item.title}
                            src={item.thumb}
                          />
                          <div className="overlay">
                            <div className="content">
                              <h2>{item.title}</h2>
                              <p>{item.shortDesc}</p>
                              

                              <div className="industry">
                                <span>Industry:&nbsp;</span>
                                <ul className="sectors">
                                  {item.industry.map((sector, k) => {
                                    return <li key={k}>{sector}</li>;
                                  })}
                                </ul>
                              </div>

                              {/* <p>{item.tools}</p> */}

                              <button
                                id={item.id}
                                onClick={() => this.handleThumbClick(item.id)}
                              >
                                view details
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Tab>
              ))}
            </Tabs>
          </Container>
        </div>
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    const tabsBar = document.querySelector('.tabs .mui-tabs__bar');
    this.props.sticky
      ? tabsBar.classList.add('sticky')
      : tabsBar.classList.remove('sticky');
  }
}

const mapStateToProps = state => {
  return {
    tabs: state.tabs,
    sticky: state.sticky.showcase,
    clickedThumb: state.clickedThumb,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showDetails: id => dispatch(showDetails(id)),
  };
};

Showcase.propTypes = {
  tabs: PropTypes.array,
  sticky: PropTypes.bool,
  clickedThumb: PropTypes.object,
  showDetails: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Showcase);
