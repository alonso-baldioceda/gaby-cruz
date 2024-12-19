import React from "react";

export default interface SocialLink {
  url: string;
  Component: React.ComponentType<{ className: string }>;
};
