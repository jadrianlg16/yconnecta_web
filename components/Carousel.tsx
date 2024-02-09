"use client";
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  images,
}: {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  images: StaticImageData[];
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative h-64 rounded-lg object-contain">
      {" "}
      {/* Ajusta la altura según tus necesidades */}
      <div
        className="flex transition-transform ease-out duration-500 rounded-lg"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.src}
            className=" object-cover w-full h-full"
            loading="lazy"
          />
        ))}
      </div>
      {images.length > 1 && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-primary/80 text-gray-800 hover:bg-white"
          >
            <i className="fi fi-sr-angle-left text-xs px-1" />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-primary/80 text-gray-800 hover:bg-white"
          >
            <i className="fi fi-sr-angle-right text-xs px-1" />
          </button>
        </div>
      )}
      {images.length > 1 && (
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurr(i)}
                className={`
                transition-all w-3 h-3 bg-primary rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
