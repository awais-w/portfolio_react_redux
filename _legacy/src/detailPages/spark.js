import React from 'react';
import Container from 'muicss/lib/react/container';
// import SparkPlainText from './spark_plaintext';

export const SparkDS = () => {
  // function resizeIframe() {
  //   var obj = document.querySelector(".CS-iframe");
  //   const setHeight = () => {
  //     const h = obj.contentWindow.document.documentElement.scrollHeight;
  //     if (h>150) obj.style.height = h + 10 + 'px';
  //   }
  //   if (obj) setTimeout(setHeight, 1000);
  // }
  return (
    <React.Fragment>
      <Container>
        {/* <iframe
          title="Spark Design System Case Study"
          src="../CaseStudy_spark.pdf#view=FitH"
          width="100%"
          className="CS-iframe"
        ></iframe> */}
        {/* <SparkPlainText/> */}
        {/* <iframe src="https://notioniframe.com/notion/2140vca0b0f" className="CS-iframe"></iframe> */}
        <iframe
          title="Spark Design System Case Study"
          src="../spark/Spark.html"
          // src="https://awais.framer.website/"
          width="100%"
          className="CS-iframe framer-content"
          // onLoad={resizeIframe()}
        ></iframe>
      </Container>
    </React.Fragment>
  );
};
