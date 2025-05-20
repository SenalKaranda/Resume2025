import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AtSign, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Contact Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below to get in touch with me.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Job opportunity" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="min-h-[120px]"
                />
              </div>
              <Button
                type="button"
                className="w-full gap-2"
                onClick={() => {
                  const firstName = (document.getElementById('first-name') as HTMLInputElement)?.value;
                  const lastName = (document.getElementById('last-name') as HTMLInputElement)?.value;
                  const email = (document.getElementById('email') as HTMLInputElement)?.value;
                  const subject = (document.getElementById('subject') as HTMLInputElement)?.value;
                  const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;

                  const mailtoUrl = `mailto:senalkaranda@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                    `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
                  )}`;

                  window.location.href = mailtoUrl;
                }}
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
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
                  <a href="mailto:senalkaranda@gmail.com" className="hover:underline">
                    senalkaranda@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <div className="font-medium">Website</div>
                <div className="text-muted-foreground">
                  <a href="https://catdadstudios.com" className="hover:underline">
                    Cat Dad Studios
                  </a>
                </div>
              </div>
              <div>
                <div className="font-medium">Location</div>
                <div className="text-muted-foreground">Virginia, USA</div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Currently employed full-time, but open to discussing
                new opportunities. My typical response time is within 24 hours.
              </p>
              <br></br>
              <p className='text-muted-foreground'>
                Acceptable opportunities are those that align with my skills and interests,
                including BI Engineer, BI Analyst, and Junior to Mid-Level Data Science roles.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}