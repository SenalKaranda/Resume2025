import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { resumeData } from '@/data/resumeData';

export function Contact() {
  return (
    <section id="contact" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Contact Me
      </h2>
      
      <div className="grid grid-cols-2 gap-8">        
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Here are the best ways to reach me.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="font-medium">Email</div>
              <div className="text-muted-foreground">
                <a href={`mailto:${resumeData.email}`} className="hover:underline">
                  {resumeData.email}
                </a>
              </div>
            </div>
            <div>
              <div className="font-medium">Website</div>
              <div className="text-muted-foreground">
                <a href={resumeData.website} className="hover:underline">
                  Cat Dad Studios
                </a>
              </div>
            </div>
            <div>
              <div className="font-medium">Location</div>
              <div className="text-muted-foreground">{resumeData.location}</div>
            </div>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              {resumeData.availability.map((line, idx) => (
                <>
                  <p key={idx} className="text-muted-foreground">{line}</p>
                  {idx < resumeData.availability.length - 1 && <br/>}
                </>
              ))}
            </CardContent>
          </Card>
      </div>
      <div className="h-20" />
      <div className="h-20" />
    </section>
  );
}