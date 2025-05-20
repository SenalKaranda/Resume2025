import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

export function Introduction() {
  return (
    <section id="intro" className="py-8">

      <div className="flex flex-wrap gap-4 pt-2">
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
      </div>
      <br></br>
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-lg leading-7 text-muted-foreground">
          From building my first desktop at age eight to leading technical projects today, 
          my journey in technology has been driven by a deep passion for innovation and problem-solving. 
          Early exposure to programming through tools like Alice and languages like C++, Java, 
          and Python sparked my interest in software development and robotics, eventually leading me to 
          found a high school cybersecurity club that competed at the state level.
          </p>
          <p className="text-lg leading-7 text-muted-foreground">
          Over the years, I've expanded my expertise to include web design (HTML, CSS, JavaScript), network infrastructure, 
          and advanced programming, supporting small businesses with web development and hardware deployments. 
          This entrepreneurial experience taught me the importance of clear client communication and robust network security, 
          laying the groundwork for my professional growth.
          </p>
          <p className="text-lg leading-7 text-muted-foreground">
          In 2023, I transitioned to teaching as an assistant instructor for a cybersecurity bootcamp, 
          mentoring aspiring professionals in the fundamentals of information security. 
          This same year, I took on the role of IT Technician for a nonprofit, contributing to critical health and 
          community services across five counties in Virginia. In 2024, I advanced to IT Applications Administrator and BI Reporter, 
          where I now oversee complex data systems and application integrations, driving impactful technology solutions 
          for my organization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <Github className="h-6 w-6" />
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-muted-foreground">@johnprogrammer</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-4">
              <Linkedin className="h-6 w-6" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">john-programmer</p>
              </div>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2 md:col-span-1">
            <CardContent className="p-4 flex items-center gap-4">
              <Mail className="h-6 w-6" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-muted-foreground">john@example.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}