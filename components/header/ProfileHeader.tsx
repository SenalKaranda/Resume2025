'use client';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '../ThemeToggle';
import React from "react";
import { resumeData } from '@/data/resumeData';

export function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={resumeData.logo_src} alt={resumeData.name} />
          <AvatarFallback>
            {resumeData.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{resumeData.name}</h1>
          <p className="text-muted-foreground">{resumeData.title}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary">Available for Work</Badge>
            <Badge variant="outline">Remote / Hybrid</Badge>
            <Badge variant="destructive">Virginia, USA</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-full md:w-auto justify-between md:justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
}