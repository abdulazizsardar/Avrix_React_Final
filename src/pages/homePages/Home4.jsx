import React from 'react';
import { useEffect } from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import BannerV5 from '../../components/banner/BannerV5';

const Home4 = () => {

    useEffect(() => {
        document.body.classList.add('bg-dark');

        return () => {
            document.body.classList.remove('bg-dark');
        };
    }, []);

    return (
        <>
            <HeaderV2 headerBg="bg-transparent" centerContent={false} />
            <BannerV5 />
        </>
    );
};

export default Home4;