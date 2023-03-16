export const initialState = {
    sticky: {
        nav: false,
        showcase: false,
        resume: false
    },
    activeResumeSection: {
        about: false,
        skills: false,
        experience: false,
        education: false
    },
    clickedThumb: {
        showDetails: false,
        id: ''
    },
    tabs : [
        // {
        //     caption: "DEV",
        //     projects : [
        //         {
        //             id: 'accolade_dev',
        //             title: 'Accolade Bank Benefits Hub',
        //             thumb: '../images/thumbs/accolade_dev.jpg',
        //             color: '',
        //             shortDesc: 'A white-label product for Mastercard Benefits Optimizer (MBO) program',
        //             tools: 'Built with: React, Mobx, HTML/CSS, JS, jQuery',
        //             industry: ['Banking','Loyalty']
        //         },
        //         {
        //             id: 'natwest_dev',
        //             title: 'Natwest Ticket Booking Service',
        //             thumb: '../images/thumbs/natwest_dev.jpg',
        //             color: '',
        //             shortDesc: 'A ticket booking website exclusive for Natwest members',
        //             tools: 'Built with: Knockout, HTML, CSS, JS',
        //             industry: ['Entertainment','Banking','Loyalty']
        //         },
        //         {
        //             id: 'rbs_dev',
        //             title: 'RBS Cinema Discount',
        //             thumb: '../images/thumbs/rbs_dev.jpg',
        //             color: '',
        //             shortDesc: 'A simple website which offer cinema ecodes to the valuable RBS customers',
        //             tools: 'Built with: HTML, LESS, JS, Gulp, Bootstrap',
        //             industry: ['Entertainment','Banking','Loyalty']
        //         },
        //         {
        //             id: 'superdrug_dev',
        //             title: 'Superdrug Plc',
        //             thumb: '../images/thumbs/superdrug_dev.jpg',
        //             color: '',
        //             shortDesc: 'A popular highstreet health and beauty retailer\'s online ecommerce presence',
        //             tools: 'Built with: HTML, CSS, JS, Bootstrap',
        //             industry: ['Retail','E-commerce']
        //         },
        //         {
        //             id: 'cariparma_dev',
        //             title: 'Crédit Agricole',
        //             thumb: '../images/thumbs/cariparma_dev.jpg',
        //             color: '',
        //             shortDesc: 'A portal for customers to manage and use variety of benefits tied to their account with Crédit Agricole',
        //             tools: 'Built with: HTML, LESS, JS, Gulp, Bootstrap',
        //             industry: ['Banking','Loyalty']
        //         },
        //         {
        //             id: 'ulster_dev',
        //             title: 'Ulster Bank Membership Services',
        //             thumb: '../images/thumbs/ulster_dev.jpg',
        //             color: '',
        //             shortDesc: 'A benefits hub site for the customers holding an account with Ulster bank',
        //             tools: 'Built with: HTML, LESS, JS, Gulp, Bootstrap',
        //             industry: ['Banking','Loyalty']
        //         }
        //     ]
        // },
        {
            caption: "CASE STUDIES",
            projects : [
                {
                    id: 'bg_brandRefresh',
                    title: 'British Gas - Brand Refresh',
                    thumb: '../images/thumbs/bg_brandRefresh.jpg',
                    color: '',
                    shortDesc: 'A visual identity refresh project for British Gas brand involving Research, Analysis, Ideation, UI design and Testing',
                    tools: 'Research, Analysis, Ideation, UI design, Testing',
                    industry: ['Energy']
                },{
                    id: 'rbs_travel',
                    title: 'RBS Travel',
                    thumb: '../images/thumbs/rbs_travel.jpg',
                    color: '',
                    shortDesc: 'A tarvel booking website for RBS customers giving acess to some exclusive travel related offers',
                    tools: 'Tools used: Illustrator, Photoshop, Invision',
                    industry: ['Travel','Banking','Loyalty']
                },{
                    id: 'centrica_designOps',
                    title: 'Centrica - Design Ops Setup',
                    thumb: '../images/thumbs/centrica_designOps.jpg',
                    color: '',
                    shortDesc: 'An initiative to streamline design operations in the design domain and improve the quality of design ecosystem',
                    tools: 'Tools used: Sketch, Illustrator, Photoshop, Zeplin',
                    industry: ['Energy']
                },{
                    id: 'natwest_ui',
                    title: 'Natwest Premier App',
                    thumb: '../images/thumbs/natwest_ui.jpg',
                    color: '',
                    shortDesc: 'An app for Natwest Premier account holders which offers some exculsive benefits and booking system',
                    tools: 'Tools used: Sketch, Illustrator, Photoshop, Zeplin',
                    industry: ['Banking','Loyalty']
                },{
                    id: 'accolade_ui',
                    title: 'Accolade Bank Benefits hub',
                    thumb: '../images/thumbs/accolade_dev.jpg',
                    color: '',
                    shortDesc: 'A white-label product for Mastercard Benefits Optimizer (MBO) program',
                    tools: 'Tools used: Illustrator, Photoshop',
                    industry: ['Banking','Loyalty']
                },
                // {
                //     id: 'ulster_ui',
                //     title: 'Ulster Bank Membership Services',
                //     thumb: '../images/thumbs/ulster_dev.jpg',
                //     color: '',
                //     shortDesc: 'A benefits hub site for the customers holding an account with ulster bank',
                //     tools: 'Tools used: Illustrator, Photoshop, Fireworks',
                //     industry: ['Banking','Loyalty']
                // }
            ]
        },
        // {
        //     caption: "UX DESIGN",
        //     projects : [
        //         {
        //             id: 'vodafone_ux',
        //             title: 'Vodafone Excites',
        //             thumb: '../images/thumbs/voda_ux.jpg',
        //             color: '',
        //             shortDesc: 'A rapid protoype built for a Vodafone mobile app catering the cutomers with loyalty reward options',
        //             tools: 'Tools used: XD, Photoshop, Pen & Paper',
        //             industry: ['Telecommunicaiton','Loyalty']
        //         },
        //         {
        //             id: 'rbs_ux',
        //             title: 'RBS Travel',
        //             thumb: '../images/thumbs/rbs_ux.jpg',
        //             color: '',
        //             shortDesc: 'UX excercise and Interactive wireframing for RBS Travel project',
        //             tools: 'Tools used: Axure, Illustrator, Whiteboard',
        //             industry: ['Travel','Banking','Loyalty']
        //         },
        //         {
        //             id: 'mastercard_ux',
        //             title: 'Enhanced World Elite',
        //             thumb: '../images/thumbs/mastercard_ux.jpg',
        //             color: '',
        //             shortDesc: 'An elite loyalty program clickthrough for Mastercard US clientele',
        //             tools: 'Built with: Angular 2, jQuery, Less',
        //             industry: ['Banking','Loyalty']
        //         },
        //         {
        //             id: 'agentportal_ux',
        //             title: 'MBO Agent Portal',
        //             thumb: '../images/thumbs/agentportal_ux.jpg',
        //             color: '',
        //             shortDesc: 'Prototype of an online portal for the Banking agents through which they can assist customer queries',
        //             tools: 'Built with: Axure, Illustrator, Photoshop',
        //             industry: ['Banking','Loyalty']
        //         }
        //     ]
        // }
    ]
};