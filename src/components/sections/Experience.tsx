import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { resumeData } from '@/data/resumeData';

export function Experience() {
  return (
    <section id="experience" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Experience
      </h2>
      
      <div className="space-y-6">
        {resumeData.experience.map((item) => (
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