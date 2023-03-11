import React, { Component } from 'react';
// import Container from 'muicss/lib/react/container';
import PropTypes from 'prop-types';
// import Panel from 'muicss/lib/react/Panel';

import { Default as DefaultDetailsPage } from '../detailPages/default';
import { RbsDev } from '../detailPages/rbs_dev';
import { AccoladeDev } from '../detailPages/accolade_dev';
import { AccoladeUi } from '../detailPages/accolade_ui';
import { NatwestDev } from '../detailPages/natwest_dev';
import { SuperdrugDev } from '../detailPages/superdrug_dev';
import { CariparmaDev } from '../detailPages/cariparma_dev';
import { UlsterDev } from '../detailPages/ulster_dev';
import { UlsterUi } from '../detailPages/ulster_ui';
import { NatwestUi } from '../detailPages/natwest_ui';
import { BGRefresh } from '../detailPages/bg_brandRefresh';
import { RbsUi } from '../detailPages/rbs_ui';
import { VodafoneUx } from '../detailPages/vodafone_ux';
import { RbsUx } from '../detailPages/rbs_ux';
import { MastercardUx } from '../detailPages/mastercard_ux';
import { AgentportalUx } from '../detailPages/agentportal_ux';

import { connect } from 'react-redux';
import { hideDetails } from '../store/actions';

import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';

let mainWrapper, selectedProject;
// let pageOverlay;


class PageOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollPosition: 0
        }
    }

    animationEnd(e) {
        if (e.target.classList.value === 'up') {
            e.target.querySelector("i.close").style.position="fixed";
            mainWrapper.style.display="none";
        } else if (e.target.classList.value === 'down') {
            // e.target.style.display="none";
        } ;
        
    }
    animationStart(e) {
        if (e.target.classList.value === 'down') {
            e.target.querySelector("i.close").style.position="absolute";
            mainWrapper.style.display="block";
            document.documentElement.scrollTop = document.body.scrollTop = this.state.scrollPosition;
        } else if (e.target.classList.value === 'up') {
            // e.target.style.display="block";
            document.getElementById("pageOverlay").scrollTop = 0;
            this.setState((prevState, props) => {
                return {scrollPosition: document.documentElement.scrollTop || document.body.scrollTop};
            });
        };
    }
    
    handleOverlay() {
        const pageOverlay = document.getElementById('pageOverlay');
        if (this.props.clickedThumb.showDetails) { 
            pageOverlay.classList.add('up')
            pageOverlay.classList.remove('down')
        } else  {
            pageOverlay.classList.add('down');
            pageOverlay.classList.remove('up');
        }   
    }

    render() {
        const projects = {
            rbs_dev: RbsDev,
            accolade_dev: AccoladeDev,
            accolade_ui: AccoladeUi,
            natwest_dev: NatwestDev,
            superdrug_dev: SuperdrugDev,
            cariparma_dev: CariparmaDev,
            ulster_dev: UlsterDev,
            ulster_ui: UlsterUi,
            natwest_ui: NatwestUi,
            bg_brandRefresh: BGRefresh,
            rbs_ui: RbsUi,
            vodafone_ux: VodafoneUx,
            rbs_ux: RbsUx,
            mastercard_ux: MastercardUx,
            agentportal_ux: AgentportalUx,
            default_page: DefaultDetailsPage
        };
        const TagName = projects[this.props.clickedThumb.id] || projects['default_page'];

        return (
           <React.Fragment>
               <div id="pageOverlay">
                    <i className="close material-icons" onClick={this.props.hideDetails}>close</i>
                    <div className="content-wrapper">
                        <TagName industry={selectedProject ? selectedProject.industry:null} />
                    </div>
                    
                    <Container className="marTopTwice marBottomTwice">
                        <Button className="back-btn" size="large" color="primary" variant="raised" onClick={this.props.hideDetails}>Back</Button>
                    </Container>
               </div>
           </React.Fragment>
        );
    }
    componentDidMount() {

        const self = this;
        mainWrapper = document.getElementById('main-wrapper');

        // console.log(selectedProject)
        
        const overlayEl = document.getElementById('pageOverlay');
        overlayEl.addEventListener("webkitAnimationEnd", this.animationEnd.bind(this));
        overlayEl.addEventListener("animationend", this.animationEnd.bind(this));
        overlayEl.addEventListener("oanimationend", this.animationEnd.bind(this));
        overlayEl.addEventListener("webkitAnimationStart", this.animationStart.bind(this));
        overlayEl.addEventListener("animationstart", this.animationStart.bind(this));
        overlayEl.addEventListener("oanimationstart", this.animationStart.bind(this));

        window.onpopstate = function(event) {
            // alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
            self.props.hideDetails();
        };
        
    }
    componentDidUpdate() {
        this.handleOverlay();

        const self = this;
        
        selectedProject = self.props.tabs.filter(i => {
            return i.projects.filter(j => j.id === self.props.clickedThumb.id).length
        })[0].projects.filter(k => k.id === self.props.clickedThumb.id)[0];

        window.history.pushState({section: this.props.clickedThumb.id}, this.props.clickedThumb.id, `?section=${this.props.clickedThumb.id}`);

        if(!this.props.clickedThumb.showDetails) {
            window.history.replaceState({}, '/', '/');
        }
    }
}

const mapStateToProps = (state) => {
    return { clickedThumb:state.clickedThumb, tabs: state.tabs }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideDetails: () => dispatch(hideDetails())
    }
  }

PageOverlay.propTypes = {
    clickedThumb: PropTypes.object,
    hideDetails: PropTypes.func
}
  
export default connect(mapStateToProps,mapDispatchToProps)(PageOverlay);
