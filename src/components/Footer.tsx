import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { PERSONAL } from '@/lib/data';

export const Footer = () => (
  <footer className="border-t border-white/[0.06] py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
            <Code2 size={14} className="text-white" />
          </div>
          <span className="font-bold text-white text-sm">{PERSONAL.name}</span>
        </div>

        <p className="text-gray-500 text-sm flex items-center gap-1.5">
          Built with <Heart size={12} className="text-red-400 fill-red-400" /> using Next.js & Tailwind CSS
        </p>

        <div className="flex items-center gap-3">
          {[
            { href: PERSONAL.github, icon: Github },
            { href: PERSONAL.linkedin, icon: Linkedin },
            { href: `mailto:${PERSONAL.email}`, icon: Mail },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-violet-400 hover:bg-violet-500/10 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
