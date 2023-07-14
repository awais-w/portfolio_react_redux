import React from "react";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

export default function About() {
  return (
    <div className="section-wrapper about" id="aboutSection">
      <Container>
        <Row className="aboutRow">
          <Col lg="8" className="textCenter">
            <h1 className="heading noMargin">
              <span role="img" aria-label="Hello!">
                👋🏽
              </span>{" "}
              Hi! I'm Awais,
            </h1>
            <div className="desc marTop sizeMedium">
              <p>
                I'm a <b>Senior Product Designer</b> having expertise in{" "}
                <b>Experience design</b>/<b>UI design</b> and hands-on
                experience with <b>Front end engineering</b>.{" "}
              </p>
              <p>
                Keeping focus on the <b>User</b>, I aim to deliver{" "}
                <b>end-to-end design</b>{" "}
                starting with <b>research</b> and <b>analysis</b> to{" "}
                <b>identify problems</b> and <b>user pain points</b>, then
                translate the findings into{" "}
                <b>testable solutions & prototypes</b> and then design/develop <b>visually
                aesthetic</b> and <b>responsive</b> user interfaces.
              </p>
              <p>
                I also specialise in commissioning and maintaining a brand's{" "}
                <b>Design System</b> to instill cohesion and consistency among team's projects, and also <b>Design operations</b>{" "}
                focusing on tools, processes and ways of working.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
