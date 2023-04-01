import React from 'react';
import Container from 'muicss/lib/react/container';

export const CentricaDesOps = () => {
  return (
    <React.Fragment>
      <Container>
        <iframe
          title="Centrica Case Study"
          src="../CaseStudy_Centrica.pdf#view=FitH"
          width="100%"
          className="CS_iframe"
        ></iframe>
      </Container>
    </React.Fragment>
  );
};
