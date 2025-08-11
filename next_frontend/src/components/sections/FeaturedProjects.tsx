"use client";

import { FC } from "react";
import { projects } from "@/data/projects";
import Card from "@/components/ui/Card";

const FeaturedProjects: FC = () => {
  return (
    <section id="projects" className="py-16 bg-white/80 px-6 space-y-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 max-w-7xl mx-auto">
        Featured Projects
      </h2>

      <div className="flex flex-col max-w-7xl mx-auto gap-8">
        {projects.map(({ id, title, description, image, link, tags }) => (
          <Card
            key={id}
            title={title}
            description={description}
            image={image}
            link={link}
            tags={tags}
            horizontal
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
