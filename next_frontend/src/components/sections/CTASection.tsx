// Call to Action section
'use client';

// imports
import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import { Download, Github } from 'lucide-react';
import Image from 'next/image';

// section export
export default function CTASection() {
  // renders call to action section
  // horizontal stack: 3 blocks 
  //  left: picture (headshot)
  //  right: vertical stack: 2 pictures
  //                          swim senior day
  //                          2023 sciac champs

  return (
    // Section layout for component boundary, fill, positioning/centering, and size
    <Section id="contact" className="text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">

        {/* Left block */}
        <div className="flex-shrink-0">

          {/* grad photo */}
          <Image
            src="/kravis_grad_photo.JPG"
            alt="Weston Crewe"
            width={250}
            height={250}
            className="rounded-full border-4 border-white shadow-md mb-2"
          />
        </div>

        {/* Middle Block*/}
        <div className="flex flex-col items-center justify-center max-w-2xl space-y-6">

          {/* Call to Action*/}
          <div className="bg-white px-8 py-6 rounded shadow w-full mb-5">

            {/* Intro */}
            <h2 className="underline text-3xl font-bold text-stone-800 mb-4">
              Hit me up!
            </h2>
            <p className="text-lg text-gray-700">
              I’m always excited to connect about new opportunities, projects, or collaborations.
              Feel free to reach out and grab a copy of my resume.
            </p>
          </div>

          {/* Collaborate on active projects! */}
          <div className="bg-white px-8 py-6 rounded shadow w-full mb-5">
            <h4 className="text-xl font-semibold text-stone-800 mb-4 text-center">
              Let's work together on my active projects!
            </h4>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {/* DJ youtube audio downloading app */}
              <a
                href="https://github.com/westondcrewe/DJ-YouTube-Audio-Downloader"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-md text-gray-700 hover:text-blue-400 hover:underline"
              >
                <Github size={20} />
                <span>DJ YouTube Audio Downloader</span>
              </a>
              {/* Another project
              <a
                href="https://github.com/westondcrewe/AnotherProject"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-md text-gray-700 hover:text-blue-400 hover:underline"
              >
                <Github size={20} />
                <span>EdTech Showcase</span>
              </a> */}
            </div>
          </div>

          {/* Link/Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 w-full">

            {/* Resume Download */}
            <Button href="/WestonCreweResume.pdf" variant="primary">
              <span className="flex items-center space-x-2">
                <Download size={18} />
                <span>Download Resume</span>
              </span>
            </Button>

            {/* LinkedIn Link */}
            <Button href="https://www.linkedin.com/in/weston-crewe-a7a156212/" variant="primary">
              Add & Message Me on LinkedIn
            </Button>

            {/* Email Link */}
            <Button href="mailto:wcrewe25@cmc.edu" variant="primary">
              Job Offerings Portal (Email me!)
            </Button>
          </div>
        </div>

        {/* Right block */}
        <div className="flex-shrink-0">

          {/* senior day swim */}
          <Image
            src="/gallery_image.JPG"
            alt="senior day"
            width={250}
            height={300}
            className="rounded-full border-4 border-white shadow-md mb-2"
          />

          {/* sciac champs 2023 */}
          <Image
            src="/sciac_champs_2023.JPG"
            alt="sciac champs"
            width={250}
            height={300}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>
    </Section>
  );
}
