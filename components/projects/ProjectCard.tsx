import React from "react";
import Image from "next/image";
import Card from "../ui/Card";
import Tag from "../ui/Tag";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  company: string;
  date: string;
  link: string;
  skills?: string[];
  banner: string;
  id: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  company,
  date,
  link,
  banner,
  id,
}) => {
  return (
    <Link href={`/project/${id}`} className="block h-full">
      <Card className="overflow-hidden group min-h-[380px] sm:min-h-[400px] md:min-h-[420px] relative rounded-lg hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer flex flex-col border border-transparent hover:border-white/10">
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <Image
            src={banner}
            alt={company}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90 transition-all duration-500" />
        </div>

        <div className="relative z-10 flex flex-col h-full p-5 sm:p-6 md:p-7">
          <div className="mb-auto">
            <Tag variant="light" className="mb-2.5 text-xs">
              {date}
            </Tag>
          </div>

          <div className="flex-grow"></div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold uppercase text-white tracking-normal mb-1 sm:mb-1.5 transition-transform duration-300 group-hover:-translate-y-1">
              {company}
            </h3>
            <p className="text-white/70 text-sm sm:text-base font-light mb-4 sm:mb-5 transition-transform duration-300 group-hover:-translate-y-1 leading-relaxed">
              {title}
            </p>

            <div className="flex items-center text-white/80 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:text-primary">
              <span className="text-xs sm:text-sm uppercase tracking-wider mr-2 sm:mr-2.5">
                View Details
              </span>
              <svg
                className="w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
