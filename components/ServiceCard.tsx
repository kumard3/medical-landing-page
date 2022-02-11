/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function ServiceCard() {
  return (
    <div className=" py-6 my-10 ">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-end gap-4 mb-6">
          <h2 className=" text-5xl font-bold">Our Dental Services</h2>

          <a
            href="#"
            className="inline-block bg-green-500 w-[150px]    text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
          >
            Show more
          </a>
        </div>

        <div className="grid items-center justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
          <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
            <img
              src="https://source.unsplash.com/random/300x300/?2"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-gray-100">
                  Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                  eget.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-400 text-gray-900"
              >
                Read more
              </button>
            </div>
          </div>
          <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
            <img
              src="https://source.unsplash.com/random/300x300/?2"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-gray-100">
                  Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                  eget.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-400 text-gray-900"
              >
                Read more
              </button>
            </div>
          </div>

          <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
            <img
              src="https://source.unsplash.com/random/300x300/?2"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-gray-100">
                  Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                  eget.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-400 text-gray-900"
              >
                Read more
              </button>
            </div>
          </div>
          <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
            <img
              src="https://source.unsplash.com/random/300x300/?2"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-gray-100">
                  Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                  eget.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-400 text-gray-900"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
