"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./serviceCard";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import WavesIcon from "@mui/icons-material/Waves";
import AnchorIcon from "@mui/icons-material/Anchor";
import PhishingIcon from "@mui/icons-material/Phishing";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SchoolIcon from "@mui/icons-material/School";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

interface ServicesProps {
  services: Service[];
}

interface Service {
  service: string;
  subservices: string[];
}

const svgClasses = "text-info";
const iconSize = 42;

const svgs = [
  <DirectionsBoatIcon
    key="DirectionsBoatIcon"
    className={svgClasses}
    style={{ fontSize: iconSize }}
  />,
  <AssignmentTurnedInIcon
    key="AssignmentTurnedInIcon"
    className={svgClasses}
    style={{ fontSize: iconSize }}
  />,
  <WavesIcon
    key="WavesIcon"
    className={svgClasses}
    style={{ fontSize: iconSize }}
  />,
  <AnchorIcon
    key="AnchorIcon"
    className={svgClasses}
    style={{ fontSize: iconSize }}
  />,
  <PhishingIcon
    key="PhishingIcon"
    className={svgClasses}
    style={{ fontSize: iconSize }}
  />,
  <AssuredWorkloadIcon
    key="AssuredWorkloadIcon"
    className={svgClasses}
    style={{ fontSize: iconSize }}
  />,
  <HandshakeIcon
    key="HandshakeIcon"
    className={svgClasses}
    style={{ fontSize: iconSize }}
  />,
  <SchoolIcon
    key="SchoolIcon"
    className={svgClasses}
    style={{ fontSize: iconSize }}
  />,
  <LightbulbIcon
    key="LightbulbIcon"
    className={svgClasses}
    style={{ fontSize: iconSize }}
  />,
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ServiceCards: React.FC<ServicesProps> = ({ services }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const mergedServices = services.map((service, index) => ({
    ...service,
    svg: svgs[index % svgs.length],
  }));

  return (
    <motion.div
      ref={ref}
      className="card bg-base-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {mergedServices.map((service, index) => (
        <ServiceCard key={index} service={service} svg={service.svg} />
      ))}
    </motion.div>
  );
};

export default ServiceCards;
