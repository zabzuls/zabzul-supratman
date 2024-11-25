
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export function NavbarComponent() {
  return (
    <Navbar fluid rounded className="bg-transparent">
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white dark:text-white"> Zabzul Supratman</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link href="#" active >
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
