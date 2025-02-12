import React from "react";
import { IoBookOutline } from "react-icons/io5";

function Education() {
  return (
    <div className="educationSection mt-10 mb-10 text-black">
      <div className="container mx-auto px-2 bg-white py-10 rounded-md ">
        <h1 className="text-center text-3xl font-bold w-full border-b-2 uppercase border-[blue]">
          EDUCATION
        </h1>
        
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-4 ">
          <div className="flex justify-center items-center mt-2 ml-2 pl-2">
            <IoBookOutline size={20} color="blue" />
            <h1 className="font-bold ml-2">
              Infrastructure University Kuala Lumpur
            </h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>Master of Information Technology </h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>Kuala Lumpur| March 2023 - july 2024</h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>CGPA 3.51/4.00 </h1>
          </div>
        </div>

        
        <div className="grid grid-cols-1 justify-center items-center md:grid-cols-4 ">
          <div className="flex justify-center items-center mt-2">
            <IoBookOutline size={20} color="blue" />
            <h1 className="font-bold ml-3">
              Daffodil International University
            </h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>Batchelor of Software Engineering </h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>Dhaka | Summer 2018 - Summer 2022 </h1>
          </div>

          <div className="flex justify-center items-center mt-2">
            <h1>CGPA 3.37/4.00 </h1>
          </div>
        </div>

        

      </div>
    </div>
  );
}

export default Education;
