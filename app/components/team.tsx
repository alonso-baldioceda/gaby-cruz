import React from "react";
import TeamCard from "./teamCard";

interface TeamCard {
  name: string;
  role: string;
  bio: string;
}

interface TeamProps {
  members: TeamCard[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
  return (
    <>
      {members.map((member, index) => {
        const { name, role, bio } = member;
        return <TeamCard key={index} name={name} role={role} bio={bio} />;
      })}
    </>
  );
};

export default Team;
