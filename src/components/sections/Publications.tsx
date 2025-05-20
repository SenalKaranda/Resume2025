import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollText, Calendar, ExternalLink, Video, FileText } from 'lucide-react';

interface Publication {
  type: 'article' | 'talk' | 'paper';
  title: string;
  venue: string;
  date: string;
  description: string;
  tags: string[];
  links: {
    label: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

const publications: Publication[] = [
  {
    type: 'paper',
    title: "Optimizing Game Performance Through Machine Learning",
    venue: "International Conference on Game Development",
    date: "2023",
    description: "Research paper exploring novel approaches to game optimization using machine learning techniques.",
    tags: ["Game Development", "Machine Learning", "Performance Optimization"],
    links: [
      {
        label: "Read Paper",
        url: "#",
        icon: <FileText className="h-4 w-4" />
      },
      {
        label: "View Presentation",
        url: "#",
        icon: <Video className="h-4 w-4" />
      }
    ]
  },
  {
    type: 'talk',
    title: "Building Scalable Data Pipelines",
    venue: "PyCon 2023",
    date: "2023",
    description: "Conference talk on designing and implementing efficient data processing pipelines using Python.",
    tags: ["Python", "Data Engineering", "Apache Spark", "AWS"],
    links: [
      {
        label: "Watch Talk",
        url: "#",
        icon: <Video className="h-4 w-4" />
      },
      {
        label: "View Slides",
        url: "#",
        icon: <FileText className="h-4 w-4" />
      }
    ]
  },
  {
    type: 'article',
    title: "The Future of Business Intelligence",
    venue: "TechInsights Magazine",
    date: "2022",
    description: "In-depth article discussing emerging trends in business intelligence and data analytics.",
    tags: ["Business Intelligence", "Analytics", "Data Science"],
    links: [
      {
        label: "Read Article",
        url: "#",
        icon: <ExternalLink className="h-4 w-4" />
      }
    ]
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <ScrollText className="h-6 w-6" />
        Publications & Talks
      </h2>
      
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1">
                  <CardTitle>{pub.title}</CardTitle>
                  <CardDescription>
                    {pub.venue}
                    <span className="mx-2">•</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {pub.date}
                    </span>
                  </CardDescription>
                </div>
                <Badge variant="outline" className="w-fit">
                  {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{pub.description}</p>
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {pub.links.map((link, i) => (
                  <Button key={i} variant="outline" size="sm" asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}