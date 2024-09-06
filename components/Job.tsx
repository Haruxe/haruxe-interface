import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface JobProps {
  title: string;
  company?: string;
  date: string;
  description: string;
  link: string;
  skills?: string[];
  type?: string;
  banner?: string;
  end?: boolean;
}

const Job: React.FC<JobProps> = ({
  title,
  company,
  date,
  description,
  link = "/",
  skills,
  type,
  banner = "/",
  end = false,
}) => {
  const randomBooleans = useMemo(() => {
    return skills ? skills.map(() => Math.random() < 0.5) : [];
  }, [skills]);

  return (
    <motion.div
      className="duration-150 flex flex-wrap place-content-start z-10 w-full"
      // whileInView={{ opacity: 1, x: 0 }}
      // initial={{ opacity: 0, x: -50 }}
      // transition={{ duration: 1.4, type: "spring" }}
    >
      <div className="mb-auto">
        <h1 className="font-bold text-sm text-[1.4vw] 2xl:w-[30rem] md:w-[30vw] lowercase font-major-mono-display ">
          {date && date}
        </h1>
      </div>
      <div className="mb-auto">
        <div className="flex flex-col place-items-start mr-auto leading-none mb-auto">
          <Link
            className="font-bold space-x-5 flex font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase decoration-1 hover:underline duration-150"
            href={link}
            target="_blank"
          >
            {/* <div className="2xl:h-[6rem] 2xl:w-[10.5rem] md:h-[4rem] md:w-[7rem] h-[11vw] relative">
              <Image src={banner} fill alt="banner" className="rounded-sm" />
            </div> */}
            <h1>{company}</h1>
          </Link>
          <h1 className="font-bold 2xl:text-md md:text-base text-[3vw] uppercase">
            {title}
            {type && " · " + type}
          </h1>
        </div>
        <div>
          {/* <p className="text-zinc-300 font-mono 2xl:text-lg md:text-base text-[2.5vw] md:text-[2vw]">
              {description}
            </p> */}
          <div className="flex flex-wrap gap-2 mt-3 font-mono">
            {skills &&
              skills.map((skill, index) => {
                return (
                  <div
                    key={skill}
                    className={
                      randomBooleans[index]
                        ? "md:py-2 md:px-4 px-[3vw] py-[2vw] md:text-base text-[2.4vw] font-bold outline outline-1 uppercase"
                        : "md:py-2 md:px-4 px-[3vw] py-[2vw] md:text-base text-[2.4vw] font-bold outline outline-1 uppercase bg-[#fdffe4] text-black"
                    }
                  >
                    {skill}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Job;
