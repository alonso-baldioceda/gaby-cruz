import React from "react";
import Image from "next/image";
import FaceImage from "./../images/face.jpg";

interface HeroProps {
  title: string;
  body: string;
}

const Hero: React.FC<HeroProps> = ({ title, body }) => {
  return (
    <div className="hero rounded-lg">
      <div className="hero-content py-0 flex-col lg:flex-row-reverse">
        <Image
          priority
          src={FaceImage}
          alt=""
          className="lg:w-1/2 h-auto rounded-lg"
        />
        <div className="lg:mr-8">
          <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
          <p className="pt-6">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
