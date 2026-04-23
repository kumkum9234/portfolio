import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { PERSONAL } from '@/lib/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://gauravmandal.dev'),
  title: `${PERSONAL.name} — ${PERSONAL.title}`,
  description: `Portfolio of ${PERSONAL.name}. ${PERSONAL.subtitle}. Building production-grade web applications.`,
  keywords: ['Full Stack Engineer', 'Node.js', 'Next.js', 'PostgreSQL', 'Backend Developer', 'React'],
  authors: [{ name: PERSONAL.name }],
  openGraph: {
    title: `${PERSONAL.name} — ${PERSONAL.title}`,
    description: `Portfolio of ${PERSONAL.name}. ${PERSONAL.subtitle}.`,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL.name} — ${PERSONAL.title}`,
    description: `Portfolio of ${PERSONAL.name}. ${PERSONAL.subtitle}.`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1a1a2e',
              color: '#e2e8f0',
              border: '1px solid rgba(139,92,246,0.3)',
              borderRadius: '12px',
              fontSize: '14px',
            },
          }}
        />
      </body>
    </html>
  );
}
