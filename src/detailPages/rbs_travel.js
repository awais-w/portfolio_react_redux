import React from 'react';
import Container from 'muicss/lib/react/container';

export const RBSTravel = () => {
  return (
    <React.Fragment>
      <Container>
      <iframe
          title="Centrica Case Study"
          src="../rbsTravel/rbs_travel.html"
          width="100%"
          className="CS-iframe framer-content"
        ></iframe>
      </Container>
    </React.Fragment>
  );
};
