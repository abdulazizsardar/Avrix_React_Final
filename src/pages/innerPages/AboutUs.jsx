import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import AboutV1 from '../../components/about/AboutV1';
import FactV1 from '../../components/fact/FactV1';
import WhyChooseV1 from '../../components/whyChoose/WhyChooseV1';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ClientV1 from '../../components/client/ClientV1';
import TeamV1 from '../../components/team/TeamV1';
import FooterV1 from '../../components/footer/FooterV1';

const AboutUs = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="About Us" breadcrumb="about-us" />
            <AboutV1 aboutClass="default-padding" />
            <FactV1 />
            <WhyChooseV1 chooseClass="bg-gray" />
            <TestimonialV1 />
            <ClientV1 />
            <TeamV1 />
            <FooterV1 />
        </>
    );
};

export default AboutUs;