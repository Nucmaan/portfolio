import React from "react";

import AboutMe1 from "../../assets/b_r.jpeg";

function AboutMe() {
  return (
    <div className="abonesio mb-10 py-5 mt-10  ">
      <div className="container mx-auto  py-1 mt-2 bg-white rounded-md">
        <h1 className="text-black text-center uppercase text-3xl font-bold pt-2 ">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-white py-2 mt-2">

          <div className="flex justify-center items-center mb-2">
            <img src={AboutMe1} className="w-[50%] rounded-3xl" alt="myfrnd" />
          </div>

          <div className="flex justify-center items-center ">
            <div className="flex justify-center items-center px-2 ">
              <p className="leading-loose ">
                I am a Full Stack Developer With a Passion For Building
                Beautiful And User Friendly Websites. I Have Strong
                Understanding Of Both Front-End And Back-End Development, And I
                am Exited To Put My Skills To Use In Professional Setting. I am
                a Quick Learner And I am a Team Player, And I am Confident That
                I Can Be Valuable Asset To Any Web Development Team.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;
