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
      <Card className="overflow-hidden group h-[450px] relative rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <Image
            src={banner}
            alt={company}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90 transition-all duration-500" />
        </div>

        <div className="relative z-10 flex flex-col h-full p-8">
          <div className="mb-auto">
            <Tag variant="light" className="mb-2">
              {date}
            </Tag>
          </div>

          <div className="flex-grow"></div>

          <div>
            <h3 className="text-3xl font-bold uppercase text-white tracking-tight mb-2 transition-transform duration-300 group-hover:-translate-y-1">
              {company}
            </h3>
            <p className="text-white/80 text-lg font-light mb-6 transition-transform duration-300 group-hover:-translate-y-1">
              {title}
            </p>

            <div className="flex items-center opacity-80 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white/90 text-sm uppercase tracking-wider mr-3">
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
