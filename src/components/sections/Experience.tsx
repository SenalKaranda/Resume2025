import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 'exp-0',
    role: 'IT BI Analyst',
    company: 'Encompass Community Supports VA',
    period: 'February \'24 - Present',
    description: 'Administrated and maintained a comprehensive BI reporting system using Power BI, enabling the organization to track key performance indicators and make data-driven decisions.\n\nCreated and updated over 50 reports and dashboards, including custom metrics for the organization\'s performance and progress.\n\nCollaborated with stakeholders to identify and prioritize reporting needs, ensuring that the system met the organization\'s requirements and provided actionable insights.\n\nImplemented and maintained a robust data pipeline, integrating data from multiple sources and ensuring that the system was reliable and scalable.',
    skills: [
      'BI Reporting', 
      'SQL', 
      'Power BI'
    ]
  },
  {
    id: 'exp-1',
    role: 'IT Applications Analyst',
    company: 'Encompass Community Supports VA',
    period: 'February \'24 - Present',
    description: 'Led the administration and optimization of critical business applications and data systems, implementing automated workflows and integrations that improved operational efficiency by 25%.\n\nDeveloped and maintained comprehensive Power BI reports and dashboards, providing actionable insights to stakeholders and enabling data-driven decision making across departments.\n\nManaged user access controls, security configurations, and system updates for multiple enterprise applications, ensuring compliance with organizational policies while maintaining system stability.\n\nCollaborated with vendors and internal teams to troubleshoot complex application issues, implement new features, and provide technical documentation for business processes.\n\nOversaw data quality initiatives and system integrations, establishing automated validation processes that reduced manual data entry by 40% while improving accuracy.',
    skills: [
      'Application Administration',
      'System Integration',
      'Workflow Automation',
      'Data Management',
      'Technical Documentation',
      'Vendor Management'
    ]
  },
  {
    id: 'exp-2',
    role: 'IT Support Technician',
    company: 'Encompass Community Supports VA',
    period: 'August \'23 - February \'24',
    description: 'Provided comprehensive IT support across 5 counties in Virginia, managing hardware deployments and software configurations for over 400 users, resulting in improved system reliability and user productivity.\n\nImplemented and maintained Active Directory policies and Microsoft 365 configurations, enhancing security protocols and streamlining user access management across multiple locations.\n\nManaged Windows Server infrastructure and network systems, ensuring high availability and minimal downtime for critical healthcare and community support services.\n\nCoordinated with vendors and internal teams to resolve complex technical issues, maintaining detailed documentation of solutions and contributing to the organization\'s knowledge base.\n\nConducted regular system maintenance and updates across the organization\'s IT infrastructure, proactively identifying and addressing potential technical issues before they impacted operations.',
    skills: [
      'Helpdesk',
      'Microsoft 365',
      'Active Directory',
      'Windows Server'
    ]
  },
  {
    id: 'exp-3',
    role: 'Teaching Assistant',
    company: 'StartUp Solutions',
    period: 'February \'23 - May \'24',
    description: 'Led hands-on cybersecurity training sessions covering network security, penetration testing, and threat analysis for 80+ UConn students, achieving a 95% participant satisfaction rate.\n\nDeveloped and delivered supplementary learning materials on key topics including cryptography, malware analysis, and incident response, contributing to a 15% improvement in practical assessment scores.\n\nCollaborated with lead instructor to enhance curriculum and lab exercises, incorporating real-world case studies and industry best practices to better prepare students for cybersecurity careers.\n\nImplemented version control workflows using Git to manage course materials and student projects, streamlining content delivery and enabling effective collaboration across multiple cohorts.\n\nProvided individualized mentoring through weekly office hours, helping students overcome technical challenges and develop professional problem-solving skills while maintaining a supportive learning environment.',
    skills: [
      'Cyber Security', 
      'Teaching', 
      'Communication', 
      'Teamwork', 
      'Time Management']
  },
  {
    id: 'exp-4',
    role: 'Technical Specialist',
    company: 'Tesselex Solutions',
    period: 'January \'20 - December \'22',
    description: 'Founded and operated an IT consulting business serving small businesses in the Hamden/New Haven CT area, providing comprehensive technical solutions and support. Developed and launched custom WordPress and HTML/CSS websites for 5+ local businesses, increasing their online visibility and customer engagement by an average of 40%. Managed end-to-end website hosting services, including domain registration, SSL certification, and ongoing maintenance, achieving 99.9% uptime for client websites. Implemented complete network infrastructure solutions for small businesses, including hardware procurement, network security configurations, and disaster recovery planning. Deployed and configured business-critical software solutions including POS systems, accounting software, and productivity tools, resulting in 30% improved operational efficiency for clients. Conducted regular security audits and implemented robust cybersecurity measures, protecting client networks from potential threats while ensuring business continuity.',
    skills: [
      'PC Building', 
      'Network Administration', 
      'Software Installation', 
      'Web Design', 
      'WordPress']
  },
  {
    id: 'exp-5',
    role: 'Technical Associate',
    company: 'Staples',
    period: 'December \'19 - July \'21',
    description: 'Provided expert technical consultation and sales support for computer hardware, software, and services, consistently exceeding monthly sales targets by 20%. Performed comprehensive diagnostics and repairs on customer devices, including virus removal, hardware upgrades, and system optimization, maintaining a 95% customer satisfaction rating. Delivered personalized product recommendations based on customer needs, specializing in custom PC builds, peripherals, and software solutions, resulting in high repeat business rates. Conducted one-on-one technology tutorials for customers, helping them understand their purchases and maximize device functionality. Collaborated with team members to maintain organized repair queues and detailed service documentation, ensuring efficient workflow and clear communication with customers.',
    skills: [
      'PC Building', 
      'Network Administration', 
      'Software Installation'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-8">
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
        Experience
      </h2>
      
      <div className="space-y-6">
        {experienceData.map((item) => (
          <Card key={item.id} id={item.id} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <CardTitle>{item.role}</CardTitle>
                  <CardDescription>{item.company}</CardDescription>
                </div>
                <Badge variant="outline" className="w-fit">
                  {item.period}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
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