import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import ContactContent from '../../components/contact/ContactContent';
import FooterV1 from '../../components/footer/FooterV1';

const ContactUs = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <BreadCrumb pageTitle="Get in touch with us" breadcrumb="contact-us" />
            <ContactContent />
            <FooterV1 />
        </>
    );
};

export default ContactUs;