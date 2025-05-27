import { Card, CardContent } from '@/components/ui/card';
import { resumeData } from '@/data/resumeData';

export function Introduction() {
  return (
    <section id="intro" className="py-8">
      <h2 className="text-3xl font-bold mb-6">Introduction</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          {resumeData.summary.map((paragraph, idx) => (
            <p key={idx} className="text-lg leading-7 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          <a href={resumeData.github} target="_blank" rel="noopener noreferrer">
            <Card className="transition-colors hover:bg-muted/50 cursor-pointer">
              <CardContent className="p-4 flex items-center gap-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <div>
                  <h3 className="font-medium">GitHub</h3>
                  <p className="text-sm text-muted-foreground">@SenalKaranda</p>
                </div>
              </CardContent>
            </Card>
          </a>
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">
            <Card className="transition-colors hover:bg-muted/50 cursor-pointer">
              <CardContent className="p-4 flex items-center gap-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">SKaranda</p>
                </div>
              </CardContent>
            </Card>
          </a>
          <a href={resumeData.website} target="_blank" rel="noopener noreferrer" className="sm:col-span-2 md:col-span-1">
            <Card className="transition-colors hover:bg-muted/50 cursor-pointer">
              <CardContent className="p-4 flex items-center gap-4">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <div>
                  <h3 className="font-medium">Website</h3>
                  <p className="text-sm text-muted-foreground">Cat Dad Studios</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}