import React from "react";
import SocialLink from "../common/types/socialLink";

interface SocialIconProps {
  socialLink: SocialLink;
}

const SocialIcon: React.FC<SocialIconProps> = ({ socialLink }) => {
  const { url, Component } = socialLink;
  return (
    <a
      href={url}
      target="_blank"
      className="no-underline outline-none cursor-pointer hover:text-primary"
    >
      <Component className="w-8 h-8 fill-current" />
    </a>
  );
};

export default SocialIcon;
