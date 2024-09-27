import React from "react";
import { ReviewContent } from "../data/ReviewContent";

const TestiMonial = () => {
  return (
    <>
      <div className="bg-[#f0fafb] ">
        <div className="custom_container  pt-[4.5rem] flex-col flex items-center justify-center">
          <div className="text-[8vh]">Clients Testimonials!</div>
          <div className="text-[3vh] pt-3 flex justify-center items-center text-center w-[77%]">
            Our client testimonials speak for the work we do, starting from
            reliable sources of management to helping our clients reach their
            goals with our support.
          </div>
        </div>

        <div className="content_container grid grid-cols-1 md:grid-cols-3 gap-4 p-4 pt-12 pb-20">
          {ReviewContent.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-10 flex flex-col justify-start items-center shadow-lg"
            >
              <div className="flex flex-col items-center justify-start h-20 mb-4">
                <h2 className="font-bold text-lg text-center tracking-widest text-[#566d8f]">{item.Name}</h2>
                <h3 className="text-md text-gray-500 text-center">
                  {item.post}
                </h3>
              </div>
              <p className="text-center">{item.content}</p>
            </div>
          ))}

          <div className="md:col-span-3 flex justify-center gap-4">
            {ReviewContent.slice(3).map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-10 flex flex-col justify-start items-center shadow-lg w-[30%]"
              >
                <div className="flex flex-col items-center justify-start h-20 mb-4">
                  <h2 className="font-bold text-lg text-center tracking-widest text-[#566d8f]">{item.Name}</h2>
                  <h3 className="text-md text-gray-500 text-center">
                    {item.post}
                  </h3>
                </div>
                <p className="text-center">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestiMonial;
