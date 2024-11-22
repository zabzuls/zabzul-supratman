
"use client";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Footer } from "flowbite-react";
const year = new Date().getFullYear();

export function FooterComponent() {
  return (
    <Footer container className="bottom-0 mt-20 bg-indigo-800 text-white">
      <Footer.Copyright href="#" by="Zabzul Supratman Portofolio" year={year} />
      <Footer.LinkGroup>
      <div className="mt-20 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
      </Footer.LinkGroup>
    </Footer>
  );
}
