import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, LineChart, Lightbulb } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Business Intelligence & Data',
    icon: <LineChart className="h-5 w-5" />,
    skills: [
      { name: 'Power BI', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'Data Integration', level: 85 },
      { name: 'Reporting Automation', level: 85 },
    ],
  },
  {
    title: 'IT Administration',
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: 'Application Administration', level: 90 },
      { name: 'System Integration', level: 85 },
      { name: 'Microsoft 365', level: 85 },
      { name: 'Active Directory', level: 80 },
      { name: 'Windows Server', level: 80 },
      { name: 'Workflow Automation', level: 80 },
    ],
  },
  {
    title: 'Cybersecurity & Training',
    icon: <Lightbulb className="h-5 w-5" />,
    skills: [
      { name: 'Cybersecurity', level: 85 },
      { name: 'Teaching & Mentoring', level: 90 },
      { name: 'Communication', level: 90 },
      { name: 'Teamwork', level: 90 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 85 },
    ],
  },
  {
    title: 'Backend Development',
    icon: <LineChart className="h-5 w-5" />,
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 75 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    title: 'Other Skills',
    icon: <Lightbulb className="h-5 w-5" />,
    skills: [
      { name: 'UX/UI Design', level: 75 },
      { name: 'CI/CD', level: 75 },
      { name: 'Testing', level: 80 },
      { name: 'Performance Optimization', level: 80 },
      { name: 'Accessibility', level: 80 },
      { name: 'Vendor Management', level: 75 },
      { name: 'Technical Documentation', level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}