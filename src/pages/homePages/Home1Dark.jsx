import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BannerV1 from '../../components/banner/BannerV1';
import BannerZoomV1 from '../../components/banner/BannerZoomV1';
import ServiceV1 from '../../components/service/ServiceV1';
import AboutV1 from '../../components/about/AboutV1';
import PortfolioV1 from '../../components/portfolio/PortfolioV1';
import FactV1 from '../../components/fact/FactV1';
import BrandV1 from '../../components/brand/BrandV1';
import WhyChooseV1 from '../../components/whyChoose/WhyChooseV1';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import MultiSection from '../../components/multi/MultiSection';
import BlogV1 from '../../components/blog/BlogV1';
import FooterV1 from '../../components/footer/FooterV1';
import { useEffect } from 'react';

const Home1Dark = () => {

    useEffect(() => {
        document.body.classList.add('bg-dark');

        return () => {
            document.body.classList.remove('bg-dark');
        };
    }, []);

    return (
        <>
            <HeaderV1 />
            <BannerV1 />
            <BannerZoomV1 />
            <ServiceV1 />
            <AboutV1 aboutClass="default-padding-bottom relative" />
            <MultiSection />
            <PortfolioV1 portfolioClass="bg-gray" />
            <FactV1 factClass="bg-gray" />
            <BrandV1 brandClass="bg-gradient text-light" />
            <WhyChooseV1 chooseClass="bg-gray" />
            <TestimonialV1 />
            <BlogV1 />
            <FooterV1 footerLogoWhite={true} />
        </>
    );
};

export default Home1Dark;