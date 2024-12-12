import React, { useState } from "react";
import MenuSVG from "../images/icons/menu.svg";
import CloseSVG from "../images/icons/close.svg";

interface SwapProps {
  toggleMenu: () => void;
}

const Swap: React.FC<SwapProps> = ({ toggleMenu }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    toggleMenu();
  };

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <MenuSVG className="swap-off h-10 w-10 fill-current" />
      <CloseSVG className="swap-on h-10 w-10 fill-current stroke-primary" />
    </label>
  );
};

export default Swap;
