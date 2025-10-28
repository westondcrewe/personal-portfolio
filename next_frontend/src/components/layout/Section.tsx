// layout for each section (about me, skills, etc)
'use client';

import { FC, ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string; 
}
const Section: FC<SectionProps> = ({children, id, className = ''}) => {
  return (
    <section
      id={id}
      className={`bg-white/80 rounded-xl shadow-lg max-w-8xl mx-auto py-16 px-6 mt-10 mb-10 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
