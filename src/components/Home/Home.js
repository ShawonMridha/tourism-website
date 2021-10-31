import React from 'react';
import Banner from '../Banner/Banner';
import Data from '../Data/Data';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo.js/SectionTwo';
import ServiceShow from '../ServiceShow/ServiceShow';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Data></Data>
            <ServiceShow></ServiceShow>
            <SectionOne></SectionOne>
            <SectionTwo></SectionTwo>
            
        </div>
    );
};

export default Home;