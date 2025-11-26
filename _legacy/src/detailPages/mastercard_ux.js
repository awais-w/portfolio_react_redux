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
import primaryImage from '../images/details-images/primary/mastercard_ux.png';
// import reactLogo from '../images/tools/React-icon.svg';
import { angular, jquery, less } from '../config';

jss.setup(preset());

const styles = {
    grad: {
        backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
    }
}

const { classes } = jss.createStyleSheet(styles).attach();


export const MastercardUx = (props) => {
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

    const sliderImagesPath = 'images/slider/mastercard_ux/';

    const sliderImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
    ];

    const toolsList = [
        { caption: "Angular 2", image: angular, supportingCap: null },
        { caption: "jQuery", image: jquery, supportingCap: null },
        { caption: "Less", image: less, supportingCap: null }
    ]

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="logo"><img alt="Mastercard" src={logo} /></div>
                        <h1 className="title">Enhanced World Elite</h1>
                        <h3>Enhanced World Elite (EWE) is another loyalty platform which is similar to Mastercard's MBO program, difference being EWE covers the US market.
                            Idea was to provide an web interface through which the customers can manage, add and renew the available benefits. The requirement also pointed out the need of a fully working clickthrough which mimics the actual website. This clickthrough was required to help the agents demonstrate the product and sell it the the Banking clients.
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
                    <img className="primary" alt="Enhanced World Elite" src={primaryImage} />
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
                            <li>A rapid prototype delivery which works offline as well and without any backend dependency.</li>
                            <li>Worked with mock data to develop a system through which it was easy to edit the primary information.</li>
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
                                                    alt='Enhanced World Elite'
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