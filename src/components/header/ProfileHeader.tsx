import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '../ThemeToggle';

export function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20 border-2 border-primary/10">
          <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Profile" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">Senal Karanda</h1>
          <p className="text-muted-foreground">Senior Software Engineer</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary">Available for work</Badge>
            <Badge variant="outline">Remote</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full md:w-auto justify-between md:justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
}