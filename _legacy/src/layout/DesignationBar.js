import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';

export default function DesignationBar (props) {
    
    return (
        <Container className="designationBar">
            <Row>
                <div className="left copy mui--pull-left mui--hidden-xs">
                    USER<br />INTERFACE
                </div>
                <div className="left copy left-xs mui--pull-left hide mui--visible-xs-inline-block ">
                    UI
                </div>
                <div className="right copy mui--pull-left">
                    DESIGNER<br />DEVELOPER
                </div>
            </Row>
        </Container>
    );
    
}
