import React from "react";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

export default function About() {
  return (
    <div className="section-wrapper about" id="aboutSection">
      <Container>
        <Row>
          <Col xs="12" className="textCenter">
            <h1 className="heading noMargin">
              <span role="img" aria-label="Hello!">
                👋🏽
              </span>{" "}
              Hi! I'm Awais,
            </h1>
            <div className="desc marTop sizeMedium">
              <p>
                I'm a <b>Senior Product Designer</b> having expertise in{" "}
                <b>UI design</b>, <b>Experience design</b> and hands on
                experience with <b>Front end development</b>.{" "}
              </p>
              <p>
                I specialise in commissioning and maintaining brand's{" "}
                <b>Design System / UI Kit</b> and also <b>Design operations</b>{" "}
                focusing on processes, tools and ways of working.
              </p>
              <p>
                Keeping focus on the <b>User</b>, I aim to deliver{" "}
                <b>end to end design</b>{" "}
                starting with <b>research</b> and <b>analysis</b> to{" "}
                <b>identify problems</b> and <b>user pain points</b>, then
                translate the findings into{" "}
                <b>testable solutions & prototypes</b> and then design visually
                aesthetic and responsive user interfaces.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
