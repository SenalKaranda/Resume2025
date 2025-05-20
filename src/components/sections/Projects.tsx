import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, Folder } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

const projectsData: ProjectItem[] = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Tailwind CSS. Features include product listing, cart functionality, user authentication, and payment processing.',
    technologies: ['Next.js', 'React', 'Node.js', 'Stripe', 'MongoDB'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for task management with drag-and-drop functionality, priority levels, and real-time updates.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard with location search, 7-day forecast, and detailed weather information. Uses multiple weather APIs.',
    technologies: ['Vue.js', 'Express', 'Chart.js', 'OpenWeather API'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Folder className="h-6 w-6" />
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <Card key={index} className="flex flex-col transition-all hover:shadow-md">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}