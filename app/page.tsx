import { Introduction } from '@/components/sections/Introduction';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Achievements } from '@/components/sections/Achievements';
import { Mentoring } from '@/components/sections/Mentoring';
import { Volunteering } from '@/components/sections/Volunteering';
import { OpenSource } from '@/components/sections/OpenSource';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div
      className="print-page"
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <Introduction />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Mentoring />
      <Volunteering />
      <OpenSource />
      <Contact />
    </div>
  );
}
