'use client';
import { ExternalLink, Github, Star } from 'lucide-react';
import { clsx } from 'clsx';
import { PROJECTS } from '@/lib/data';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-sm font-medium mb-2 uppercase tracking-widest">My Work</p>
          <h2 className="section-heading text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            Production-grade projects built from scratch — backend, frontend, database, and deployment.
          </p>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className={clsx(
                'card p-6 sm:p-8 transition-all duration-300 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/5 group',
                project.highlight && 'border-violet-500/30 shadow-lg shadow-violet-500/5'
              )}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">

                {/* Number / gradient box */}
                <div
                  className={clsx(
                    'w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-black text-xl shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300',
                    project.gradient
                  )}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.highlight && (
                      <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
                        <Star size={10} fill="currentColor" />
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:from-violet-500 hover:to-indigo-500 transition-all shadow-md shadow-violet-500/20 hover:-translate-y-0.5"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-300 text-sm font-semibold hover:border-violet-500/40 hover:text-white hover:bg-white/5 transition-all hover:-translate-y-0.5"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/kumkum9234"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
