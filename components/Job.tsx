import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import Badge from "./Badge";

interface JobProps {
  title: string;
  company?: string;
  date: string;
  description: string;
  link: string;
  skills?: string[];
  type?: string;
  banner?: string;
}

const Job: React.FC<JobProps> = ({
  title,
  company,
  date,
  description,
  link,
  skills,
  type,
  banner = "/images/default-banner.jpg",
}) => {
  return (
    <Card>
      <div className="relative h-40 sm:h-48 md:h-52 w-full">
        <Image
          src={banner}
          fill
          alt={company || "job banner"}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          <Badge text={date} />
          {type && <Badge text={type} variant="dark" />}
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <Link href={link} target="_blank" className="group block">
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl uppercase bg-gradient-to-r from-white to-white/90 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl inline-block mb-3 group-hover:shadow-md transition-all">
            {company}
          </h3>

          <div className="font-bold text-base sm:text-lg uppercase mt-3 bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full inline-block">
            {title}
          </div>
        </Link>

        <p className="text-white/90 text-sm sm:text-base mt-4 sm:mt-5 mb-4 sm:mb-5 bg-black/20 p-3 sm:p-4 md:p-5 rounded-xl leading-relaxed">
          {description}
        </p>

        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
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

export default Job;
