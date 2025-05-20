import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calendar } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Credible BI Builder',
    institution: 'Qualifacts',
    period: '2023 - Present',
    description: 'A 3-day course that covers the fundamentals of BI and the Credible BI toolset.',
  },
  {
    degree: 'Credible System Administrator',
    institution: 'Qualifacts',
    period: '2023 - Present',
    description: 'A 3-day course that covers the fundamentals of the Credible EHR system and the System Administrator toolset.',
  },
  {
    degree: 'Microsoft Dashboard in a Day (DIAD)',
    institution: 'Microsoft',
    period: '2025',
    description: 'A 1-day course that covers the fundamentals of Microsoft Power BI and the workflow of creating a dashboard.',
  },
];

export function Education() {
  return (
    <section id="education" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Professional Training
      </h2>
      
      <div className="space-y-6">
        {educationData.map((item, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>{item.degree}</CardTitle>
                  <CardDescription>{item.institution}</CardDescription>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{item.period}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}