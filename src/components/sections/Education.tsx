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
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2014 - 2016',
    description: 'Specialized in Human-Computer Interaction and Web Technologies. Thesis on "Improving Web Accessibility Through Machine Learning".',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'MIT',
    period: '2010 - 2014',
    description: 'Graduated with honors. Participated in various hackathons and open-source projects.',
  },
  {
    degree: 'Professional Certifications',
    institution: 'Various',
    period: '2016 - Present',
    description: 'AWS Certified Developer, Google Cloud Professional, React Certification, Accessibility Specialist (IAAP)',
  },
];

export function Education() {
  return (
    <section id="education" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <BookOpen className="h-6 w-6" />
        Education & Certifications
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