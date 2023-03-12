import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

export default function About() {
  return (
    <div className="section-wrapper about" id="aboutSection">
      <Container>
        <Row>
          <Col xs="12" className="textCenter">
            <h1 className="heading noMargin">
              <span role="img" aria-label="Hello!">
                👋🏽
              </span>{' '}
              Hi! I'm Awais,
            </h1>
            <p className="desc marTop sizeMedium">
              I'm a <b>Senior full stack Designer</b> {' '} having expertise in <b>UI design</b>, <b>Experience design</b> and hands on experience with <b>Front end development</b>. <br/><br/>I specialise in commissioning and maintaining brand's{' '}
              <b>Design System / UI Kit</b> and also <b>Design operations</b> focusing on processes, tools and ways of working.
              <br /><br />I help gather business and
              user requirements and translate them into{' '}
              <b>testable prototypes</b>, design visually aesthetic user
              interfaces and convert them into{' '}
              <b>responsive and interactive</b> web apps using modern{' '}
              <b>Javascript</b> frameworks and libraries.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
