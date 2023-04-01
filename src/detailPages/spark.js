import React from 'react';
import Container from 'muicss/lib/react/container';

export const SparkDS = () => {
  return (
    <React.Fragment>
      <Container>
        <iframe
          title="Spark Design System Case Study"
          src="../CaseStudy_spark.pdf#view=FitH"
          width="100%"
          className="CS_iframe"
        ></iframe>
      </Container>
    </React.Fragment>
  );
};
