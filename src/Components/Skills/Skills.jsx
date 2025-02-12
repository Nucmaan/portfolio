import React from "react";

import BackEnd from "../../assets/BackEnd.svg";
import FrontEnd from "../../assets/FrontEnd.svg";
import Others from "../../assets/Others1.svg"

function Skills() {
  return (
    <div className="skillSection my-2 py-5">

      <div className="container mx-auto  py-4 mt-2 ">

      <h1 className="text-black text-center uppercase text-3xl font-bold  pb-2">
      my skills
         </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-5">
          <div className=" shadow-md rounded-md my-3 bg-white">
            <div className="flex flex-col justify-center items-center bg-[blue] py-3 text-white rounded-md">
              <div className="">
              <img src={FrontEnd} className="w-10" alt="BackEnd"/>
              </div>
              <div>
                <h1 className="text-2xl mb-2">Front End</h1>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-2 text-1xl py-3">
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>REACT</p>
              <p>NEXTJS</p>
              <p>REDUX</p>
              <p>TAILWIND CSS</p>
              <p>BOOTSTRAP</p>
              <p>JQUERY</p>
              <p>OAUTH</p>
            </div>
          </div>

          <div className=" shadow-md rounded-md my-3 bg-white">
            <div className="flex flex-col justify-center items-center bg-[blue] py-3 text-white rounded-md">
              <div className="mb-2">
                <img src={BackEnd} className="w-10" alt="BackEnd"/>
              </div>

              <div>
                <h1 className="text-2xl mb-2">Back End</h1>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-2 text-1xl py-3">
              <p>Node Js</p>
              <p>Express Js</p>
              <p>Mysql</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>Restful Apis</p>
              <p>PHP</p>
              <p>Laravel</p>
            </div>
          </div>

          <div className=" shadow-md rounded-md my-3 bg-white">
            <div className="flex flex-col justify-center items-center bg-[blue] py-3 text-white rounded-md">
              <div className="mb-2">
              <img src={Others} className="w-10" alt="BackEnd"/>
              </div>

              <div>
                <h1 className="text-2xl mb-2">Others</h1>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-2 text-1xl py-3">
              <p>Git</p>
              <p>Github</p>
              <p>Vs code</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Skills;
