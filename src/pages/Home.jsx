import React from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import Header from '../Components/Hero';
import OurServices from '../Components/OurServices';
import WhyUs from '../Components/WhyUs';
import Testimonial from '../Components/Testimonial';
import Banner from '../Components/Banner';
import FAQ from '../Components/Faq';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <NavbarComponent />
            <Header />
            <OurServices />
            <WhyUs />
            <Testimonial />
            <Banner />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
