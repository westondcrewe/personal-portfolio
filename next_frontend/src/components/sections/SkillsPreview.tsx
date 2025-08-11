'use client';

import Section from '@/components/layout/Section';
import SkillTile from '@/components/ui/SkillTile';
import { projects } from '@/data/projects';

interface Skill {
  name: string;
  projects: { title: string; link: string }[];
  count: number;
}

export default function SkillsPreview() {
  // Build skill frequency map with associated projects
  const skillMap: Record<string, Skill> = {};

  projects.forEach((project) => {
    project.tags?.forEach((tag) => {
      if (!skillMap[tag]) {
        skillMap[tag] = { name: tag, projects: [], count: 0 };
      }
      skillMap[tag].count++;
      skillMap[tag].projects.push({
        title: project.title,
        link: project.link,
      });
    });
  });

  // Convert map to array and sort descending by frequency count
  const sortedSkills = Object.values(skillMap).sort((a, b) => b.count - a.count);

  return (
    <Section id="skills" className="mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sortedSkills.map((skill) => (
          <SkillTile key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
}
