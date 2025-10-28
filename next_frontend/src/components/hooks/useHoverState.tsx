// hook that dictates behavior when mouse hovers over elements
// ex: when user hovers on a project with more than 4 skills, the list of skills expands to display all of them
'use client';

import { useState, HTMLAttributes } from 'react';

export default function useHoverState(): [boolean, HTMLAttributes<HTMLDivElement>] {
  const [hovered, setHovered] = useState(false);

  return [
    hovered,
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocus: () => setHovered(true), // accessibility: keyboard focus
      onBlur: () => setHovered(false),
    },
  ];
}
