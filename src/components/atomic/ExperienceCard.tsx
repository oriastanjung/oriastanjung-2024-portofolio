import React, { FC } from "react";
import Bounded from "./Bounded";
import Heading from "./Heading";
import clsx from "clsx";
import { FaCircleCheck } from "react-icons/fa6";
interface ExperienceCardProps {
  className?: string;
  job_title?: string;
  company?: string;
  start_date?: string;
  end_date?: string;
  list?: string[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  className,
  company,
  end_date,
  job_title,
  list,
  start_date,
}) => {
  return (
    <div className={clsx("w-full  flex-shrink-0", className)}>
      <Bounded className="flex flex-col items-center justify-center w-full">
        <Heading className="text-center" as="h4" size="md">
          {job_title}
        </Heading>
        <p className="font-semibold leading-tight tracking-tight text-center mt-8 text-6xl  text-[#0CE847]">
          @{company}
        </p>
        <p className="font-medium leading-tight tracking-tight text-center mt-8 text-2xl text-slate-500">
          {start_date} - {end_date}
        </p>
        <div className="flex flex-col items-center gap-5 mt-10 justify-center">
          {list?.map((item: string, idx: number) => (
            <p key={idx} className="flex items-center gap-2 text-xl">
              <FaCircleCheck className="text-2xl text-[#0CE447] rounded-full" />
              {item}
            </p>
          ))}
        </div>
      </Bounded>
    </div>
  );
};

export default ExperienceCard;
