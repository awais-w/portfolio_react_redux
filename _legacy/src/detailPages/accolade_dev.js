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
import primaryImage from '../images/details-images/primary/accolade.png';
// import reactLogo from '../images/tools/React-icon.svg';
import { react, mobx, htmlcss, js, es, jquery } from '../config';

jss.setup(preset());

const styles = {
    grad: {
        backgroundColor: '#1E8E97',
        backgroundImage: 'linear-gradient( 135deg, #1E8E97 10%, #1D6FA3 30%, #ABD7DD 100%)'
    }
}

const { classes } = jss.createStyleSheet(styles).attach();


export const AccoladeDev = (props) => {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        speed: 500,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover: true,
        adaptiveHeight: true,
        lazyLoad: true,
        dotsClass: "slick-dots slick-thumb"
    };

    const sliderImagesPath = 'images/slider/accolade_dev/';

    const sliderImages = [
        'desktop1.jpg',
        'desktop2.jpg',
        'desktop3.jpg',
        'mobile1.jpg',
        'mobile2.jpg',
        'mobile3.jpg'
    ];

    const toolsList = [
        { caption: "React", image: react, supportingCap: null },
        { caption: "Mobx", image: mobx, supportingCap: "(for state management)" },
        { caption: "ES6/7", image: es, supportingCap: null },
        { caption: "HTML/CSS", image: htmlcss, supportingCap: null },
        { caption: "Vanilla JS", image: js, supportingCap: null },
        { caption: "jQuery", image: jquery, supportingCap: null }
    ]

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="logo"><img alt="Mastercard" src={logo} /></div>
                        <h1 className="title">Accolade Bank Benefits Hub</h1>
                        <h3>Accolade bank is a white-label product and part of Mastercard Benefits Optimizer (MBO) program. The MBO platform gives millions of Mastercard customers access to custom designed loyalty products. The objective is to develop a generic web-interface running on a plug-and-play platform to sell to third-party banks.</h3>

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
                    <img className="primary" alt="Accolade Bank Benefits Hub" src={primaryImage} />
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
                            <li>Worked as the Lead Front-end Dev on the program.</li>
                            <li>Involved in business requirements analysis, technical analysis, technology decisions etc.</li>
                            <li>Devised a solution where new components created in react interact with the existing html/jQuery based components.</li>
                            <li>Liaised with the backend and services teams for data delivery to the client side via API calls.</li>
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
                                                    alt='Accolade Bank Benefits Hub'
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