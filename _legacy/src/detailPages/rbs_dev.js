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
import primaryImage from '../images/details-images/primary/rbs_dev.png';
// import reactLogo from '../images/tools/React-icon.svg';
import { html, less, js, gulp, bootstrap } from '../config';

jss.setup(preset());

const styles = {
    grad: {

        backgroundImage: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)'
    }
}

const { classes } = jss.createStyleSheet(styles).attach();


export const RbsDev = (props) => {
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

    const sliderImagesPath = 'images/slider/rbs_dev/';

    const sliderImages = [
        'desktop2.jpg',
        'desktop1.jpg',
        'mobile2.jpg',
        'mobile1.jpg'
    ];

    const toolsList = [
        { caption: "HTML", image: html, supportingCap: null },
        { caption: "Less", image: less, supportingCap: null },
        { caption: "Javascript", image: js, supportingCap: null },
        { caption: "Gulp", image: gulp, supportingCap: null },
        { caption: "Bootstrap", image: bootstrap, supportingCap: null }
    ]

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="logo"><img alt="Mastercard" src={logo} /></div>
                        <h1 className="title">RBS Cinema Discount</h1>
                        <h3>A simple website which offer cinema e-codes to the valuable RBS customers.
                            <br />Idea was to make an online platform available to RBS customers where they can buy discounted cinema tickets. Brief included a seamless user experience while keeping the interface simple and the user journey to a minimum.
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
                    <img className="primary" alt="RBS Cinema Discount" src={primaryImage} />
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
                            <li>Worked as one of the Front-end Dev on the project supporting the development needs on Magento based platform.</li>
                            <li>Customizations on an out of box solution.</li>
                            <li>Worked closely with the backend team to support the front end needs when the backend team would integrate features in.</li>
                            <li>Diagnosing and fixing the issues on an already developed system by the other devs.</li>
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
                                                    alt='RBS Cinema Discount'
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