import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import logo from '../images/logos/mastercard.png';
import primaryImage from '../images/details-images/primary/agentportal_ux.png';
// import reactLogo from '../images/tools/React-icon.svg';
import { axure, illustrator, photoshop } from '../config';

jss.setup(preset());

const styles = {
    grad: {
        backgroundImage: 'linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)',
        backgroundBlendMode: 'normal, lighten, soft-light'
    }
}

const { classes } = jss.createStyleSheet(styles).attach();


export const AgentportalUx = (props) => {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        speed: 500,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        lazyLoad: true,
        dotsClass: "slick-dots slick-thumb"
    };

    const sliderImagesPath = 'images/slider/agentportal_ux/';

    const sliderImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg'
    ];

    const toolsList = [
        { caption: "Axure RP", image: axure, supportingCap: null },
        { caption: "Illustrator", image: illustrator, supportingCap: null },
        { caption: "Photoshop", image: photoshop, supportingCap: null }
    ]

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="logo"><img alt="Mastercard" src={logo} /></div>
                        <h1 className="title">MBO Agent Portal</h1>
                        <h3>MBO agent portal is a User interface which agents can use to help the customers with the presented benefits in their account.
                            <br />Mastercard came with the brief of enabling the bank agents make changes, assign benefits, register customers using a portal which connects to the backend and applies the needful.
                            <br />
                            The wireframes show how a few complex processes were simplified which covered all the expectations put down by the client.
                        </h3>

                        <ul className="sectors">
                            {props.industry ?
                                props.industry.map((sector, i) => <li key={i}>{sector}</li>) : null
                            }
                        </ul>

                    </Col>
                </Row>
            </Container>

            <div className={`grad ${classes.grad}`}>
                <Container className="textCenter">
                    <img className="primary" alt="MBO Agent Portal" src={primaryImage} />
                </Container>
            </div>

            <Container>
                <Row>
                    <Col sm="5" lg="4">
                        <h2>Tools Used</h2>
                        <ul className="tools-list noBullet noMargin noPad marBottomTwice">
                            {toolsList.map(item => {
                                return (
                                    <li key={item.caption}>
                                        <div className="mar10Right"><img alt={item.caption} src={item.image} /></div>
                                        <div>{item.caption} {item.supportingCap ? <span className="sizeNormal">{item.supportingCap}</span> : null}</div>
                                    </li>
                                )
                            })}

                        </ul>
                    </Col>
                    <Col sm="7" lg="8">
                        <h2>Activities</h2>
                        <ul className="custom">
                            <li>Information gathering, requirement understanding, technical analysis.</li>
                            <li>Brainstorming sessions to simplify the client and user requirements.</li>
                            <li>Interactive prototyping using state of the art tools.</li>
                            <li>Prototyped several iterations giving a solution choice.</li>
                            <li>Continued to improve on the user experience feedback and presentation cycles until final approval.</li>
                        </ul>
                    </Col>
                    <Col xs="12">
                        <h2 className="noMargin marTopTwice">Screens</h2> <p className="sizeSmall">(Please click on the slide image to view the full version of the image)</p>

                        <div className={`slider-wrapper ${classes.grad}`}>
                            <Slider {...settings}>
                                {sliderImages.map(item => {
                                    return (
                                        <div key={item} className="slide">
                                            <a
                                                href={`${sliderImagesPath}${item}`}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <img
                                                    src={`${sliderImagesPath}${item}`}
                                                    alt='MBO Agent Portal'
                                                />
                                            </a>
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>

                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}