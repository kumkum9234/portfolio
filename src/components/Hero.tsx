'use client';
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import Image from 'next/image';
import { PERSONAL } from '@/lib/data';

const PhotoOrInitials = () => {
  const [hasPhoto, setHasPhoto] = useState(true);
  if (!hasPhoto) {
    return (
      <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center">
        <span className="text-5xl font-black text-white">{PERSONAL.initials}</span>
      </div>
    );
  }
  return (
    <Image
      src="/photo.jpg"
      alt={PERSONAL.name}
      fill
      className="object-cover rounded-full"
      onError={() => setHasPhoto(false)}
      priority
    />
  );
};

const TYPED_WORDS = ['Backend Engineer', 'API Architect', 'Full Stack Dev', 'Problem Solver'];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPED_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-600/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4 animate-fade-up">
              Hi, I'm{' '}
              <span className="gradient-text">{PERSONAL.name.split(' ')[0]}</span>
              <br />
              <span className="gradient-text">{PERSONAL.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-10">
              <span className="text-xl sm:text-2xl font-bold text-gray-300">
                {displayed}
              </span>
              <span className="w-0.5 h-7 bg-violet-400 animate-pulse rounded-full" />
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Building production-grade backend systems, realtime APIs, and full-stack apps.
              Currently pursuing <span className="text-violet-300 font-medium">MCA</span> while shipping real projects.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowDown size={16} />
              </a>
              <a href={PERSONAL.resume} download className="btn-secondary">
                <Download size={16} />
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-violet-500/30 transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-violet-500/30 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-violet-500/30 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
              <div className="h-px w-8 bg-white/10" />
              <span className="text-gray-500 text-sm font-mono">{PERSONAL.email}</span>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex-shrink-0 animate-float">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 blur-2xl opacity-30 scale-110" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 p-[3px]">
                <div className="w-full h-full rounded-full bg-[#0a0a0f] overflow-hidden flex items-center justify-center">
                  {/* Replace /photo.jpg with your actual photo */}
                  <PhotoOrInitials />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl bg-[#111118] border border-white/10 shadow-2xl backdrop-blur-sm">
                <p className="text-xs text-gray-400 font-medium">Tech Stack</p>
                <p className="text-sm font-bold text-white">Node · Next · PG</p>
              </div>
              <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-[#111118] border border-white/10 shadow-2xl backdrop-blur-sm">
                <p className="text-xs text-gray-400 font-medium">LeetCode</p>
                <p className="text-sm font-bold text-violet-400">200+ Solved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce-slow">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  );
};
