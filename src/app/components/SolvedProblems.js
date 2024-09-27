import React from "react";
import { Content } from "../data/data";
import Image from "next/image";

const SolvedProblems = () => {
  return (
    <div className="bg-[#f0fafb] ">
      <div className="custom_container  pt-[4.5rem] flex-col flex items-center justify-center">
        <div className="text-[8vh]">We Solve Real Problems</div>
        <div className="text-[3vh] pt-3 flex justify-center items-center text-center w-[77%]">
          What Can We Do For Your Website?
        </div>
      </div>

      <div className="content_container grid grid-cols-1 md:grid-cols-2 gap-4 p-6 pt-12 pb-20">
        {Content.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-10 flex flex-col justify-start items-center shadow-lg bg-white"
          >
            <div className="flex flex-col items-center justify-start h-20 mb-4">
              <Image
                src={item.image}
                width={114}
                alt={item.alt}
                height={100}
              ></Image>
              <h2 className="font-bold text-lg text-center tracking-widest text-[#566d8f] mt-5">
                {item.title}
              </h2>
            </div>
            <p className="text-center mt-14">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolvedProblems;
