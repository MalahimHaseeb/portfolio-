import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        To expand my skill set as a MERN stack developer by acquiring proficiency in additional technologies and
        frameworks, enhancing my ability to develop robust, scalable, and efficient web applications.
        </p>

        <br />

        <p className="text-xl">
           I have 2 years of experience building and designing software.
            Currently, I love working on web applications using technologies like
            React, Tailwind, Next.js, Express, MongoDB, Node.js, and FastAPI. I
            am also skilled in developing Chrome extensions and creating
            efficient, scalable applications as a MERN stack developer.
        </p>
      </div>
    </div>
  );
};

export default About;
