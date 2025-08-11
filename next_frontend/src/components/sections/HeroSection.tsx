'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Music, Mail } from 'lucide-react';
import Section from '@/components/layout/Section';

export const socialLinks = [
    {
      href: 'https://github.com/westondcrewe',
      label: 'GitHub',
      icon: <Github size={24} />,
    },
    {
      href: 'https://www.linkedin.com/in/weston-crewe-a7a156212/',
      label: 'LinkedIn',
      icon: <Linkedin size={24} />,
    },
    {
      href: 'mailto:wcrewe25@cmc.edu',
      label: 'Email',
      icon: <Mail size={24} />,
    },
    {
      href: 'https://music.apple.com/profile/westondcrewe',
      label: 'Apple Music',
      icon: <Music />
    },
];

export default function HeroSection() {
  return (
    <Section id="about" className="mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/54585264693_27768cfc75_o.jpg"
            alt="Weston Crewe"
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-md"
            priority
          />
        </div>

        {/* About*/}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Weston Crewe
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl">
            Hi! Thanks for checking out my portfolio. I’m a new college grad, aspiring (unemployed) software engineer who is passionate about developing meaningful human connections in an increasingly digital professional landscape. I am eager to join a highly dynamic team where I am challenged to grow a holistic technical and professional skillset by working across the stack, collaborating cross-functionally, and gaining hands-on experience with the full product lifecycle.
          </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
                {socialLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition"
                >
                    {link.icon}
                </a>
                ))}
            </div>
          </div>
      </div>
    </Section>
  );
}
