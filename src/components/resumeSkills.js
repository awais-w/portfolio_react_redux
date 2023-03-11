import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import ToolsTable from './toolsTable';
import {
  ai,
  // angular,
  axure,
  // balsmiq,
  // bootstrap,
  // bulma,
  // css,
  // es,
  figma,
  // flinto,
  git,
  // gulp,
  // html,
  htmlcss,
  invision,
  jquery,
  js,
  // less,
  // materialize,
  miro,
  // mobx,
  // node,
  // npm,
  // penpaper,
  photoshop,
  // principle,
  react,
  redux,
  sass,
  sketch,
  storybook,
  ts,
  userzoom,
  uxpin,
  // webpack,
  whiteboard,
  xd,
  // yarn,
  zeplin,
} from '../config';

const toolsList = {
  dev: [
    { caption: 'HTML/CSS', image: htmlcss, expert: true },
    { caption: 'Sass', image: sass, expert: true },
    { caption: 'React', image: react, expert: true },
    { caption: 'Redux', image: redux, expert: true },
    { caption: 'Typescript', image: ts, expert: false },
    // {caption:"Mobx", image: mobx, expert: true},
    // {caption:"ES6/7", image: es, expert: true},
    { caption: 'Storybook', image: storybook, expert: true },
    { caption: 'Javascript', image: js, expert: true },
    { caption: 'jQuery', image: jquery, expert: true },
    // {caption:"Angular", image: angular, expert: false},
    // {caption:"HTML", image: html, expert: true},
    // {caption:"CSS", image: css, expert: true},
    // {caption:"Less", image: less, expert: true},
    // {caption:"Materialize", image: materialize, expert: true},
    // {caption:"Bulma", image: bulma, expert: false},
    // {caption:"Node", image: node, expert: false},
    // {caption:"NPM", image: npm, expert: true},
    // {caption:"Yarn", image: yarn, expert: true},
    // {caption:"Gulp", image: gulp, expert: true},
    // {caption:"Webpack", image: webpack, expert: false},
    { caption: 'Git', image: git, expert: true },
  ],
  ui: [
    { caption: 'Figma', image: figma, expert: false },
    { caption: 'Sketch', image: sketch, expert: true },
    { caption: 'XD', image: xd, expert: true },
    { caption: 'Illustrator', image: ai, expert: true },
    { caption: 'Photoshop', image: photoshop, expert: true },
    { caption: 'Zeplin', image: zeplin, expert: true },
    { caption: 'Invision', image: invision, expert: true },
  ],
  ux: [
    { caption: 'Figjam', image: figma, expert: true },
    { caption: 'Miro', image: miro, expert: true },
    { caption: 'Axure RP', image: axure, expert: true },
    { caption: 'UX Pin', image: uxpin, expert: true },
    { caption: 'XD', image: xd, expert: true },
    // { caption: 'Balsmiq', image: balsmiq, expert: false },
    { caption: 'Userzoom', image: userzoom, expert: false },
    // {caption:"Flinto", image: flinto, expert: false},
    // {caption:"Principle", image: principle, expert: false},
    { caption: 'Whiteboard', image: whiteboard, expert: true },
    // { caption: 'Pen/Paper', image: penpaper, expert: true },
  ],
};

export default function ResumeSkills(props) {
  return (
    <React.Fragment>
      <h1>Skills</h1>

      <Row>
        <Col sm="6">
          <h3 className="highlightColor clr">Management</h3>
          <ul className="custom">
            <li>Design ops setup</li>
            <li>Project planning &amp; management</li>
            <li>Communication &amp; collaboration</li>
            <li>Design &amp; Ideation workshops</li>
            <li>Mentorship &amp; team training</li>
          </ul>
        </Col>
        <Col sm="6">
          <h3 className="highlightColor clr">UX</h3>
          <ul className="custom">
            <li>Insights analysis</li>
            <li>User research</li>
            <li>Experience mapping</li>
            <li>Information architecture</li>
            <li>User flows / journeys</li>
            <li>Wireframing &amp; Prototyping</li>
            <li>Usability testing</li>
          </ul>
        </Col>
        <Col sm="6">
          <h3 className="highlightColor clr">UI</h3>
          <ul className="custom">
            <li>Visual design</li>
            <li>Design systems</li>
            <li>Design principles</li>
            <li>Layout and composition</li>
            <li>Brand refresh</li>
            <li>Accessibility</li>
          </ul>
        </Col>
        <Col sm="6">
          <h3 className="highlightColor clr">Development</h3>
          <ul className="custom">
            <li>HTML / CSS / JS</li>
            <li>Figma Plugin/Widgets dev</li>
            <li>Version control</li>
            <li>Unit test</li>
            <li>Build and deploy</li>
          </ul>
        </Col>
      </Row>

      <hr />

      <p>
        I use the following tools/libraries/frameworks/softwares to aid the
        processes for <b>User Experience(UX)</b>,{' '}
        <b>User Interface Design(UI)</b> and <b>Front-end Development(FED)</b>{' '}
        to build beautiful and useful visual interfaces.
      </p>
      <div className="cols-wrapper">
        <ToolsTable toolsList={toolsList} />
      </div>
    </React.Fragment>
  );
}
