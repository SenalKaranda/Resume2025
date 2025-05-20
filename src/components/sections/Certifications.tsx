import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  validUntil?: string;
  credentialId: string;
  link: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    validUntil: "2026",
    credentialId: "AWS-PSA-123456",
    link: "#",
    skills: ["AWS", "Cloud Architecture", "Security", "Scalability"]
  },
  {
    name: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2022",
    validUntil: "2024",
    credentialId: "GCP-PDE-789012",
    link: "#",
    skills: ["Google Cloud", "Data Engineering", "Machine Learning", "Big Data"]
  },
  {
    name: "Unity Certified Professional Programmer",
    issuer: "Unity Technologies",
    date: "2021",
    credentialId: "UCP-345678",
    link: "#",
    skills: ["Unity", "C#", "Game Development", "3D Graphics"]
  },
  {
    name: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "2022",
    validUntil: "2024",
    credentialId: "MSFT-DS-901234",
    link: "#",
    skills: ["Azure", "Data Science", "Machine Learning", "Python"]
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Award className="h-6 w-6" />
        Professional Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
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