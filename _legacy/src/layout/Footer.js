import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';

import CV from '../CV_AWAIS.pdf';
import hireMe from '../images/hireme.png';


export default function Footer (props) {
    return (
        <React.Fragment>
            <Container className="relative">
                <a className="hireme" href="mailto:awais@alwaysawais.com?subject=Let's%20work%20together&body=Hi%20Awais,">
                    <img alt="hire me" src={hireMe} />
                    {/* <span className="availability">I'm AVAILABLE for work,</span> */}
                    <span>Let's get working together!</span>
                </a>
            </Container>
            <Panel id="site-footer" className="noMargin">
                <Container fluid={false}>
                    <Row>
                        <Col xs="6">ALWAYSAWAIS • Built with <b>React/Redux</b></Col>
                        <Col xs="6" className="textRight"><a title="awais@alwaysawais.com" href="mailto:awais@alwaysawais.com">EMAIL ME</a> • <a href={CV} target="_blank" rel="noopener noreferrer">VIEW CV</a></Col>
                    </Row>
                </Container>
            </Panel>
        </React.Fragment>
    );
}
