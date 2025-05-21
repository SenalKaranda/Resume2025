import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { resumeData } from '@/data/resumeData';

export function Skills() {
  return (
    <section id="skills" className="py-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.skills.map((category, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="mb-4">
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