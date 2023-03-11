import React from 'react';
import Container from 'muicss/lib/react/container';

export const BGRefresh = () => {
  return (
    <React.Fragment>
      <Container>
        <iframe
          title="BG Case Study"
          src="../CaseStudy_BritishGas.pdf#view=FitH&toolbar=0"
          width="100%"
          className="CS_iframe"
        ></iframe>
      </Container>
    </React.Fragment>
  );
};
