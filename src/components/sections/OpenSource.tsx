import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Star } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export function OpenSource() {
  return (
    <section id="open-source" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Open-Source Contributions
      </h2>
      
      <div className="space-y-6">
        {resumeData.openSource.map((repo, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">
                  <a href={repo.url} className="hover:underline">{repo.name}</a>
                </CardTitle>
                <div className="flex items-center gap-4">
                  {repo.stars > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      <span>{repo.stars}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{repo.description}</p>
              <div className="flex flex-wrap gap-2">
                {repo.languages.map((lang) => (
                  <Badge key={lang} variant="secondary">{lang}</Badge>
                ))}
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  View Repository
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}