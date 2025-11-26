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
import primaryImage from '../images/details-images/primary/rbs_ui.png';
// import reactLogo from '../images/tools/React-icon.svg';
import { illustrator, photoshop, invision } from '../config';

jss.setup(preset());

const styles = {
    grad: {

        backgroundImage: 'linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)'
    }
}

const { classes } = jss.createStyleSheet(styles).attach();


export const RbsUi = (props) => {
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

    const sliderImagesPath = 'images/slider/rbs_ui/';

    const sliderImages = [
        'styling.jpg',
        'desktop2.jpg',
        'desktop1.jpg',
        'desktop3.jpg',
        'mobile1.jpg',
        'mobile2.jpg',
        'mobile3.jpg',
        'mobile4.jpg'
    ];

    const toolsList = [
        { caption: "Illustrator", image: illustrator, supportingCap: null },
        { caption: "Photoshop", image: photoshop, supportingCap: null },
        { caption: "invision", image: invision, supportingCap: null }
    ]

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="logo"><img alt="Mastercard" src={logo} /></div>
                        <h1 className="title">RBS Travel</h1>
                        <h3>A travel related booking website for RBS customers giving access to some exclusive travel offers.<br />Travel website is one of the most lucrative projects among other RBS ventures I was involved in and begged a modern design on top of already well defined RBS styling guidelines.</h3>

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
                            <li>Visual research, brainstorming, developing useful ideas.</li>
                            <li>Working closely with UX, marketing, software engineers and project management to devise an interface appealing to the high end market.</li>
                            <li>UI design and behaviour, integration of contents with the marketing team.</li>
                            <li>Conversion of wireframe prototypes into visual interface.</li>
                            <li>Developing the brand identity and visual language.</li>
                            <li>Built a generic design language, laid out rules forming a style guide.</li>
                            <li>Formed a design which is easy to be themed as per the nature of the project.</li>
                            <li>Adaptive design which fits all screen across all platforms.</li>
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
                                                    alt='RBS Travel'
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