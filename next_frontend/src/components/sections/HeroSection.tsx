// about me Section
'use client';
// imports
import Image from 'next/image';
import { Github, Linkedin, Instagram, Music, Mail } from 'lucide-react';
import Section from '@/components/layout/Section';
// links to socials displayed in icons
export const socialLinks = [
  {
    href: 'https://github.com/westondcrewe',
    label: 'GitHub',
    icon: <Github size={24} />,
  },
  {
    href: 'https://www.linkedin.com/in/weston-crewe/',
    label: 'LinkedIn',
    icon: <Linkedin size={24} />,
  },
  {
    href: 'https://www.instagram.com/westondcrewe/',
    label: 'Instagram',
    icon: <Instagram size={24} />,
  },
  {
    href: 'mailto:wcrewe25@cmc.edu',
    label: 'Email',
    icon: <Mail size={24} />,
  },
  {
    href: 'https://music.apple.com/profile/westondcrewe',
    label: 'Apple Music',
    icon: <Music size={24} />,
  },
];
// export component
export default function HeroSection() {
  // renders about me section component
  // horizontal stack: 3 blocks
  //          left: grad photo
  //          middle: about me
  //          right: vertical stack: 2 blocks
  //                      interests
  //                      vietnam picture

  return (
    <Section id="about" className="mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* left block */}
        <div className="flex flex-col justify-center text-center flex-shrink-0 ml-5">

          {/* grad pic */}
          <Image
            src="/54585264693_27768cfc75_o.jpg"
            alt="Weston Crewe"
            width={250}
            height={200}
            className="rounded-full border-4 border-white shadow-md mb-2"
            priority
          />
          
          {/* education */}
          <div className="bg-white/90 px-8 py-3 rounded shadow w-full">
            <h3 className="text-sm font-medium text-gray-900">Claremont McKenna &apos;25</h3>
            <h4 className="text-xs font-noraml text-gray-800">Computer Science w/ Data Science</h4>
          </div>
        </div>

        {/* middle block */}
        <div className="flex flex-col justify-center text-center md:text-left flex-grow bg-white/90 rounded-xl shadow-lg p-8 max-w-3xl">
          {/* name and bio */}
          <h1 className="underline text-4xl font-bold text-gray-900 mb-4 ">Weston Crewe</h1>
          <p className="text-lg text-gray-700 mb-6">
            Hi! Thanks for checking out my portfolio. I&apos;m a new college grad and
            aspiring software engineer who is passionate about
            developing meaningful human connections in an increasingly digital
            professional landscape. I made this portfolio initially to get my hands
            dirty with Next.js web app development, but I also see it as a fun way
            to engage with recruiters and other new professional connections! I am
            eager to join a highly dynamic team where I&apos;m challenged to grow
            a holistic technical and professional skillset by working across the stack, 
            collaborating cross-functionally, and gaining hands-on experience with the
            full product lifecycle. Feel free to reach out and I&apos;ll get in touch!
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6 justify-center md:justify-start">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* right block */}
        <div>
          <div className="flex-shrink-0 bg-white/90 rounded-xl shadow-lg p-8 max-w-md text-stone-800 text-center md:text-left mb-3">
            {/* interests */}
            <h2 className="text-2xl font-semibold mb-4">Interests</h2>
            {/* desperately needs refactoring */}
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <a 
                  className="underline hover:text-teal-600 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://cmsathletics.org/news/2025/4/1/mens-swimming-and-diving-four-stags-earn-academic-all-district-honors-for-cms-swim-and-dive.aspx">
                    Swimming
                  </a>
              </li>
              <li>
                <a 
                  className="underline hover:text-teal-600 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://www.instagram.com/weldingenthusiasts/">
                    Music
                  </a> 
              </li>
              <li>
                <a 
                  className="underline hover:text-teal-600 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="https://www.instagram.com/cmc_tft/">
                    Tuff Fits
                </a> 
              </li>
              <li>
                <a 
                  className="hover:text-teal-600 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer">
                    Dancing
                </a> 
              </li>
            </ul>
          </div>
          <div>
              <Image
                src="/vietnam_rock.JPG"
                alt="vietnam"
                width={250}
                height={175}
                className="rounded-full border-4 border-white shadow-md"
                priority
                />
            </div>
        </div>
      </div>
    </Section>
  );
}
