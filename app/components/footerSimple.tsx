import React from "react";
import SocialIcon from "./socialIcon";
import NavLink from "./../common/types/navigation";
import SocialLink from "../common/types/socialLink";

interface FooterSimpleProps {
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  activeLink?: string;
}

const FooterSimple: React.FC<FooterSimpleProps> = ({
  navLinks,
  socialLinks,
  activeLink,
}) => {
  return (
    <footer className="bg-base-200 text-base-content p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="footer">
          {navLinks.map((link, index) => (
            <nav key={index}>
              <h6 className="footer-title">
                <a
                  className={`link mb-2 lg:mb-0 font-semibold text-xl no-underline outline-none cursor-pointer hover:text-primary ${
                    activeLink === link.href ? "text-primary" : ""
                  }`}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </a>
              </h6>
              {link.dropdown?.map((item, indexDropdown) => (
                <a
                  className="link link-hover"
                  href={item.href}
                  key={indexDropdown}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
        <div className="flex flex-col lg:items-end lg:justify-between">
          <hr className="mb-4 lg:mb-0 lg:hidden" />
          <nav className="flex lg:justify-end space-x-6">
            {socialLinks.map(({ url, Component }, index) => (
              <SocialIcon socialLink={{ url, Component }} key={index} />
            ))}
          </nav>
          <hr className="mt-4 lg:mb-0 lg:hidden" />
          <p className="mt-4 lg:mt-0 lg:text-left">
            Copyright © {new Date().getFullYear()} - All rights reserved by ACME
            Industries Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple;
