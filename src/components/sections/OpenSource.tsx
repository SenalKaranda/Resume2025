import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Star, GitFork } from 'lucide-react';

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
  languages: string[];
}

const repositories: Repository[] = [
  {
    name: "react-data-grid",
    description: "High-performance React data grid with virtual scrolling and advanced features. Contributed major performance improvements and accessibility features.",
    stars: 2800,
    forks: 450,
    url: "#",
    languages: ["TypeScript", "React", "CSS"]
  },
  {
    name: "python-ml-utils",
    description: "Collection of utility functions for machine learning preprocessing and model evaluation. Created and maintained the project.",
    stars: 1200,
    forks: 180,
    url: "#",
    languages: ["Python", "NumPy", "Scikit-learn"]
  }
];

export function OpenSource() {
  return (
    <section id="open-source" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Github className="h-6 w-6" />
        Open Source Contributions
      </h2>
      
      <div className="space-y-6">
        {repositories.map((repo, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">
                  <a href={repo.url} className="hover:underline">{repo.name}</a>
                </CardTitle>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{repo.forks}</span>
                  </div>
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