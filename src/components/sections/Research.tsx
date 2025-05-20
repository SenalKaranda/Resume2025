import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollText, FileText, Lightbulb } from 'lucide-react';

interface ResearchItem {
  type: 'publication' | 'patent';
  title: string;
  date: string;
  description: string;
  tags: string[];
  link?: string;
  status?: string;
}

const researchData: ResearchItem[] = [
  {
    type: 'publication',
    title: "Machine Learning Approaches to Code Analysis",
    date: "2023",
    description: "Research paper on applying machine learning techniques to static code analysis, published in the Journal of Software Engineering.",
    tags: ["Machine Learning", "Static Analysis", "Software Engineering"],
    link: "#"
  },
  {
    type: 'patent',
    title: "System and Method for Automated Code Optimization",
    date: "2022",
    description: "Patent pending for a novel approach to automated code optimization using machine learning algorithms.",
    tags: ["Code Optimization", "AI", "Software Performance"],
    status: "Pending"
  }
];

export function Research() {
  return (
    <section id="research" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <ScrollText className="h-6 w-6" />
        Research & Patents
      </h2>
      
      <div className="space-y-6">
        {researchData.map((item, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {item.type === 'publication' ? (
                      <FileText className="h-4 w-4" />
                    ) : (
                      <Lightbulb className="h-4 w-4" />
                    )}
                    <CardTitle>{item.title}</CardTitle>
                  </div>
                  <CardDescription>
                    {item.date}
                    {item.status && ` • ${item.status}`}
                  </CardDescription>
                </div>
                <Badge variant="outline">
                  {item.type === 'publication' ? 'Publication' : 'Patent'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              {item.link && (
                <a
                  href={item.link}
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                >
                  View Publication
                  <FileText className="h-3 w-3" />
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}