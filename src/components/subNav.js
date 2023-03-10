
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function SubNav(props) {
    const ulClass = props.mobile ? 'mui-tabs__bar' : 'resume-nav';
    const activeClass = props.mobile ? 'mui--is-active' : 'active';
    const offset = props.mobile ? '110' : '90';
    return (
        <ul className={`${ulClass} ${props.sticky.resume?"sticky":null}`}>
            <li className={props.activeResumeSection.about?activeClass:null}><AnchorLink offset={offset} href="#about">About</AnchorLink></li>
            <li className={props.activeResumeSection.experience?activeClass:null}><AnchorLink offset={offset} href="#experience">Experience</AnchorLink></li>
            <li className={props.activeResumeSection.education?activeClass:null}><AnchorLink offset={offset} href="#education">Education</AnchorLink></li>
            <li className={props.activeResumeSection.skills?activeClass:null}><AnchorLink offset={offset} href="#skills">Skills</AnchorLink></li>
        </ul>
    );   
}
