import React from "react";
import Image from "next/image";
export default function HeaderComponent() {
  return (
    <div className="flex w-screen text-white">
      <div className="flex  w-1/2 flex-col justify-center">
        <h1 className="text-2xl text-indigo-600 md:text-5xl">
          <span className="text-white">I&rsquo;m</span> Frontend Developer
        </h1>
        <p>
          Dengan pengalaman 2+ tahun, ahli dalam membangun aplikasi web
          responsif dan berkinerja tinggi menggunakan teknologi seperti HTML5,
          CSS3, JavaScript, TypeScript, React, Next.js, dan Redux.
        </p>
      </div>
      <div className="flex w-1/2 justify-center ">
        <Image
          src="/assets/zabzul-supratman.jpeg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
