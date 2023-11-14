// "use client"; // I'm not sure what this line is for, so I've commented it out.
"use client";
import React, { useState, useEffect } from "react";

const Sliders = () => {
  const dummyImages = [
    "/banner.png", // Adjust the path based on the actual location in the public folder
    "https://via.placeholder.com/600x400?text=Slide+1",
    "https://sites.wit.edu/lit/files/2019/06/techsmith-camtasia-banner.jpg",
    "https://www.hostinger.co.id/tutorial/wp-content/uploads/sites/11/2020/09/Cara-cek-kecepatan-website.jpg",
    // Add more dummy images as needed
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((activeSlide + 1) % dummyImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, dummyImages.length]);

  return (
    <div className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-64 md:h-96 lg:h-120 xl:h-144 overflow-hidden rounded-lg">
        {dummyImages.map((image, index) => (
          <div
            key={index}
            className={`hidden md:block duration-700 ease-in-out ${
              index === activeSlide ? "block" : "hidden"
            }`}
            data-carousel-item
          >
            <img
              src={image}
              className="absolute block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {dummyImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 rounded-full ${
              index === activeSlide ? "bg-white" : "bg-gray-300"
            }`}
            aria-current={index === activeSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 md:top-4 md:start-4 lg:top-6 lg:start-6 xl:top-8 xl:start-8 z-30 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() =>
          handleSlideChange(
            (activeSlide - 1 + dummyImages.length) % dummyImages.length
          )
        }
      >
        {"< Previous"}
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 md:top-4 md:end-4 lg:top-6 lg:end-6 xl:top-8 xl:end-8 z-30 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={() =>
          handleSlideChange((activeSlide + 1) % dummyImages.length)
        }
      >
        {"Next >"}
      </button>
    </div>
  );
};

export default Sliders;
