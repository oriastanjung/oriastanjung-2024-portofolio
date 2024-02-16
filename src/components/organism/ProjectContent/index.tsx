import Bounded from "@/components/atomic/Bounded";
import Heading from "@/components/atomic/Heading";
import React, { FC } from "react";
import ContentList from "./ContentList";
import { ProjectsList } from "@/constants/projectLists";

interface ProjectContentProps {}

const ProjectContent: FC<ProjectContentProps> = ({}) => {
  return (
    <section>
      <Bounded>
        <Heading size="lg" className="mb-8">
          Projects
        </Heading>
        <div className="prose prose-xl prose-invert mb-10">
          List of projects I've develop
        </div>
        <ContentList items={ProjectsList} />
      </Bounded>
    </section>
  );
};

export default ProjectContent;
