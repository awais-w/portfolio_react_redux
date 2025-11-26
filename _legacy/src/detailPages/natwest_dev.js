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
import primaryImage from '../images/details-images/primary/natwest_dev.png';
// import reactLogo from '../images/tools/React-icon.svg';
import {knockout, html, css, js} from '../config';

jss.setup(preset());

const styles = {
    grad: {
        backgroundColor: '#784ba0',
        backgroundImage: 'linear-gradient(225deg, #784ba0 0%, #4b74a0 84%, #2B86C5 100%)'
    }
}

const {classes} = jss.createStyleSheet(styles).attach();


export const NatwestDev = (props) => {
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

    const sliderImagesPath = 'images/slider/natwest_dev/';

    const sliderImages = [
        'desktop2.jpg',
        'desktop1.jpg',
        'mobile2.jpg',
        'mobile1.jpg'
    ];

    const toolsList = [
        {caption:"Knockout", image: knockout, supportingCap:null},
        {caption:"HTML", image: html, supportingCap:null},
        {caption:"CSS", image: css, supportingCap:null},
        {caption:"Javascript", image: js, supportingCap:null}
    ]

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="logo"><img alt="Mastercard" src={logo}/></div>
                        <h1 className="title">Natwest Ticket Booking Service</h1>
                        <h3>A ticket booking website where the customers can search or browse through the events happening countrywide. <br/> The idea was to build an online platform to reward the customers by giving them access to an exclusive ticket booking platform where they can book and pre-registered the tickets.</h3>
                        
                        <ul className="sectors">
                            { props.industry ? 
                                props.industry.map((sector, i) => <li key={i}>{sector}</li>) : null
                            }
                        </ul>

                    </Col>
                </Row>
            </Container>
                    
            <div className={`grad ${classes.grad}`}>
                <Container className="textCenter">
                    <img className="primary" alt="Natwest Ticket Booking Service" src={primaryImage}/>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col sm="5" lg="4">
                        <h2>Tools Used</h2>
                        <ul className="tools-list noBullet noMargin noPad marBottomTwice">
                            { toolsList.map(item => {
                                return (
                                    <li key={item.caption}>
                                        <div className="mar10Right"><img alt={item.caption} src={item.image}/></div>  
                                        <div>{item.caption} {item.supportingCap?<span className="sizeNormal">{item.supportingCap}</span>:null}</div>
                                    </li>
                                )
                            }) }
                            
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
                                                    alt='Natwest Ticket Booking Service' 
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