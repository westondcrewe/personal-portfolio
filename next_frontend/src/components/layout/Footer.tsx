'use client';

import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-sm shadow-inner mt-16">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Name / Logo */}
        <span className="text-gray-700 font-medium">
          © {new Date().getFullYear()} Weston Crewe
        </span>

        {/* Footer Links */}
        <div className="flex gap-6">
          <Link
            href="https://github.com/westondcrewe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-teal-600 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/weston-crewe-a7a156212/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-teal-600 transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:wcrewe25@cmc.edu"
            className="text-gray-700 hover:text-teal-600 transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
