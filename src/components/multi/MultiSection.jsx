import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AwardsV1 from '../awards/AwardsV1';
import EnterpriseV1 from '../enterprise/EnterpriseV1';
import ProjectIdeaV1 from '../project/ProjectIdeaV1';

const MultiSection = () => {

  useEffect(() => {
    const width = window.innerWidth;

    if (width > 1023) {
      gsap.registerPlugin(ScrollTrigger);
      const sections = gsap.utils.toArray('.panel');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.thecontainer',
          pin: true,
          scrub: 1,
          end: () => '+=' + document.querySelector('.thecontainer').offsetWidth,
        },
      });
    }
  }, []);

  return (
    <>
      <div className="multi-section bg-dark-secondary text-light overflow-hidden">
        <div className="bg-shape-top">
          <img src="/img/shape/bg-shape-1.png" alt="Image Not Found" />
        </div>

        <div className="thecontainer">
          <div className="panel overflow-hidden">
            <AwardsV1 />
          </div>
          <div className="panel overflow-hidden bg-gradient">
            <EnterpriseV1 />
          </div>
          <div className="panel overflow-hidden contact-panel">
            <ProjectIdeaV1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiSection;