import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "./Card";
import Badge from "./Badge";

interface ProjectProps {
  title: string;
  company?: string;
  date: string;
  link: string;
  skills?: string[];
  banner?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  company,
  date,
  link,
  skills,
  banner = "/images/default-banner.jpg",
}) => {
  return (
    <Card>
      <div className="relative h-52 w-full">
        <Image
          src={banner}
          fill
          alt={company || "project banner"}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <Badge text={date} />
        </div>
      </div>

      <div className="p-6">
        <Link href={link} target="_blank" className="group block">
          <h3 className="font-bold text-2xl md:text-3xl uppercase bg-gradient-to-r from-white to-white/90 text-black px-4 py-2 rounded-2xl inline-block mb-3 group-hover:shadow-md transition-all">
            {company}
          </h3>

          <p className="text-white/90 font-medium mt-3 mb-4 bg-black/20 p-4 rounded-xl leading-relaxed">
            {title}
          </p>
        </Link>

        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                text={skill}
                variant={index % 2 === 0 ? "light" : "dark"}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default Project;
