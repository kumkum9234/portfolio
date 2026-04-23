'use client';
import { useState } from 'react';
import { Mail, Github, Linkedin, Phone, Send, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';
import { PERSONAL } from '@/lib/data';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    setSending(true);
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error('Something went wrong. Please email me directly.');
      }
    } catch {
      toast.error('Network error. Please email me directly.');
    } finally {
      setSending(false);
    }
  };

  const CONTACT_LINKS = [
    { icon: Mail, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
    { icon: Github, label: 'GitHub', value: 'github.com/kumkum9234', href: PERSONAL.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/kumkum', href: PERSONAL.linkedin },
    { icon: Phone, label: 'Phone', value: PERSONAL.phone, href: `tel:${PERSONAL.phone}` },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        <div className="text-center mb-16">
          <p className="text-violet-400 font-mono text-sm font-medium mb-2 uppercase tracking-widest">Get In Touch</p>
          <h2 className="section-heading text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-sub mx-auto text-center">
            Open to full-stack / backend roles and interesting projects. I reply fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact info — left */}
          <div className="lg:col-span-2 space-y-4">
            <div className="card p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-violet-400" />
                <span className="text-sm text-gray-400">Based in India · Remote OK</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Looking for a backend-focused full-stack engineer? Let's talk. I'm available for full-time roles, freelance, and collaboration.
              </p>
            </div>

            {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card flex items-center gap-4 p-4 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-200 group hover:-translate-y-0.5"
              >
                <div className="p-2.5 rounded-xl bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                  <Icon size={16} className="text-violet-400" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium">{label}</p>
                  <p className="text-sm text-gray-300 font-medium truncate group-hover:text-white transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form — right */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-white mb-1">Send a message</h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    placeholder="John Doe"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="john@company.com"
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  rows={6}
                  placeholder="Tell me about the role / project..."
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-indigo-500 transition-all shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
