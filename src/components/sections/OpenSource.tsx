import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Star, GitFork } from 'lucide-react';

interface Repository {
  name: string;
  description: string;
  stars: number;
  url: string;
  languages: string[];
}

const repositories: Repository[] = [
  {
    name: "UE5-ProceduralTerrain_3D",
    description: "A procedural terrain generator for Unreal Engine 5. Uses the Diamond Square algorithm and perlin noise to generate custom terrain on a procedural mesh. Also generates trees, rocks, and flowers, accordingly.",
    stars: 6,
    url: "https://github.com/SenalKaranda/UE5-ProceduralTerrain_3D",
    languages: ["C++", "Unreal Engine 5"]
  },
  {
    name: "UE5-ProceduralTerrain_2D",
    description: "A map generator for UE5. Procedurally generates a map of tiles, with five biomes and the equator in mind. Is seeded and has a map save/load feature implemented.",
    stars: 4,
    url: "https://github.com/SenalKaranda/UE5-ProceduralTerrain_2D",
    languages: ["C++", "Unreal Engine 5"]
  },
  {
    name: "RPi-FM_LCD",
    description: "A python version of the RPi_FmTransmitter repo. Converted from bash and includes functionality to show song names using an LCD display. Requires the built fm_transmitter repo as well as this repo to run: https://gist.github.com/DenisFromHR/cc863375a6e19dce359d",
    stars: 0,
    url: "https://github.com/SenalKaranda/RPi-FM_LCD",
    languages: ["Python"]
  },
  {
    name: "RPi_Moisture_Monitor",
    description: "A python script to track moisture sensor values and notify me of changes using IFTTT.",
    stars: 0,
    url: "https://github.com/SenalKaranda/RPi_Moisture_Monitor",
    languages: ["Python"]
  },
  {
    name: "HTML-Dynamic_Portfolio",
    description: "A dynamic web portfolio/resume built using HTML, CSS, JS, and JSON. All data is dynamically read from JSON files that I can easily update, without having to touch the HTML code. I use Google Firebase to host a live version at: https://portfolio-skaranda.web.app/",
    stars: 0,
    url: "https://github.com/SenalKaranda/HTML-Dynamic_Portfolio",
    languages: ["HTML", "CSS", "JavaScript"]
  }
];

export function OpenSource() {
  return (
    <section id="open-source" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Contributions
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