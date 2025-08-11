'use client';

import Section from '@/components/layout/Section';
import Button from '@/components/ui/Button';
import { Download } from 'lucide-react';

export default function CTASection() {
  return (
    <Section id="contact" className="text-center space-y-6">
      <div
        className="bg-white px-8 py-6 rounded shadow max-w-2xl mx-auto"
        style={{ transformOrigin: 'center' }}
      >
        <h2 className="text-3xl font-bold text-stone-800 mb-4">
          Hit me up!
        </h2>
        <p className="text-lg text-gray-700">
          I’m always excited to connect about new opportunities, projects, or collaborations.
          Feel free to reach out and grab a copy of my resume.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-2xl mx-auto">
        <div className="flex items-center justify-center">
          <Button href="/WestonCreweResume.pdf" variant="primary">
            <span className="flex items-center space-x-2">
              <Download size={18} />
              <span>Download Resume</span>
            </span>
          </Button>
        </div>

        <div className="flex items-center justify-center">
          <Button href="https://www.linkedin.com/in/weston-crewe-a7a156212/" variant="primary">
            Connect With Me
          </Button>
        </div>

        <div className="flex items-center justify-center">
          <Button href="mailto:wcrewe25@cmc.edu" variant="primary">
            Offer Me a Job (please)
          </Button>
        </div>
      </div>
    </Section>
  );
}
