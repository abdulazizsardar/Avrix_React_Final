import React, { useEffect } from 'react';
import HeaderV2 from '../../components/header/HeaderV2';
import AccordionV1 from '../../components/accordion/AccordionV1';

const Home2 = () => {

  useEffect(() => {
    document.body.classList.add('bg-dark');

    return () => {
      document.body.classList.remove('bg-dark');
    };
  }, []);

  return (
    <>
      <HeaderV2 headerBg="bg-dark" />
      <AccordionV1 />
    </>
  );
};

export default Home2;