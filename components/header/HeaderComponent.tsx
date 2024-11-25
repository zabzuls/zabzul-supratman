import React from "react";
import Image from "next/image";

export default function HeaderComponent() {
  return (
    <header className="flex flex-col items-center bg-gray-900 px-6 py-10 text-white md:flex-row md:justify-between md:px-16 md:py-12">
      <div className="text-center md:ml-10 md:w-1/2 md:text-left">
        <h1 className="text-2xl font-bold text-indigo-600 md:text-5xl">
          <span className="text-white">I&rsquo;m</span> Frontend Developer
        </h1>
        <p className=" mt-4 text-sm text-gray-300 md:text-lg">
          Dengan pengalaman 2+ tahun, ahli dalam membangun aplikasi web responsif dan
          berkinerja tinggi menggunakan teknologi seperti HTML5, CSS3, JavaScript, TypeScript,
          React, Next.js, dan Redux.
        </p>
      </div>

      <div className="relative mt-6 flex justify-center md:mt-0 md:w-1/2">
        <div className="relative size-48">
          <div className="absolute left-0 top-0 size-full rounded-full bg-indigo-600 opacity-50 blur-xl"></div>
          <Image
            src="/assets/zabzul-supratman.jpeg"
            alt="Picture of the author"
            layout="fill"
            className="-translate-y-6 rounded-full border-4 border-indigo-600 object-cover opacity-90"
          />
        </div>
      </div>
    </header>
  );
}
