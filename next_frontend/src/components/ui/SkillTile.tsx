'use client';

import { FC } from 'react';
import Link from 'next/link';
import useHoverState from '@/components/hooks/useHoverState';

interface Project {
  title: string;
  link: string;
}

interface SkillTileProps {
  name: string;
  projects: Project[];
}

const SkillTile: FC<SkillTileProps> = ({ name, projects }) => {
  const [hovered, bindHoverEvents] = useHoverState();
  const totalProjects = projects.length;
  const firstProject = projects[0];
  const extraCount = totalProjects - 1;

  return (
    <div
      className={`relative bg-white rounded-lg shadow-md transition-all duration-300 overflow-visible
        ${hovered ? 'scale-110 z-10 shadow-xl' : 'scale-100'}
      `}
      style={{ transformOrigin: 'center' }}
      {...bindHoverEvents}
    >
      {/* Base content */}
      <div className="p-4">
        <h3 className="font-semibold text-stone-800 text-lg mb-2">{name}</h3>

        {!hovered ? (
          <p className="text-gray-700 text-sm">
            {firstProject ? (
              <Link href={`/projects?skill=${encodeURIComponent(name)}`} className="hover:underline">
                {firstProject.title}
              </Link>
            ) : (
              <span>No projects</span>
            )}
            {extraCount > 0 && `, +${extraCount} more...`}
          </p>
        ) : (
          <ul className="list-none list-inside space-y-1 mt-2">
            {projects.map((proj) => (
              <li key={proj.link}>
                <Link
                  href={`/projects/${proj.link}`}
                  className="text-gray-700 hover:text-blue-600 hover:underline"
                >
                  {proj.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SkillTile;
