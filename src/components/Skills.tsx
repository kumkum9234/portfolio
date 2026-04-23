'use client';
import { SKILLS } from '@/lib/data';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-sm font-medium mb-2 uppercase tracking-widest">What I Use</p>
          <h2 className="section-heading text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            The tools and technologies I work with every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="card p-6 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-bold text-white group-hover:text-violet-300 transition-colors">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/[0.07] font-medium hover:bg-violet-500/10 hover:text-violet-300 hover:border-violet-500/30 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-16 card p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Primary Focus', value: 'Backend Engineering' },
              { label: 'Favourite Stack', value: 'Node.js + Next.js + PostgreSQL' },
              { label: 'Currently Learning', value: 'System Design & DevOps' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
