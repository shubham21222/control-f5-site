import Image from "next/image";
import React from "react";
import MainLogo from "../assets/controlF5-logo.webp";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="custom_container flex justify-between items-center pt-[5vh]">
        <div className="flex justify-between">
          <Image src={MainLogo} alt="ControlF5-Logo" width={165} height={20} />
        </div>
        <div>
          <div className="flex flex-row gap-6">
            <Link href="/">
              <div>Home</div>
            </Link>

            <Link href="/contact-us">
              <div>Contact us</div>
            </Link>

            <div>Blog</div>
          </div>
        </div>
      </div>

      <div className="border-b-2 pt-7"></div>
    </>
  );
};

export default NavBar;
