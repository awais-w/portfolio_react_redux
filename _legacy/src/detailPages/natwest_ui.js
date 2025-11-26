import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import logo from '../images/logos/natwest.png';
import primaryImage from '../images/details-images/primary/natwest_ui.png';
// import reactLogo from '../images/tools/React-icon.svg';
import { sketch, illustrator, photoshop, zeplin } from '../config';

jss.setup(preset());

const styles = {
    grad: {

        backgroundImage: 'linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)'

    }
}

const { classes } = jss.createStyleSheet(styles).attach();


export const NatwestUi = (props) => {
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

    const sliderImagesPath = 'images/slider/natwest_ui/';

    const sliderImages = [
        'image3.png',
        'image1.png',
        'image2.png',
        'image4.png',
        'image5.png',
        'image6.png',
        'image7.png',
        'image8.png'
    ];

    const toolsList = [
        { caption: "Sketch", image: sketch, supportingCap: null },
        { caption: "Illustrator", image: illustrator, supportingCap: null },
        { caption: "Photoshop", image: photoshop, supportingCap: null },
        { caption: "Zeplin", image: zeplin, supportingCap: null }
    ]

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="logo"><img alt="Mastercard" src={logo} /></div>
                        <h1 className="title">Natwest Premier App</h1>
                        <h3>A mobile application for Natwest Premier account holders which offers some exclusive benefits and bookings system. Goal was to develop an Elite class app to target the high end Natwest premier account holders. <br />
                            The app main function was to give NatWest Premier customers access to different services, such us buying cinema e-codes, booking holidays and event tickets within a seamless experience.
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
                    <img className="primary" alt="Natwest Premier App" src={primaryImage} />
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
                            <li>Visual research, brainstorming, developing useful ideas.</li>
                            <li>Working closely with UX, marketing, software engineers and project management to devise an interface appealing to the high end market.</li>
                            <li>Utilization of the client branding and visual language to ensure usability and effectiveness of the product.</li>
                            <li>UI design and behaviour, integration of contents with the marketing team.</li>
                            <li>Developing the brand identity and visual language.</li>
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
                                                    className="noShadow"
                                                    src={`${sliderImagesPath}${item}`}
                                                    alt='Natwest Premier App'
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