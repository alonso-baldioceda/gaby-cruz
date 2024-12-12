import React from "react";

interface DropdownLink {
  label: string;
  href: string;
}

export interface SocialIcon {
  Component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type SocialLink = {
  url: string;
  Component: React.ComponentType<{ className: string }>;
};

interface FooterProps {
  navLinks: { label: string; href: string; dropdown?: DropdownLink[] }[];
  socialLinks: SocialLink[];
  activeLink?: string;
}

const Footer: React.FC<FooterProps> = ({
  navLinks,
  socialLinks,
  activeLink,
}) => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content px-4 py-6">
      <div className="flex flex-col lg:flex-row justify-between w-full divide-y divide-solid divide-gray-300 lg:divide-none">
        <div className="w-full pb-4 lg:pb-0">
          <ul className="flex flex-col lg:flex-row lg:space-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  className={`link mb-2 lg:mb-0 font-semibold text-xl no-underline outline-none cursor-pointer hover:text-primary ${
                    activeLink === link.href ? "text-primary" : ""
                  }`}
                  key={index}
                  href={link.href}
                >
                  {link.label}
                </a>
                <ul>
                  {link.dropdown?.map((item, indexDropdown) => (
                    <li key={indexDropdown}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-center lg:text-left hidden lg:block">
            Copyright © {new Date().getFullYear()} - All rights reserved by ACME
            Industries Ltd
          </p>
        </div>

        <div className="w-full text-center lg:text-left pt-8 lg:pt-0">
          <nav className="flex justify-center lg:justify-end space-x-6">
            {socialLinks.map(
              ({ url, Component }, index) => (
                // key in socialLinks ? (
                <a
                  key={index}
                  href={url}
                  // href={url(socialLinks[key as keyof SocialLinks]!)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline outline-none cursor-pointer hover:text-primary"
                >
                  <Component className="w-8 h-8 fill-current" />
                </a>
              )
              // ) : null
            )}
          </nav>
        </div>

        <p className="block lg:hidden mt-4 text-center lg:text-left w-full pt-8 lg:pt-0">
          Copyright © {new Date().getFullYear()} - All rights reserved by ACME
          Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
