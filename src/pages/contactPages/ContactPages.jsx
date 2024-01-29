import React from 'react';
import BreadCrumb from '../../components/breadcrumb/BreadCrumb';
import ContactContent from '../../components/contact/ContactContent';
import FooterV1 from '../../components/footer/FooterV1';

const ContactPages = () => {
    return (
        <>
            <BreadCrumb pageTitle="Get in touch with us" breadcrumb="contact-us" />
            <ContactContent />
            <FooterV1 />
        </>
    );
};

export default ContactPages;