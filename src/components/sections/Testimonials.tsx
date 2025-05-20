import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: {
    name: string;
    title: string;
    company: string;
    image: string;
  };
}

const testimonials: Testimonial[] = [
  {
    content: "John's technical expertise and leadership skills transformed our development process. His ability to mentor junior developers while delivering high-quality code is exceptional.",
    author: {
      name: "Sarah Chen",
      title: "CTO",
      company: "TechStart Solutions",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  },
  {
    content: "Working with John was a game-changer for our project. His deep understanding of both frontend and backend technologies helped us deliver a complex application ahead of schedule.",
    author: {
      name: "Michael Rodriguez",
      title: "Engineering Manager",
      company: "InnovateCorp",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <Quote className="h-6 w-6" />
        Testimonials
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} />
                  <AvatarFallback>{testimonial.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.author.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.author.title}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.author.company}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="italic text-muted-foreground">
                "{testimonial.content}"
              </blockquote>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}