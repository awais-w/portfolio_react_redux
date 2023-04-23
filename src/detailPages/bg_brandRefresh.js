import React from 'react';
import Container from 'muicss/lib/react/container';

export const BGRefresh = () => {
  return (
    <React.Fragment>
      <Container>
        <iframe
          title="BG Case Study"
          src="../brandRefresh/brandRefresh.html"
          width="100%"
          className="CS-iframe framer-content"
        ></iframe>
      </Container>
    </React.Fragment>
  );
};
