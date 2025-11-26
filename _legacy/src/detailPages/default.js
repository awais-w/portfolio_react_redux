import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

export const Default = (props) => {
    
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <h1 className="title">Sorry, project details not found!</h1>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}