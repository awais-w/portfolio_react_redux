import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import logo from '../images/logos/vodafone.png';
import primaryImage from '../images/details-images/primary/vodafone.png';
// import reactLogo from '../images/tools/React-icon.svg';
import { xd, photoshop, penpaper } from '../config';

jss.setup(preset());

const styles = {
    grad: {
        backgroundImage: 'linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)'
    }
}

const { classes } = jss.createStyleSheet(styles).attach();


export const VodafoneUx = (props) => {
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

    const sliderImagesPath = 'images/slider/vodafone_ux/';

    const sliderImages = [
        'image2.jpg',
        'image1.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg'
    ];

    const toolsList = [
        { caption: "XD", image: xd, supportingCap: null },
        { caption: "Photoshop", image: photoshop, supportingCap: null },
        { caption: "Pen & Paper", image: penpaper, supportingCap: null }
    ]

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="logo"><img alt="Mastercard" src={logo} /></div>
                        <h1 className="title">Vodafone Excites</h1>
                        <h3>A rapid prototype built for a Vodafone mobile app catering the customers with loyalty reward options.<br />
                            To compete with the top market players, Vodafone needed a mobile app to attract the customers with some reward program.<br />
                            The rapid prototype was an attempt to impress Vodafone stakeholders and bring the  project in-house for a full fledge development on the project. The pitch was a success.
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
                    <img className="primary" alt="Vodafone Excites" src={primaryImage} />
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
                            <li>Information gathering, requirements understanding, Design analysis.</li>
                            <li>Brainstorming sessions to simplify the client and user requirements.</li>
                            <li>Interactive prototyping using state of the art tools.</li>
                            <li>Prototyped several iterations giving a solution choice.</li>
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
                                                    alt='Vodafone Excites'
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