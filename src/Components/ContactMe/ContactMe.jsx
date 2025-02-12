import React from "react";

import mail from "../../assets/gmail.png";
import Instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";

function ContactMe() {
  return (
    <div className="contactSection my-10 py-5">
      <div className="container mx-auto  py-4 mt-2">
        <h1 className="text-black text-center uppercase text-3xl font-bold border-b-2 border-[blue] pb-2">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-3">

          <div className="flex flex-col justify-center items-center shadow-md rounded-md py-3 m-3 bg-white cursor-pointer">
            <div className=" mt-3 rounded-md">
              <img src={mail} className="w-16 rounded-md" alt="myfrnd" />
            </div>

            <div>
            <a href="mailto:lucmaan1999@gmail.com">
            <h3 className="text-2xl font-bold">Email</h3>
             </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center shadow-md rounded-md py-3 m-3 bg-white cursor-pointer">
          <div className=" mt-3 rounded-md">
            <img src={Instagram} className="w-16 rounded-md" alt="myfrnd" />
          </div>

          <div>
          <a href="https://www.instagram.com/nucmaan1/" target="_blank" rel="noopener noreferrer">
            <h3 className="text-2xl font-bold">Instagram</h3>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center shadow-md rounded-md py-3 m-3 bg-white cursor-pointer">
        <div className=" mt-3 rounded-md">
          <img src={github} className="w-16 rounded-md" alt="myfrnd" />
        </div>

        <div>
        <a href="https://github.com/Nucmaan" target="_blank" rel="noopener noreferrer">
          <h3 className="text-2xl font-bold">GitHub</h3>
          </a>
        </div>
      </div>


        </div>
      </div>
    </div>
  );
}

export default ContactMe;
