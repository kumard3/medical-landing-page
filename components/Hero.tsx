/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

export default function Hero() {
  return (
    <div className="py-6 sm:pb-8 lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <section className="flex items-center flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 mb-8 md:mb-16">
          <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12">
            <h1 className="text-black-800 text-5xl  font-bold mb-8 md:mb-12">
              We Are Ready to Help Your Dental Problem
            </h1>
            <p className="lg:w-4/5 text-gray-500 xl:text-md leading-relaxed mb-8 md:mb-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit
              adipisci consequuntur reiciendis numquam quasi sapiente suscipit
              molestias unde delectus. Nobis recusandae ipsam consequatur nisi
              earum harum cupiditate eveniet animi!
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
              <a
                href="#"
                className="inline-block bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Discover
              </a>
            </div>
          </div>

          <div className="xl:w-5/12 h-48 lg:h-96 bg-gray-100 overflow-hidden shadow-lg rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
