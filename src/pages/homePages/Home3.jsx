import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BannerV3 from '../../components/banner/BannerV3';
import ServiceV3 from '../../components/service/ServiceV3';
import AboutV2 from '../../components/about/AboutV2';
import BrandV1 from '../../components/brand/BrandV1';
import ClientV1 from '../../components/client/ClientV1';
import TeamV1 from '../../components/team/TeamV1';
import ProjectV1 from '../../components/project/ProjectV1';
import PriceV1 from '../../components/price/PriceV1';
import BlogV2 from '../../components/blog/BlogV2';
import FooterV1 from '../../components/footer/FooterV1';

const Home3 = () => {
    return (
        <>
            <HeaderV1 darkLogo={true}/>
            <BannerV3 />
            <ServiceV3 />
            <AboutV2 />
            <BrandV1 brandClass="default-padding brand-style-two-area" />
            <ClientV1 />
            <TeamV1 />
            <ProjectV1 />
            <PriceV1 />
            <BlogV2 />
            <FooterV1 />
        </>
    );
};

export default Home3;