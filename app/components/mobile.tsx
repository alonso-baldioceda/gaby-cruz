import React from "react";

interface DropdownLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownLink[];
}

interface MobileProps {
  navLinks: NavLink[];
  activeLink?: string;
  isOpen: boolean;
}

const Mobile: React.FC<MobileProps> = ({
  navLinks,
  activeLink,
  isOpen,
  //   toggleMenu,
}) => {
  console.log("activeLink ===>", activeLink, isOpen);

  return (
    <div
      className={`bg-base-100 fixed top-[88px] left-0 right-0 z-40 shadow-lg pb-6 ${
        isOpen ? "opened" : "hidden"
      }`}
      style={{ height: "calc(100vh - 88px)" }}
      //   style={{ height: "100vh" }}
    >
      <hr className="border-solid border border-base-200 px-8" />
      <ul className="grid grid-flow-row gap-5 p-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={`font-bold text-2xl no-underline outline-none cursor-pointer hover:text-primary ${
                activeLink === link.href ? "text-primary" : ""
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mobile;
