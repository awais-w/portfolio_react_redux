import React from 'react';
import CV from '../CV_AWAIS.pdf';

export default function ResumeAbout(props) {
    return (
        <React.Fragment>
            <ul className="intro noBullet noMargin noPad clearfix marTop marBottom highlightColor">
                <li className="clr">
                    <div className="mui--pull-left mar10Right"><i className="material-icons sizeMedium">face</i></div>
                    <h3 className="mui--pull-left noMargin">Awais Waheed</h3>
                </li>
                <li className="clr">
                    <div className="mui--pull-left mar10Right"><i className="material-icons sizeMedium">location_on</i></div>
                    <h3 className="mui--pull-left noMargin">London</h3>
                </li>
                <li className="clr">
                    <div className="mui--pull-left mar10Right"><i className="material-icons sizeMedium">alternate_email</i></div>
                    <h3 className="mui--pull-left noMargin"><a href="mailto:awais@alwaysawais.com?body=Hi%20Awais,">awais@alwaysawais.com</a></h3>
                </li>
                <li className="clr">
                    <div className="mui--pull-left mar10Right"><i className="material-icons sizeMedium">assignment_ind</i></div>
                    <h3 className="mui--pull-left noMargin"><a href={CV} target="_blank" rel="noopener noreferrer">Download my CV</a></h3>
                </li>
            </ul>
            {/* <h2>Awais Waheed • London • <a href="mailto:awais@alwaysawais.com" target="_blank" rel="noopener noreferrer">awais@alwaysawais.com</a></h2> */}
            <p>My skill set offers to facilitate a digital product development lifecycle highlighting the process of research, strategy, prototyping, visual design and front-end development.</p>
            <p>I come with a vast experience leveraging modern UI design tools and JavaScript to prototype/design/build responsive websites, mobile apps, and interactive features that drive business growth and improve user experience.</p>
            <p>In my most recent roles, I've led design teams to produce visually aesthetic as well as functional and accessible design on the back of research and testing. </p>
            <h3 className="highlightColor clr">At a glance </h3>
            <ul className="custom">
                <li><b>Hybrid Designer/Developer</b>&nbsp;:&nbsp;<span>UX/UI Designer with hands on experience of Front-end Development</span></li>
                <li><b>Design Ops</b> & <b>Design systems</b> setup and maintainence</li>
                <li><b>15+ years</b>&nbsp;<span>agency and industry experience</span></li>
                <li><b>Agile (Scrum/Kanban)</b> as well as <b>Linear (Waterfall) </b> workflow experience</li>
                <li><b>Masters degree</b>&nbsp;:&nbsp;<span>New media Art & Design</span></li>
                <li><b>First degree</b>&nbsp;:&nbsp;<span>Computer Sciences (BCS)</span></li>
            </ul>
        </React.Fragment>
    );
}