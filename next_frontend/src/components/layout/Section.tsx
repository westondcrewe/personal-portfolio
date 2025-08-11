'use client';

import { ReactNode } from 'react';

interface Section {
  children: ReactNode;
  id?: string;
  className?: string; 
}

export default function Section({ children, id, className = '' }: Section) {
  return (
    <section
      id={id}
      className={`bg-white/80 rounded-xl shadow-lg max-w-8xl mx-auto py-16 px-6 mt-10 mb-10 ${className}`}
    >
      {children}
    </section>
  );
}
