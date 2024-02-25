import { AchievementType } from "@/constants/achievementLists";
import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";
import ButtonShimer from "../ui/ButtonShimer";

interface AchievementCardProps extends AchievementType {
  className?: string;
}

const AchievementCard: FC<AchievementCardProps> = ({
  image,
  name,
  url,
  className,
}) => {
  return (
    <div
      className={clsx(
        "rounded-3xl overflow-hidden group relative top-0 inline-flex cursor-default animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      <Image
        src={image}
        alt={name}
        width={800}
        height={600}
        className="relative top-0 z-5 w-[40rem] h-96 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
        quality={100}
      />
      <div className="absolute translate-y-full group-hover:translate-y-0 duration-300 ease-in-out transition-transform bg-gradient-to-t from-black to-transparent w-full h-full flex items-center justify-center flex-col gap-4">
       <ButtonShimer>Detail</ButtonShimer>
      </div>
    </div>
  );
};

export default AchievementCard;
