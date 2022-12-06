import React from 'react';
import sainsburysLogo from '../images/logos/sainsburys.png';
import argosLogo from '../images/logos/argos.png';
import semanticIntegrationLogo from '../images/logos/si.png';
import affinionLogo from '../images/logos/affinion.png';
import superdrugLogo from '../images/logos/superdrug.png';
import coralLogo from '../images/logos/coral.png';
import kaplanLogo from '../images/logos/kaplan.png';
import autodeskLogo from '../images/logos/autodesk.png';
import britishgasLogo from '../images/logos/britishgas.png';

export default function ResumeExperience(props) {
  return (
    <React.Fragment>
      <h1>Experience</h1>
      {/* <p>Below are some of the places where I've rendered my services as a contractor as well as a permanent employee.</p> */}
      <ul className="experience-list">
        <li>
          <a
            href="https://www.britishgas.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height="50" alt="British Gas" src={britishgasLogo} />
          </a>
          <h3 className="title">British gas</h3>
          <p className="bolder sizeSmall">
            Nov 2021 - Present • Contract Position • Lead Product Designer
          </p>
          <p className="desc">
            <ul className="custom">
              <li>
                Setup and maintenance of Design Systems/UI kits for multiple
                brands
              </li>
              <li>
                Mentoring and training the design team through workshops and
                learning sessions
              </li>
              <li>
                Defining and testing efficient and coherent ways of working and
                collaboration workflow
              </li>
              <li>Research and User testing</li>
              <li>Figma plugin development</li>
            </ul>
          </p>
        </li>
        <li>
          <a
            href="https://www.autodesk.co.uk/bim-360/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height="20" alt="Autodesk" src={autodeskLogo} />
          </a>
          <h3 className="title">Autodesk</h3>
          <p className="bolder sizeSmall">
            Apr 2021 - Nov 2022 • Contract Position • Senior UX/UI Designer
            Developer
          </p>
          <p className="desc">
            <ul className="custom">
              <li>
                Helping with finding solutions for complex cloud based
                construction management products
              </li>
              <li>Ideation and exploration</li>
              <li>Wireframing and Prototyping</li>
              <li>
                Simple solution of complex problems through different ways of UX
                mapping
              </li>
              <li>
                Creation of bespoke Wireframe library and file structure
                template
              </li>
              <li>
                Mentoring the team on Figma as a design and prototyping tool
              </li>
            </ul>
          </p>
        </li>
        <li>
          <a
            href="https://www.sainsburys.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height="30" alt="Sainsbury's PLC" src={sainsburysLogo} />
          </a>
          <a
            href="https://www.argos.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mar10Left"
          >
            <img height="30" alt="Sainsbury's PLC" src={argosLogo} />
          </a>
          <h3 className="title">Sainsbury's / Argos</h3>
          <p className="bolder sizeSmall">
            Mar 2019 - Apr 2021 • Contract Position • Lead UX/UI Designer / UI
            Developer
          </p>
          <p className="desc">
            {/* Sainsburys / Argos group is UK's leading retail entity well known to
            each household. I'm working as a sole UX/UI designer on an
            internally used Application which enables agents at call centre to
            carry out operations facilitating end customers. My responsibilities
            consist of carrying out user research along with business
            requirement gathering and producing prototypes showing an optimised
            user experience and business value and also providing a first class
            support on the front end needs working with the dev team on the
            stack which involves React JS, Typescript, Redux and taking the
            ownership of components and assets in Storybook js. Working closely
            with Product Owners and BAs and with dev knowledge pointing out the
            build feasibility and potential dev problems early on. */}
            <ul className="custom">
              <li>
                A sole UX/UI designer on an internally used Application which
                enables agents at call centre to carry out operations
                facilitating end customers
              </li>
              <li>
                Carrying out user research along with business requirement
                gathering and producing prototypes showing an optimised user
                experience and business value
              </li>
              <li>Developing agent facing UI design system</li>
              <li>
                Providing a first class support on the front end needs working
                with the dev team on the stack which involves React JS,
                Typescript, Redux and taking the ownership of components and
                assets in Storybook js
              </li>
              <li>
                Working closely with Product Owners and BAs and with dev
                knowledge pointing out the build feasibility and potential dev
                limitations early on
              </li>
            </ul>
          </p>
        </li>
        <li>
          <img
            height="30"
            alt="Semantic Integration"
            src={semanticIntegrationLogo}
          />
          <h3 className="title">Semantic Integration</h3>
          <p className="bolder sizeSmall">
            Jan 2019 - Feb 2019 • Contract Position • Lead UX/UI Designer
          </p>
          <p className="desc">
            Semantic Integration is a Data-driven Solutions and Consulting
            agency working with high end clients like Pearson. I was hired for a
            very short UX project at Pearson working on their internal app which
            facilitates asset management. I conducted user research and proposed
            solution through wireframes and highly interactive prototypes built
            in Axure RP, conducted user testing sessions and provided an highly
            optimised solution which fit user needs and business requirements.
          </p>
        </li>
        <li>
          <a
            href="https://www.affinioninternational.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              height="50"
              alt="Affinion International Ltd"
              src={affinionLogo}
            />
          </a>
          <h3 className="title">Affinion International</h3>
          <p className="bolder sizeSmall">
            Jul 2014 - Nov 2018 • Contract Position • Lead UI-UX Designer /
            Front-End Developer
          </p>
          <p className="desc">
            Affinion International is an affiliate marketing company mainly
            running loyalty and customer engagement programs with some industry
            leading clients. At Affinion international I was leading on most of
            the fintech projects, working on the UX strategies and visual
            creatives, building high end interactive clickthrough prototypes,
            providing polished pixel perfect UIs and also mentoring junior
            designers. On the dev side, coding the front end part using the
            modern web building technologies and frameworks, working with Rest
            APIs and state management tools.
          </p>
        </li>
        <li>
          <a
            href="https://www.superdrug.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height="30" alt="Superdrug" src={superdrugLogo} />
          </a>
          <h3 className="title">Superdrug</h3>
          <p className="bolder sizeSmall">
            Jul 2012 - Jul 2014 • Contract Position • Senior Front-end Developer
            / UI Designer
          </p>
          <p className="desc">
            One of the largest health and beauty retailer, at Superdrug I worked
            on Superdrug's new website built from scratch both for desktop and
            mobile devices. I've been responsible to lead the Front-end dev
            which included translation of the wireframes and UI designs into
            functional front end interface coded in HTML, CSS, XML, jQuery and
            JSON.
          </p>
        </li>
        <li>
          <a
            href="http://www.coral.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height="20" alt="Coral" src={coralLogo} />
          </a>
          <h3 className="title">Coral</h3>
          <p className="bolder sizeSmall">
            May 2012 - Jun 2012 • Contract Position • Visual Designer
          </p>
          <p className="desc">
            Coral is a leading European betting and gaming company with strong
            market positions, high growth and well-established brands. Here I
            had an opportunity to work as a Creative designer and helped them
            with High End graphics for various divisions of the business. Most
            of the creatives included gaming Banners. It was a combination of
            static and animated flash banners that I produced while working here
            for a couple of months.
          </p>
        </li>
        <li>
          <a
            href="http://www.kaplaninternational.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img height="30" alt="Kaplan International" src={kaplanLogo} />
          </a>
          <h3 className="title">Kaplan International</h3>
          <p className="bolder sizeSmall">
            Aug 2010 - Apr 2012 • Permanent Position • UI Designer/Developer
          </p>
          <p className="desc">
            Kaplan is a premier provider of educational services for
            individuals, schools, and businesses worldwide. At Kaplan my
            responsibilities included designing concepts and then converting the
            designs into coded pages using HTML, CSS, JS and non flash elements
            using jQuery framework, responsive websites coded in HTML5 CSS3 and
            Jquery. Strict cross browser optimization, testing of pages on
            Litmus. Design and development of email campaigns via dotmailer and
            cheetahmail.{' '}
          </p>
        </li>
      </ul>
      <h2 className="highlightColor">Others</h2>
      <ul className="experience-list">
        <li>
          <h3 className="title">
            <a
              href="https://www.mullenloweprofero.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Profero
            </a>
          </h3>
          <p className="bolder sizeSmall">
            Aug 2010 • Contract Position • Flash Designer
          </p>
        </li>
        <li>
          <h3 className="title">
            <a
              href="https://https://www.totallymoney.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Totallymoney
            </a>
          </h3>
          <p className="bolder sizeSmall">
            May 2010 - Jul 2010 • Contract Position • UI Designer/Developer
          </p>
        </li>
        {/* <li>
                    <h3 className="title"><a href="http://www.exposure.net" target="_blank" rel="noopener noreferrer">Exposure</a></h3>
                    <p className="bolder sizeSmall">May 2010 • Contract Position • Flash Designer/Developer</p>
                </li> */}
        <li>
          <h3 className="title">
            <a
              href="https://www.harvestdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harvest Digital
            </a>
          </h3>
          <p className="bolder sizeSmall">
            Feb 2010 - Apr 2010 • Contract Position • UI Designer/Flash Designer
          </p>
        </li>
        <li>
          <h3 className="title">
            <a
              href="https://dodec.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dodec
            </a>
          </h3>
          <p className="bolder sizeSmall">
            Jul 2009 - Feb 2010 • Contract Position • UI Designer/Flash Designer
          </p>
        </li>
        <li>
          <h3 className="title">
            <a
              href="https://www.mytherapy.tv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mytherapy
            </a>
          </h3>
          <p className="bolder sizeSmall">
            Apr 2007 - Oct 2008 • Permanent Position • Flash
            Designer/Developer/Web Designer
          </p>
        </li>
      </ul>
    </React.Fragment>
  );
}
