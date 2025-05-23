import { cn } from '@/lib/utils';
import { ExportResume } from '@/components/ExportResume';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t py-6 md:py-0", className)}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Senal Karanda. All rights reserved.
        </p>

        <p className="text-sm text-muted-foreground">
          Built with Astro and shadcn/ui
        </p>

        <ExportResume />
      </div>
    </footer>
  );
}