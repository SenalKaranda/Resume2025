import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Calendar } from 'lucide-react';

interface VolunteerItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  impact: string[];
}

const volunteerData: VolunteerItem[] = [
  {
    role: "Tech Mentor",
    organization: "Code for Good",
    period: "2022 - Present",
    description: "Mentoring underprivileged students in web development and programming basics.",
    impact: [
      "Mentored 20+ students",
      "90% course completion rate",
      "5 students placed in tech internships"
    ]
  },
  {
    role: "Workshop Leader",
    organization: "Women in Tech",
    period: "2021 - Present",
    description: "Leading monthly workshops on various programming topics for women entering tech.",
    impact: [
      "Conducted 15+ workshops",
      "200+ total participants",
      "Created learning materials"
    ]
  },
  {
    role: "Open Source Maintainer",
    organization: "Python Education Foundation",
    period: "2020 - Present",
    description: "Maintaining educational resources and tools for Python learners.",
    impact: [
      "500+ contributions",
      "Helped 1000+ learners",
      "Created 3 popular tutorials"
    ]
  }
];

export function Volunteering() {
  return (
    <section id="volunteering" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Heart className="h-6 w-6" />
        Community & Volunteering
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteerData.map((item, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="space-y-2">
                <CardTitle>{item.role}</CardTitle>
                <div className="text-muted-foreground">
                  <p>{item.organization}</p>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <div>
                <h4 className="font-medium mb-2">Impact:</h4>
                <ul className="space-y-1">
                  {item.impact.map((point, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}