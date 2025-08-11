'use client';

import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;       // For links
  onClick?: () => void; // For actions
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ href, onClick, children, variant = 'primary' }) => {
  const baseStyles =
    'px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block mr-2 ml-2 mt-2 mb-2';
  const variantStyles =
    variant === 'primary'
      ? 'bg-teal-600 text-white hover:bg-teal-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variantStyles}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </button>
  );
};

export default Button;
