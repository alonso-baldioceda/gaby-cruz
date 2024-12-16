import React from "react";
import Image from "next/image";
import teamCard from "./../images/woman.webp";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, bio }) => {
  return (
    <div className="overflow-hidden border rounded-lg border-base-200 bg-base-200 shadow-lg">
      <Image
        priority
        src={teamCard}
        alt=""
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-base mt-1">{role}</p>
        {bio ? <p className="text-base mt-2">{bio}</p> : null}
      </div>
    </div>
  );
};

export default TeamCard;
