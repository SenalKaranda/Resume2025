import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resumeData';

export function Achievements() {
  return (
    <section id="achievements" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {resumeData.achievements.map((achievement, index) => (
          <Card key={index} className="transition-all hover:shadow-md flex flex-col h-full">
            <CardHeader className="p-6 pb-0">
              <div className="flex items-center gap-2">
                <CardTitle>{achievement.title}</CardTitle>
                <Badge variant="outline">{achievement.date}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col min-h-0 p-6 pt-4">
              <p className="text-muted-foreground">{achievement.description}</p>
              {achievement.metrics && (
                <div className="mt-auto pt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {achievement.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm p-2 rounded-md bg-muted"
                      >
                        <span className="w-full text-center">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}