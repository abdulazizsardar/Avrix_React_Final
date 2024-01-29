import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import ErrorPageContent from '../../components/error/ErrorPageContent';
import FooterV1 from '../../components/footer/FooterV1';

const Error404 = () => {
    return (
        <>
            <HeaderV1 darkLogo={true} mailHeader={true} />
            <ErrorPageContent />
            <FooterV1 />
        </>
    );
};

export default Error404;