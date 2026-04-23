'use client';
import { GraduationCap, Trophy, Code2 } from 'lucide-react';
import { PERSONAL, EDUCATION, ACHIEVEMENTS } from '@/lib/data';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-sm font-medium mb-2 uppercase tracking-widest">About Me</p>
          <h2 className="section-heading text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            A backend-leaning full-stack engineer who ships real things.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Bio */}
          <div>
            <div className="space-y-4 text-gray-400 leading-relaxed text-base">
              {PERSONAL.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '3+', label: 'Projects Shipped' },
                { value: '200+', label: 'LeetCode Solved' },
                { value: '1', label: 'Year Building' },
              ].map((stat) => (
                <div key={stat.label} className="card p-4 text-center">
                  <p className="text-2xl font-black gradient-text">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Achievements */}
          <div className="space-y-6">

            {/* Education */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-violet-500/10">
                  <GraduationCap size={20} className="text-violet-400" />
                </div>
                <h3 className="font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.degree} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white text-sm">{edu.degree}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-violet-400 font-mono whitespace-nowrap bg-violet-500/10 px-2.5 py-1 rounded-full border border-violet-500/20">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-indigo-500/10">
                  <Trophy size={20} className="text-indigo-400" />
                </div>
                <h3 className="font-bold text-white">Highlights</h3>
              </div>
              <div className="space-y-4">
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.title} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{a.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{a.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{a.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently section */}
            <div className="card p-5 border-violet-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Code2 size={16} className="text-violet-400" />
                <span className="text-sm font-semibold text-white">Currently</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pursuing MCA · Building full-stack projects · Open to{' '}
                <span className="text-violet-300 font-medium">backend / full-stack roles</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
