import React from "react";
import PropertyApp from "../../assets/property.jpg";

function Projects() {
  return (
    <section className="projectSection my-6 py-6 bg-gray-100">
      <div className="container mx-auto px-6">
        <h1 className="text-black text-center uppercase text-4xl font-semibold tracking-wide pb-6">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <div className="shadow-lg rounded-lg bg-white overflow-hidden transition-transform duration-300 hover:scale-105">
            <img
              src={PropertyApp}
              className="w-full h-52 object-cover"
              alt="Property Management App"
            />

            <div className="p-5 flex flex-col gap-4">
              <div className="border-b-2 border-blue-500 text-center pb-2">
                <h1 className="font-bold text-xl">Property Management</h1>
              </div>

              <p className="text-gray-700 leading-relaxed">
                A full-stack web platform that simplifies property management for
                owners, tenants, and managers.
              </p>

              <div className="text-gray-800">
                <p className="font-bold mb-1">Tech Used:</p>
                <ul className="text-sm space-y-1">
                  <li>🚀 <span className="font-semibold">Frontend:</span> Next.js, TypeScript, TailwindCSS</li>
                  <li>⚡ <span className="font-semibold">State Management:</span> Redux Toolkit</li>
                  <li>🛠 <span className="font-semibold">Backend:</span> Node.js, Express.js</li>
                  <li>🗄 <span className="font-semibold">Database:</span> MongoDB, Mongoose</li>
                </ul>
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://github.com/Nucmaan/m2u.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded-md transition-all duration-300">
                    Source Code
                  </button>
                </a>

                <a
                  href="https://m2u-eight.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-600 hover:bg-green-700 px-4 py-2 text-white rounded-md transition-all duration-300">
                    Live Preview
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* End Project Card */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
