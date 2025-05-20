import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronUp } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface NavigationItem {
  id: string;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'intro', label: 'Introduction 👋' },
  { id: 'skills', label: 'Skills 🛠️' },
  { id: 'experience', label: 'Experience 💼' },
  { id: 'education', label: 'Training 📚' },
  { id: 'certifications', label: 'Certifications 🏆' },
  { id: 'projects', label: 'Projects 🚀' },
  { id: 'achievements', label: 'Achievements ⭐' },
  { id: 'mentoring', label: 'Leadership 👥' },
  { id: 'volunteering', label: 'Community 🤝' },
  { id: 'open-source', label: 'Contributions 🌟' },
  { id: 'contact', label: 'Contact 📧' },
];

export function NavigationMenu() {
  const [activeSection, setActiveSection] = useState('intro');
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 128; // 8rem in pixels
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 160; // Adjusted to account for header
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / docHeight) * 100;
      setScrollProgress(scrollPercentage);

      let currentSection = 'intro';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollArea className="h-[calc(100vh-var(--header-height)-8rem)]">
      <div className="pr-4 space-y-4">
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-between text-sm text-muted-foreground hover:bg-muted/50",
                activeSection === item.id && "font-medium text-foreground bg-muted/50"
              )}
              onClick={() => scrollToSection(item.id)}
            >
              <span>{item.label}</span>
            </Button>
          ))}
        </nav>

        <div className="pt-4 border-t">
          <div className="bg-muted rounded-full h-1">
            <div 
              className="bg-primary h-1 rounded-full transition-all duration-300" 
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full mt-4 text-sm text-muted-foreground hover:text-foreground"
            onClick={scrollToTop}
          >
            <ChevronUp className="h-4 w-4 mr-2" />
            Back to top
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
}