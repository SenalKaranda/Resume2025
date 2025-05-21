import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { resumeData } from '@/data/resumeData';

export function Mentoring() {
  return (
    <section id="mentoring" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Leadership
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.mentoring.map((item, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <CardTitle>{item.title}</CardTitle>
                <Badge variant="outline">{item.date}</Badge>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{achievement}</span>
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