import serviceImg1 from '../assets/service-img1.jpg';
import serviceImg2 from '../assets/service-img2.jpg';
import aboutImg1 from '../assets/about-img1.jpg';
import aboutImg2 from '../assets/about-img2.jpg';
import aboutImg3 from '../assets/about-img3.jpg';
import aboutImg4 from '../assets/about-img4.jpg';
import aboutImg5 from '../assets/about-img5.jpg';
import aboutImg6 from '../assets/about-img6.jpg';
import aboutImg7 from '../assets/about-img7.jpg';
import aboutImg8 from '../assets/about-img8.jpg';


// Created an array of objects that will be used for ServiceItem
export const services = [
    {
    imgURL: serviceImg1, 
    title:'Labour Law', 
    subTitle:[
        {name: 'Collective and individual dismissal'},
        {name: 'Participation'},
        {name: 'Disease and reintegration'},
        {name: 'Statuatory Directors'},
        {name: 'Employee Benefits'},
        {name: 'Health law'},
        

    ]
}, 
{
    imgURL: serviceImg2, 
    title:'Corporate Law', 
    subTitle:[
        {name: 'Transactions & Structuring'},
        {name: 'Commerce'},
        {name: 'Competition'},
        {name: 'Intellectual property'},
        {name: 'Restructuring and Insolvencies'},
    ]
}, 
]

// Created an array of objects containing imageURLs for using it easily in about section
export const aboutImages = [
    {imgURL:aboutImg1},
    {imgURL:aboutImg2},
    {imgURL:aboutImg3},
    {imgURL:aboutImg4},
    {imgURL:aboutImg5},
    {imgURL:aboutImg6},
    {imgURL:aboutImg7},
    {imgURL:aboutImg8},
    
]