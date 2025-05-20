import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Target, TrendingUp, Users, Code } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics?: string[];
}

const achievements: Achievement[] = [
  {
    title: "Technical Leadership",
    description: "Led the development of a mission-critical system serving millions of users.",
    icon: <Users className="h-6 w-6" />,
    metrics: [
      "Managed 15+ developers",
      "99.99% system uptime",
      "40% performance improvement",
      "$2M cost savings"
    ]
  },
  {
    title: "Game Development Success",
    description: "Developed and launched a successful mobile game using Unity and C#.",
    icon: <Target className="h-6 w-6" />,
    metrics: [
      "1M+ downloads",
      "4.8/5 star rating",
      "Featured on App Store",
      "30% user retention"
    ]
  },
  {
    title: "Data Science Impact",
    description: "Implemented machine learning solutions for business optimization.",
    icon: <TrendingUp className="h-6 w-6" />,
    metrics: [
      "85% prediction accuracy",
      "50% process automation",
      "$1.5M revenue increase",
      "3 patents filed"
    ]
  },
  {
    title: "Open Source Contribution",
    description: "Significant contributions to major open source projects.",
    icon: <Code className="h-6 w-6" />,
    metrics: [
      "1000+ GitHub stars",
      "200+ pull requests merged",
      "5 major features added",
      "Core maintainer status"
    ]
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-2">
                {achievement.icon}
                <CardTitle>{achievement.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{achievement.description}</p>
              {achievement.metrics && (
                <div className="grid grid-cols-2 gap-2">
                  {achievement.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm p-2 rounded-md bg-muted"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}