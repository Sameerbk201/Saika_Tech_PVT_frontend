import React, { useRef } from 'react';
import Navbar from './Navbar';
import AboutSaikaPage from './AboutSaikaPage';
import OurServices from './OurServices';
import ContactForm from './Forms/ContactForm';
import OurProjects from './OurProjects';
import Cards from './Cards';
import Footer from './Footer';

const Homepage = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const projectRef = useRef(null);
  const ourplansRef = useRef(null);

  return (
    <div>
      <Navbar aboutRef={aboutRef} servicesRef={servicesRef} contactRef={contactRef} projectRef={projectRef} ourplansRef={ourplansRef}/>
      <div ref={aboutRef}>
        <AboutSaikaPage />
      </div>
      <div ref={servicesRef}>
        <OurServices />
      </div>
      <div ref={contactRef}>
        <ContactForm/>
      </div>
      <div ref={projectRef}>
        <OurProjects/>
      </div>
      <div ref={ourplansRef}>
        {/* <Cards/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default Homepage;
