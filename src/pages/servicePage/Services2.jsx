import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import WhyChooseV1 from '../../components/whyChoose/WhyChooseV1';
import ServiceV3 from '../../components/service/ServiceV3';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import PriceV1 from '../../components/price/PriceV1';
import ClientV1 from '../../components/client/ClientV1';
import BrandV1 from '../../components/brand/BrandV1';
import FooterV1 from '../../components/footer/FooterV1';

const Services2 = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Popular Services" breadcrumb="Services-2" />
            <WhyChooseV1 />
            <ServiceV3 />
            <TestimonialV1 />
            <PriceV1 priceClass="default-padding" />
            <ClientV1 />
            <BrandV1 brandClass="brand-style-two-area default-padding" />
            <FooterV1 />
        </>
    );
};

export default Services2;