import React from 'react';
import About from '../components/about';
import Showcase from '../components/showcase';
import Resume from '../components/resume';

export default function Pages() {
  return (
    <React.Fragment>
      <About />
      <Resume />
      <Showcase />
    </React.Fragment>
  );
}
