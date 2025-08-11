import { projects } from '@/data/projects';

type SkillMap = {
  [skill: string]: {
    projects: typeof projects;
  };
};

export function getSkillsWithProjects() {
  const skillMap: Record<
    string,
    { projects: typeof projects }
  > = {};

  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      if (!skillMap[tag]) {
        skillMap[tag] = { projects: [] };
      }
      skillMap[tag].projects.push(project);
    });
  });

  return skillMap;
}
