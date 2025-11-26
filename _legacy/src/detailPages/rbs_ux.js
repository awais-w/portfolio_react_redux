import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import logo from '../images/logos/rbs.png';
import primaryImage from '../images/details-images/primary/rbs_ux.png';
// import reactLogo from '../images/tools/React-icon.svg';
import { axure, illustrator, whiteboard } from '../config';

jss.setup(preset());

const styles = {
    grad: {
        backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
    }
}

const { classes } = jss.createStyleSheet(styles).attach();


export const RbsUx = (props) => {
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

    const sliderImagesPath = 'images/slider/rbs_ux/';

    const sliderImages = [
        'wireframe1.jpg',
        'wireframe2.jpg',
        'wireframe3.jpg',
        'userflow1.jpg',
        'userflow2.jpg',
        'userflow3.jpg',
        'board1.jpg',
        'board2.jpg'


    ];

    const toolsList = [
        { caption: "Axure RP", image: axure, supportingCap: null },
        { caption: "Illustrator", image: illustrator, supportingCap: null },
        { caption: "Whiteboard", image: whiteboard, supportingCap: null }
    ]

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="logo"><img alt="Mastercard" src={logo} /></div>
                        <h1 className="title">RBS Travel</h1>
                        <h3>A travel related booking website for RBS customers giving access to some exclusive travel offers. <br />
                            The project required new ideas to improve upon an existing travel booking system. A full fledge UX exercise and prototyping was utilized to mark a well structured starting point towards the design and development of the program.
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
                    <img className="primary" alt="RBS Travel" src={primaryImage} />
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
                                                    alt='Rbs Travel'
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