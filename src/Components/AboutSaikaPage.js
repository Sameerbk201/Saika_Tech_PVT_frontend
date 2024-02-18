import React from "react";
import { ReactTyped } from "react-typed";

const AboutSaikaPage = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#b54b9f] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-3">
          Empowering Your Business Growth with Saika Tech
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-xl text-lg font-bold py-4">
            Maintainable, Scaleable Solutions for
          </p>
          <ReactTyped
           className='md:text-3xl sm:text-xl text-lg font-bold md:pl-4 pl-2'
           strings={['Web Applications', 'Mobile Applications', 'Management','Deployment','Maintenance','Upgrades']}
           typeSpeed={120}
           backSpeed={140}
           loop
          />
        </div>
        <div className="max-w-[800px] mx-auto text-center">
          <p className="md:text-lg text-base font-bold text-gray-500">
            At Saika Tech, we're dedicated to providing top-notch services to meet the demands of businesses, from small-scale startups to large corporations. Our expertise lies in crafting bespoke solutions in the realms of Web Applications, Mobile Applications, Management, Deployment, Maintenance, and Upgrades, all at an optimal cost. We pride ourselves on delivering not just solutions, but also exceptional customer service.
          </p>
        </div>
        <button className="bg-[#b54b9f] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutSaikaPage;
