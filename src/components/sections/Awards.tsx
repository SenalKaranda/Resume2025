import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar } from 'lucide-react';

interface AwardItem {
  title: string;
  organization: string;
  date: string;
  description: string;
}

const awardsData: AwardItem[] = [
  {
    title: "Distinguished Engineer Award",
    organization: "Tech Excellence Foundation",
    date: "2023",
    description: "Recognized for outstanding contributions to software engineering and technical leadership."
  },
  {
    title: "Best Technical Publication",
    organization: "Software Engineering Conference",
    date: "2022",
    description: "Award for the most innovative research paper on machine learning in code analysis."
  },
  {
    title: "Innovation Excellence",
    organization: "Acme Inc.",
    date: "2021",
    description: "Internal recognition for developing a revolutionary optimization algorithm."
  }
];

export function Awards() {
  return (
    <section id="awards" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Award className="h-6 w-6" />
        Awards & Recognition
      </h2>
      
      <div className="space-y-6">
        {awardsData.map((award, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>{award.title}</CardTitle>
                  <p className="text-muted-foreground">{award.organization}</p>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{award.date}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}