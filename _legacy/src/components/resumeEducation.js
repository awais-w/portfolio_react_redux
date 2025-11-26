import React from 'react';

export default function ResumeEducation(props) {
    return (
        <React.Fragment>
            <h1>Education</h1>
            <ul className="education-list">
                <li>
                    <h3 className="title">Masters (New Media Art & Design)</h3>
                    <p className="bolder sizeSmall">2009 • University of West London</p>
                </li>
                <li>
                    <h3 className="title">Bachelors (Computer Sciences)</h3>
                    <p className="bolder sizeSmall">2002 • University of central Punjab, Lahore</p>
                </li>
                <li>
                    <h3 className="title">Certification in Design and Multimedia</h3>
                    <p className="bolder sizeSmall">2003 • Peak Solutions (Pvt) Ltd</p>
                </li>
            </ul>
            
        </React.Fragment>
        
    );
}