import React from "react";
import Mobile from "./mobile";
import Swap from "./swap";
import ThemeController from "./themeController";

interface DropdownLink {
  label: string;
  href: string;
  id: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownLink[];
}

interface HeaderProps {
  companyName: string;
  navLinks: NavLink[];
  activeLink?: string;
  isOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  companyName,
  navLinks,
  activeLink,
  isOpen,
  toggleMenu,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-2xl link link-secondary font-bold no-underline">
            {companyName}
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, index) =>
              link.dropdown !== undefined ? (
                <li key={index}>
                  <details>
                    <summary
                      className={`font-bold text-lg no-underline outline-none cursor-pointer hover:text-primary transition duration-300 ease-in-out`}
                    >
                      {link.label}
                    </summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                      {link.dropdown.map((item, indexDropdown) => (
                        <li key={indexDropdown}>
                          <a href={item.href}>{item.label}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`font-bold text-lg no-underline outline-none cursor-pointer hover:text-primary transition duration-300 ease-in-out ${
                      activeLink === link.href ? "text-primary" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
          <span className="flex items-center me-4">
            <ThemeController />
          </span>
          <span className="text-primary flex items-center md:hidden">
            <Swap toggleMenu={toggleMenu} />
          </span>
        </div>
      </div>
      <Mobile navLinks={navLinks} activeLink={activeLink} isOpen={isOpen} />
    </header>
  );
};

export default Header;
