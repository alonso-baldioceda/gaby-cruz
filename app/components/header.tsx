import React from "react";
import ThemeController from "./themeController";

interface DropdownLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownLink[];
}

interface HeaderProps {
  companyName: string;
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ companyName, navLinks }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-base-100 shadow-lg py-6">
        <div className="flex-1">
          <a className="text-2xl link link-secondary font-bold no-underline">
            {companyName}
          </a>
        </div>
        <div className="flex-none">
          <ul className="grid grid-flow-col gap-5 me-5">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-bold text-lg no-underline outline-none cursor-pointer hover:text-primary transition duration-300 ease-in-out"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeController />
        </div>
      </div>
    </header>
  );
};

export default Header;
