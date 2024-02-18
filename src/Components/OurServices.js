import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomSlider from "./CustomSlider/CustomSlider";
import CustomSlide from "./CustomSlider/CustomSlide";

const OurServices = () => {
  return (
    <div className="bg-white p-16">
      <p className="mb-3 text-[#b54b9f] font-bold p-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Our Services At Saika Tech
      </p>
      <div className="relative">
        <CustomSlider>
          <CustomSlide
            title="Web Apps"
            header="Manage Your Web Applications"
            description="At Saika Tech, we specialize in crafting custom web applications to drive business growth. From e-commerce platforms to customer portals, our solutions are tailored to engage users and elevate your brand. With ongoing support, we ensure your applications perform at their best, allowing you to focus on growth.
            Partner with us today to transform your digital presence."
            src={
              "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          <CustomSlide
            title="Mobile Apps"
            header="Elevate Your Business with Mobile Applications"
            description="At Saika Tech, we specialize in developing cutting-edge mobile applications to enhance your business reach and engagement. From iOS to Android, our mobile solutions are crafted to deliver seamless user experiences and drive growth. With a focus on innovation and user-centric design, we help you stay ahead in today's mobile-first world.
  Partner with us to bring your mobile app ideas to life and unlock new opportunities for your business."
            src={
              "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          <CustomSlide
            title="Data Management"
            header="Optimize Your Data Management Processes"
            description="At Saika Tech, we understand the importance of efficient data management for business success. Our data management solutions are designed to streamline your data workflows, enhance data quality, and ensure compliance with industry regulations. Whether it's data integration, migration, or governance, we have the expertise to help you harness the power of your data.
  Partner with us to unlock the full potential of your data assets and drive informed decision-making."
            src={
              "https://media.istockphoto.com/id/1304450711/fi/valokuva/tietokanta-ja-verkkoteknologiaa.jpg?s=612x612&w=0&k=20&c=vh192JQWZBD4m1mUJXU4v9ceQJHy_EDBQJw0M9Su97c="
            }
          />
          <CustomSlide
            title="Security Solutions"
            header="Protect Your Business with Robust Security Solutions"
            description="Security is paramount in today's digital landscape, and Saika Tech is committed to safeguarding your business assets. Our comprehensive security solutions encompass threat detection, prevention, and response to mitigate cyber risks effectively. From network security to endpoint protection, we offer tailored security measures to defend against evolving threats.
  Partner with us to fortify your defenses and ensure the security and resilience of your business operations."
            src={
              "https://media.istockphoto.com/id/876700200/fi/valokuva/liikemies-k%C3%A4ytt%C3%A4%C3%A4-digitaalista-riippulukkoa-suojatakseen.jpg?s=612x612&w=0&k=20&c=_cg9BLQsajMNp9H5MXZRtKH-P6-i3lH_GvmOt9r583E="
            }
          />
        </CustomSlider>
        <style>{`
          .slick-prev:before,
          .slick-next:before {
            color: black !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default OurServices;
