"use client";

import React, { useState } from "react";
import { Outfit } from "next/font/google";
import { usePathname } from "next/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import data from "./data/data.json";

import InstagramSVG from "./images/icons/instagram.svg";
import FacebookSVG from "./images/icons/facebook.svg";
import WhatsappSVG from "./images/icons/whatsapp.svg";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { companyName, navLinks, socialLinks: social } = data;
  const [isOpen, setIsOpen] = useState(false);
  const activeLink = usePathname();

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const socialLinks = [
    {
      url: social.instagram,
      Component: InstagramSVG,
    },
    {
      url: social.facebook,
      Component: FacebookSVG,
    },
    {
      url: social.whatsapp,
      Component: WhatsappSVG,
    },
  ];

  console.log("navLinks", navLinks);

  return (
    <html lang="en">
      <body
        className={`${
          outfit.className
        } antialiased bg-base-100 text-base-content relative ${
          isOpen ? "overflow-hidden" : ""
        }`}
      >
        <Header
          companyName={companyName}
          navLinks={navLinks}
          activeLink={activeLink}
          toggleMenu={toggleMenu}
          isOpen={isOpen}
        />
        <main className="mt-36">{children}</main>
        <Footer
          navLinks={navLinks}
          socialLinks={socialLinks}
          activeLink={activeLink}
        />
      </body>
    </html>
  );
}
