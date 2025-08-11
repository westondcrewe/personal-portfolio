'use client';

// import { FC } from "react";
import Link from 'next/link';
import useHoverState from '@/components/hooks/useHoverState';

interface Skill {
  name: string;
  projects: { title: string; link: string }[];
}

// const SkillTile: FC<Skill> = ({ name, projects }) => {
export default function SkillTile({ skill }: { skill: Skill }) {
    const [hovered, bindHoverEvents] = useHoverState();
    const totalProjects = skill.projects.length;
    console.log(totalProjects)
    const firstProject = skill.projects[0];
    const extraCount = totalProjects - 1;
  
    return (
      <div
        className={`relative bg-white rounded-lg shadow-md transition-all duration-300 overflow-visible
          ${hovered ? "scale-110 z-10 shadow-xl" : "scale-100"}
        `}
        style={{ transformOrigin: "center" }}
        {...bindHoverEvents}
      >
        {/* Base content */}
        <div className="p-4">
          <h3 className="font-semibold text-stone-800 text-lg mb-2">{skill.name}</h3>
  
          {!hovered ? (
            <p className="text-gray-700 text-sm">
              <Link href={`/projects?skill=${encodeURIComponent(skill.name)}`} className="hover:underline">
                {firstProject.title}
              </Link>
              {extraCount > 0 && `, +${extraCount} more...`}
            </p>
          ) : (
            <ul className="list-none list-inside space-y-1 mt-2">
              {skill.projects.map((proj) => (
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

// export default SkillTile;