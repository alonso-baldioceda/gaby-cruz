"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import DotSVG from "./../images/icons/dot.svg";

interface Service {
  service: string;
  subservices: string[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "linear",
    },
  },
};

const ServiceCard: React.FC<{ service: Service; svg: JSX.Element }> = ({
  service,
  svg,
}) => (
  <motion.div
    className="card shadow-lg border-solid border border-base-200 bg-base-200"
    variants={itemVariants}
  >
    <div className="card-body p-4 lg:p-6">
      <div className="flex items-center mb-2 lg:mb-4">
        <div className="flex items-center mr-4">{svg}</div>
        <h2 className="card-title text-lg">{service.service}</h2>
      </div>
      <div className="ml-[12px]">
        <ul className="list-none">
          {service.subservices.map((subservice, subIndex) => (
            <li key={subIndex} className="font-normal flex items-start">
              <span className="w-[32px] h-[32px] -ml-[8px]">
                <DotSVG className="w-[32px] h-[32px] text-secondary fill-secondary" />
              </span>
              <span className="flex pt-[2px] min-h-[32px]">{subservice}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

export default ServiceCard;
