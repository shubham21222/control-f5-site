import Image from "next/image";
import React from "react";
import { Content2 } from "../data/data";

const HeroSection = () => {
  return (
    <>
      <div className="custom_container pt-[4.5rem] flex justify-between items-center mb-4">
        <div className="w-1/2 flex flex-col ">
          <div className="text-[6vh] w-[70%] leading-[50px]">
            Do You Want Promote Your Business Online?
          </div>
          <div className="text-[3vh] pt-[1rem] w-[80%]">
            We can help you in promoting your business online. Our team of
            experienced professionals helps you in the marketing and promotion
            of your business by creating a website for your business and
            managing the whole thing for you. We work on a monthly basis to
            market your business and make it popular among the people.
          </div>
        </div>
        <div className="w-1/2 rounded-tl-[300px] rounded-tr-[100px] rounded-bl-[100px] mb-20 shadow-lg rounded-br-[100px] overflow-hidden">
          <Image
            src="https://www.controlf5.co.in/wp-content/uploads/2024/05/CTA-Home-page-New.webp"
            width={539}
            height={539}
            alt="Home-page-image"
            className="object-cover w-full h-full" // Ensuring the image covers the entire div
          />
        </div>
      </div>

      <div className="bg-[#281c76] mb-4">
        <div className="custom_container  pt-[4.5rem] flex-col flex items-center justify-center">
          <div className="text-[8vh] text-white">Work History And Reviews</div>
          <div className="text-[3vh] pt-3 flex justify-center items-center text-white text-center w-[77%]">
            The World’s Biggest Work Marketplace
          </div>
        </div>

        <div className="content_container grid grid-cols-1 md:grid-cols-3 gap-4  pt-12 pb-20">
          {Content2.map((item) => (
            <div
              key={item.id}
              className="border-none rounded-lg  flex flex-col justify-center items-center "
            >
              <div className="flex flex-col items-center justify-start  mb-4">
                <Image
                  src={item.image}
                  width={114}
                  alt={item.alt}
                  height={100}
                ></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
