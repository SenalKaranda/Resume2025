import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

export function Introduction() {
  return (
    <section id="intro" className="py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-lg leading-7 text-muted-foreground">
            Hi, I'm John. I'm a senior software engineer with over 8 years of experience
            building scalable web applications. Specializing in frontend development
            with React, TypeScript, and modern web technologies.
          </p>
          <p className="text-lg leading-7 text-muted-foreground">
            Currently working on building accessible, human-centered products at Acme Inc.
            I'm passionate about creating beautiful and functional user interfaces 
            that solve real-world problems.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline" className="gap-2">
            <Mail className="h-4 w-4" />
            Contact Me
          </Button>
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