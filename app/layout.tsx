'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ProfileHeader } from '@/components/header/ProfileHeader';
import { NavigationMenu } from '@/components/navigation/NavigationMenu';
import { Footer } from '@/components/Footer';
import React from 'react';

interface ResumeLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ title, description = "Senal Karanda's Professional Resume", children }: ResumeLayoutProps) {
  // React.useEffect(() => {
  //   // Register intersection observer for scroll animations
  //   const sections = document.querySelectorAll('section');
  //   const observer = new window.IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('section-visible');
  //       }
  //     });
  //   }, { threshold: 0.1 });
  //   sections.forEach(section => {
  //     observer.observe(section);
  //   });
  //   return () => observer.disconnect();
  // }, []);

  return (
    <html lang="en">
      <head>
        {/* ...other head tags... */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var theme = localStorage.getItem('resume-theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch(e) {}
})();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container">
                <ProfileHeader />
              </div>
            </header>
            <div className="flex-1">
              <div className="container flex-1 items-start md:grid md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_240px] md:gap-6 lg:gap-8 py-8">
                <main className="relative py-6 md:py-0 md:pr-8">
                  {children}
                </main>
                <aside className="hidden md:block">
                  <div className="fixed w-[200px] lg:w-[240px]">
                    <div className="pt-8">
                      <NavigationMenu />
                    </div>
                  </div>
                </aside>
              </div>
            </div>
            <Footer />
          </div>
          <style>{`
            :root {
              scroll-behavior: smooth;
              --header-height: 8rem;
            }
            /* section {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.6s ease, transform 0.6s ease;
            } */
            .section-visible {
              opacity: 1;
              transform: translateY(0);
            }
            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 0 1rem;
            }
            @media (min-width: 1400px) {
              .container {
                max-width: 1400px;
              }
            }
          `}</style>
        </ThemeProvider>
      </body>
    </html>
  );
}


