/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Video() {
  return (
    <div className=" py-6 mt-[8rem] lg:mt-0">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className=" text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Gallery
          </h2>

          <p className="max-w-screen-md text-gray-400 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          <a
            href="#"
            className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-gray-200 text-xs md:text-sm border border-gray-400 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">
              VR
            </span>
          </a>

          <a
            href="#"
            className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-gray-200 text-xs md:text-sm border border-gray-400 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">
              Retro
            </span>
          </a>

          <a
            href="#"
            className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
          >
            <img
              src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Magicle"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-gray-200 text-xs md:text-sm border border-gray-400 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">
              Tech
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
