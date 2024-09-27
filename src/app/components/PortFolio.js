import React from "react";
import { PortFolioContent } from "../data/PortFolioContent";
import Image from "next/image";

const PortFolio = () => {
  return (
    <div className="content_container pt-[4.5rem]  ">
      <div className="text-[8vh] text-center flex-col flex items-center justify-center">
        Our Portfolio
      </div>
      <div className=" text-[3vh]  flex-col flex items-center justify-center">
        Eat imagine you chiefly few end sofly complete. Be visitor females am
        oxygen inquiry. Latter law remark two.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  pt-12 pb-20">
        {PortFolioContent.map((item) => (
          <a
            key={item.id}
            className=" rounded-lg border-none  flex flex-col justify-center items-center"
            href={item.href}
            target="_blank"
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={300}
              height={277}
            ></Image>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PortFolio;
