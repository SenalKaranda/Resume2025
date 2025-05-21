import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export function Certifications() {
  return (
    <section id="certifications" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
      Professional Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.certifications.map((cert, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="space-y-2">
                <CardTitle className="flex items-start justify-between">
                  <span>{cert.name}</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardTitle>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>{cert.issuer}</p>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>
                      Issued: {cert.date}
                      {cert.validUntil && ` • Valid until: ${cert.validUntil}`}
                    </span>
                  </div>
                  <p className="text-xs">Credential ID: {cert.credentialId}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
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