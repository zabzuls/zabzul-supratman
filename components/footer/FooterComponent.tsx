
"use client";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Footer } from "flowbite-react";
const year = new Date().getFullYear();

export function FooterComponent() {
  return (
    <Footer container className="fixed bottom-0">
      <Footer.Copyright href="#" by="Zabzul Supratman Portofolio" year={year} />
      <Footer.LinkGroup>
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
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
