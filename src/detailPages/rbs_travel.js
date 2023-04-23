import React from 'react';
import Container from 'muicss/lib/react/container';

export const RBSTravel = () => {
  return (
    <React.Fragment>
      <Container>
        <iframe
          title="RBS Case Study"
          src="../CaseStudy_RBS.pdf#view=FitH"
          width="100%"
          className="CS-iframe"
        ></iframe>
      </Container>
    </React.Fragment>
  );
};
