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
