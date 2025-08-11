// src/app/skills/[skill]/page.tsx
import { FC } from 'react';
import { projects } from '@/data/projects';
import Card from '@/components/ui/Card';

interface SkillPageProps {
  params: { skill: string };
}

const SkillPage: FC<SkillPageProps> = ({ params }) => {
  const skill = decodeURIComponent(params.skill);

  // Filter projects by the skill tag
  const filteredProjects = projects.filter((p) =>
    p.tags.includes(skill)
  );

  if (filteredProjects.length === 0) {
    return (
      <main className="min-h-screen p-8 bg-gradient-to-br from-teal-700 via-emerald-200 to-green-400 text-white">
        <h1 className="text-4xl font-bold mb-4">No projects found for "{skill}"</h1>
        <p>Try exploring other skills.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-teal-700 via-emerald-200 to-green-400">
      <h1 className="text-4xl font-bold mb-10 text-white">Projects using {skill}</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {filteredProjects.map(({ id, title, description, image, link }) => (
          <Card
            key={id}
            title={title}
            description={description}
            image={image}
            link={link}
          />
        ))}
      </div>
    </main>
  );
};

export default SkillPage;
