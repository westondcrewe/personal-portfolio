'use client';

import { FC } from 'react';
import Link from 'next/link';
import { getSkillsWithProjects } from '@/utils/skills';

const SkillsPreview: FC = () => {
  const skillMap = getSkillsWithProjects();
  const skills = Object.keys(skillMap);

  return (
    <section
      id="skills"
      className="py-16 max-w-5xl mx-auto px-6"
    >
      <h2 className="text-3xl font-bold mb-10 text-white">Skills & Projects</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-white/90">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-teal-700 rounded-lg p-4 shadow"
          >
            <h3 className="font-semibold mb-2">{skill}</h3>
            <ul className="text-sm">
              {skillMap[skill].projects.map((proj) => (
                <li key={proj.id}>
                  <Link
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-teal-300"
                  >
                    {proj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsPreview;
