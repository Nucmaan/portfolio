import React, { useState } from "react";

import { Link } from "react-scroll";

import { FaAlignJustify } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import logo from "../../assets/logo.png";

function Navbar() {
  const [menue, setMenue] = useState(false);

  const handleClick = () => {
    setMenue(!menue);
  };

  return (
    <div className="bg-[blue] text-white shadow-md fixed left-0 right-0 mb-10">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center ">
          <div>
            <Link to="heroSection" smooth={true} offset={0} duration={500}>
              <img className="w-16 cursor-pointer" src={logo} alt="MyLogo" />
            </Link>
          </div>

          <ul className="hidden md:flex items-center gap-x-5 cursor-pointer">
            <li>
              <Link to="heroSection" smooth={true} offset={0} duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="abonesio"
                smooth={true}
                offset={-50}
                duration={500}
              >
                ABOUT ME
              </Link>
            </li>
            <li>
              <Link to="skillSection" smooth={true} offset={-70} duration={500}>
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                to="projectSection"
                smooth={true}
                offset={-30}
                duration={500}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="educationSection"
                smooth={true}
                offset={-90}
                duration={500}
              >
                EDUCATION
              </Link>
            </li>
            <li>
              <Link
                to="contactSection"
                smooth={true}
                offset={-90}
                duration={500}
              >
                CONTACT ME
              </Link>
            </li>
          </ul>

          <div className="md:hidden z-10" onClick={handleClick}>
            {menue ? <GrClose size={30} /> : <FaAlignJustify size={30} />}
          </div>
        </div>
        <ul
          className={
            menue
              ? "w-full absolute   bg-[blue] flex flex-col  justify-center items-center left-0 gap-y-2   md:hidden"
              : "hidden"
          }
        >
          <li className="w-full flex justify-center  cursor-pointer border-b-2  pb-2">
          <Link to="abonesio" smooth={true} offset={260} duration={500}>
              ABOUT ME
            </Link>
          </li>
          <li className="w-full flex justify-center cursor-pointer border-b-2 pb-2">
            <Link to="skillSection" smooth={true} offset={500} duration={500}>
              SKILLS
            </Link>
          </li>
          <li className="w-full flex justify-center  cursor-pointer border-b-2 pb-2">
            <Link to="projectSection" smooth={true} offset={-30} duration={500}>
              PROJECTS
            </Link>
          </li>
          <li className="w-full flex justify-center  cursor-pointer border-b-2 pb-2">
            <Link
              to="educationSection"
              smooth={true}
              offset={-90}
              duration={500}
            >
              EDUCATION
            </Link>
          </li>
          <div className="flex md:hidden mb-2">
            <button className="bg-white text-black rounded-md px-3 py-1 ">
              <Link
                to="contactSection"
                smooth={true}
                offset={-90}
                duration={500}
              >
                CONTACT ME
              </Link>
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
