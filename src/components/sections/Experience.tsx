import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Software Engineer',
    company: 'Acme Inc.',
    period: '2021 - Present',
    description: 'Led the frontend development team in building a new customer dashboard. Improved performance by 40% and implemented CI/CD pipelines. Mentored junior developers and contributed to the company\'s design system.',
    skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'GraphQL', 'Jest']
  },
  {
    id: 'exp-2',
    role: 'Lead Frontend Engineer',
    company: 'TechCorp',
    period: '2018 - 2021',
    description: 'Designed and implemented a component library used across multiple products. Collaborated with UX designers to create responsive and accessible user interfaces. Improved page load times by 35%.',
    skills: ['Vue.js', 'JavaScript', 'SCSS', 'Webpack', 'REST APIs', 'Storybook']
  },
  {
    id: 'exp-3',
    role: 'Software Developer',
    company: 'StartUp Solutions',
    period: '2016 - 2018',
    description: 'Developed and maintained multiple client-facing web applications. Collaborated with cross-functional teams to deliver features on time. Implemented responsive designs and integrated third-party APIs.',
    skills: ['Angular', 'TypeScript', 'RxJS', 'CSS', 'Node.js', 'MongoDB']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Briefcase className="h-6 w-6" />
        Experience
      </h2>
      
      <div className="space-y-6">
        {experienceData.map((item) => (
          <Card key={item.id} id={item.id} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <CardTitle>{item.role}</CardTitle>
                  <CardDescription>{item.company}</CardDescription>
                </div>
                <Badge variant="outline" className="w-fit">
                  {item.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}