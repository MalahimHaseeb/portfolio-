import React from "react";
import ai from "../assets/portfolio/ai.png";
import crm from "../assets/portfolio/crm.png";
import ecommerce from "../assets/portfolio/ecommerce.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ai,
      demo: "https://ai-bot-nu.vercel.app/",
      code: "https://github.com/MalahimHaseeb/Ai_Bot",
    },
    {
      id: 2,
      src: crm,
      demo: "#",
      code: "#",
    },
    {
      id: 3,
      src: ecommerce,
      demo: "https://malahimhaseeb.github.io/Ecommerce_Html_Tailwind/",
      code: "https://github.com/MalahimHaseeb/Ecommerce_Html_Tailwind?tab=readme-ov-file",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
