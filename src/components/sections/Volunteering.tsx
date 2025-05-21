import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export function Volunteering() {
  return (
    <section id="volunteering" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Community
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.volunteering.map((item, index) => (
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