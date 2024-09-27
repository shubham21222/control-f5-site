import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <NavBar />

      <div className="content_container grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-12 pb-20">
        <div className="border rounded-lg p-10 flex flex-col justify-center items-start shadow-lg">
          <h2 className="font-bold text-[4vh] mb-2  flex justify-start">
            Contact us
          </h2>
          <div className="text-[2.5vh]">
            <div>Email: contact@controlf5.in</div>
            <div>Phone (IN): +91 9617532373</div>
            <div>Careers: hr@controlf5.in</div>
            <div>Careers(HR’s Phone): +91 9770250904</div>
          </div>
        </div>

        <div className="border rounded-lg p-10 flex flex-col justify-center items-start shadow-lg">
          <h2 className="font-bold text-[4vh] mb-2 text-center">India</h2>
          <div className="text-[2.5vh]">
            <div>1184 B vidur nagar Indore, Madhya Pradesh, India</div>
          </div>
          <h2 className="font-bold text-[4vh] my-2 text-center">USA</h2>
          <div className="text-[2.5vh]">
            <div>1500 Hadley St. # 620, Houston, TX, USA</div>
          </div>
        </div>
      </div>

      <div className="flex text-[4vh] font-semibold items-start justify-start content_container">
      Let’s Talk About Project
      </div>

      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.282405846238!2d75.81811317530365!3d22.68052867941498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc3b6d616681%3A0x8e398fd9971c46b8!2sControlF5%20Website%20Design%2C%20Mobile%20App%20%26%20Shopify%20Ecommerce%20Solutions!5e0!3m2!1sen!2sin!4v1727353446158!5m2!1sen!2sin" width="600" height="450" className="w-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>

      <Footer />
    </>
  );
};

export default page;
