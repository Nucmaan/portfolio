import React from "react";

import { Link } from "react-scroll";

import profileImage from "../../assets/profile2.png";
import AboutMe1 from "../../assets/b_r.jpeg";

function Hero() {
  return (
    <div className="heroSection   pt-16 pb-[90px] bg-white">
      <div className="container mx-auto px-2 pt-16">
        <div className="grid grid-cols-1 order-2 md:grid-cols-2 justify-center items-center">

          <div className="pb-10">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="mb-3 text-3xl">Hi there! I"m Mohamed</h1>
              <p className="mb-3 text-2xl ">
                I"m Full Stack Web Developer Based In mogadisho.
              </p>
              <div>
                <button className="bg-[blue] px-3 py-2 shadow-md text-white text-3xl rounded-md mx-2 ">
                <Link
                to="contactSection"
                smooth={true}
                offset={-90}
                duration={500}
              > 
                Let's Talk
                </Link>
                </button>
                <button className=" px-3 py-2 text-black shadow-md text-3xl rounded-md mx-2 border-2 border-[blue]">
                <Link
                to="projectSection"
                smooth={true}
                offset={-30}
                duration={500}
              >
                My Projects
                </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img className="w-[50%] rounded-3xl" src={AboutMe1} alt="myherobi" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
