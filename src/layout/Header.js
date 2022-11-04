import React from 'react';
import PropTypes from 'prop-types';
import jss from 'jss';
import preset from 'jss-preset-default';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import Caricature from '../components/caricature';
import Nav from '../components/nav';

import headerTile from '../images/headerbg.png';
import workDesk from '../images/workdesk.png';
import brickTile from '../images/wall_pattern.png';


jss.setup(preset());

const styles = {
    headerBar: {
        background: `url(${headerTile}) repeat-x 0 0`,
        position: 'relative',
        '&:before': {
            background: `url(${brickTile}) repeat-x 0 0`,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '120%',
            height: 315
        }
    },
    workDesk: {
        background: `url(${workDesk}) no-repeat 0 0`
    }
    
}

const {classes} = jss.createStyleSheet(styles).attach();

export default function Header({sticky}) {

    return (
        <div className="header-container">
        <Panel id="site-header" className={`mui--z2 ${classes.headerBar} ${sticky?'sticky':null}`}>
            <Container fluid={false}>
                <Row>
                    <Col xs="8">
                        <h3 id="site-title" className="animated fadeIn">AWAIS WAHEED</h3>
                        <div className="designation animated flipInX" title="UX Designer - UI Designer - Font-end Developer">UX/UI DESIGNER<br/>UI DEVELOPER</div>
                    </Col>
                    <Col xs="4" className="relative">
                        <div className={`workDesk animated fadeInRight ${classes.workDesk}`}></div>
                        <Caricature />
                    </Col>
                    <Col xs="12">
                        <Nav />
                    </Col>
                </Row>
            </Container>
        </Panel>
        </div>
    );
}

Header.propTypes = {
    sticky: PropTypes.bool.isRequired
}