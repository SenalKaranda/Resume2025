import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Lightbulb, Trophy } from 'lucide-react';

interface MentoringItem {
  title: string;
  description: string;
  achievements: string[];
  icon: React.ReactNode;
}

const mentoringData: MentoringItem[] = [
  {
    title: "Technical Leadership",
    description: "Led and mentored a team of 8 developers, fostering growth and technical excellence.",
    achievements: [
      "Implemented structured code review process",
      "Created technical documentation guidelines",
      "Established team best practices",
      "Improved team velocity by 40%"
    ],
    icon: <Users className="h-6 w-6" />
  },
  {
    title: "Mentorship Program",
    description: "Created and led a mentorship program for junior developers.",
    achievements: [
      "Mentored 12+ junior developers",
      "Developed learning paths",
      "Conducted weekly 1:1 sessions",
      "90% promotion rate for mentees"
    ],
    icon: <Target className="h-6 w-6" />
  },
  {
    title: "Knowledge Sharing",
    description: "Established knowledge sharing initiatives within the organization.",
    achievements: [
      "Organized tech talks",
      "Created internal training materials",
      "Led workshop sessions",
      "Built internal documentation"
    ],
    icon: <Lightbulb className="h-6 w-6" />
  }
];

export function Mentoring() {
  return (
    <section id="mentoring" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Mentoring & Leadership
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentoringData.map((item, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <CardTitle>{item.title}</CardTitle>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}