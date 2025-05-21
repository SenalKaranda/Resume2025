import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Globe } from 'lucide-react';
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
                <Github className="h-6 w-6" />
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
                <Linkedin className="h-6 w-6" />
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
                <Globe className="h-6 w-6" />
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