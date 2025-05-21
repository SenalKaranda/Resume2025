import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import { resumeData } from '@/data/resumeData';

const checkPageSpace = (doc: jsPDF, y: number, needed: number) => {
  const pageHeight = doc.internal.pageSize.getHeight();
  if (y + needed > pageHeight - 10) { // 10mm bottom margin
    doc.addPage();
    return 15; // Reset y to top margin
  }
  return y;
};

export function ExportResume() {
  const handleExport = () => {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    let y = 15;
    const left = 15;
    const sectionGap = 8;
    const lineGap = 6;
    const maxWidth = 180;

    // Helper to add text and handle page breaks
    const addText = (text: string | string[], fontSize = 10, fontStyle = 'normal', indent = 0) => {
      doc.setFontSize(fontSize);
      doc.setFont('helvetica', fontStyle);
      const lines = Array.isArray(text) ? text : doc.splitTextToSize(text, maxWidth - indent);
      lines.forEach((line) => {
        y = checkPageSpace(doc, y, 5);
        doc.text(line, left + indent, y);
        y += 5;
      });
    };

    // Header
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, 9);
    doc.text(resumeData.name, left, y);
    y += 9;
    doc.setFontSize(13);
    doc.setFont('helvetica', 'normal');
    y = checkPageSpace(doc, y, 8);
    doc.text(resumeData.title, left, y);
    y += 8;
    doc.setFontSize(10);
    y = checkPageSpace(doc, y, lineGap);
    doc.text(`Email: ${resumeData.email} | Location: ${resumeData.location}`, left, y);
    y += lineGap;
    y = checkPageSpace(doc, y, lineGap);
    doc.text(`Website: ${resumeData.website} | LinkedIn: ${resumeData.linkedin}`, left, y);
    y += sectionGap;

    // Summary
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, lineGap);
    doc.text('Summary', left, y);
    y += lineGap;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    resumeData.summary.forEach((p) => {
      const lines = doc.splitTextToSize(p, maxWidth);
      lines.forEach((line) => {
        y = checkPageSpace(doc, y, 5);
        doc.text(line, left, y);
        y += 5;
      });
    });
    y += sectionGap;

    // Skills
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, lineGap);
    doc.text('Skills', left, y);
    y += lineGap;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    resumeData.skills.forEach((cat) => {
      y = checkPageSpace(doc, y, 5);
      doc.text(`${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`, left, y);
      y += 5;
    });
    y += sectionGap;

    // Experience
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, lineGap);
    doc.text('Experience', left, y);
    y += lineGap;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    resumeData.experience.forEach((exp) => {
      doc.setFont('helvetica', 'bold');
      y = checkPageSpace(doc, y, 5);
      doc.text(`${exp.role} - ${exp.company} (${exp.period})`, left, y);
      y += 5;
      doc.setFont('helvetica', 'normal');
      const lines = doc.splitTextToSize(exp.description, maxWidth);
      lines.forEach((line) => {
        y = checkPageSpace(doc, y, 5);
        doc.text(line, left + 2, y);
        y += 5;
      });
      if (exp.skills.length) {
        const skillsLine = `Skills: ${exp.skills.join(', ')}`;
        const skillLines = doc.splitTextToSize(skillsLine, maxWidth - 2);
        skillLines.forEach((line) => {
          y = checkPageSpace(doc, y, 5);
          doc.text(line, left + 2, y);
          y += 5;
        });
      }
      y += 2;
    });
    y += sectionGap;

    // Education
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, lineGap);
    doc.text('Education', left, y);
    y += lineGap;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    resumeData.education.forEach((edu) => {
      y = checkPageSpace(doc, y, 5);
      doc.text(`${edu.degree} - ${edu.institution} (${edu.period})`, left, y);
      y += 5;
      const lines = doc.splitTextToSize(edu.description, maxWidth);
      lines.forEach((line) => {
        y = checkPageSpace(doc, y, 5);
        doc.text(line, left + 2, y);
        y += 5;
      });
      y += 2;
    });
    y += sectionGap;

    // Certifications
    /*
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, lineGap);
    doc.text('Certifications', left, y);
    y += lineGap;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    resumeData.certifications.forEach((cert) => {
      y = checkPageSpace(doc, y, 5);
      doc.text(`${cert.name} (${cert.issuer}, ${cert.date}${cert.validUntil ? ' - ' + cert.validUntil : ''})`, left, y);
      y += 5;
      y = checkPageSpace(doc, y, 5);
      doc.text(`Credential ID: ${cert.credentialId}`, left + 2, y);
      y += 5;
      if (cert.skills.length) {
        y = checkPageSpace(doc, y, 5);
        doc.text(`Skills: ${cert.skills.join(', ')}`, left + 2, y);
        y += 5;
      }
      y += 2;
    });
    y += sectionGap;
    */

    // Achievements
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, lineGap);
    doc.text('Achievements', left, y);
    y += lineGap;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    resumeData.achievements.forEach((ach) => {
      y = checkPageSpace(doc, y, 5);
      doc.text(`${ach.title} (${ach.date})`, left, y);
      y += 5;
      y = checkPageSpace(doc, y, 5);
      doc.text(ach.description, left + 2, y);
      y += 5;
      if (ach.metrics && ach.metrics.length) {
        y = checkPageSpace(doc, y, 5);
        doc.text(`Metrics: ${ach.metrics.join(', ')}`, left + 2, y);
        y += 5;
      }
      y += 2;
    });
    y += sectionGap;

    // Mentoring
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, lineGap);
    doc.text('Mentoring & Leadership', left, y);
    y += lineGap;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    resumeData.mentoring.forEach((m) => {
      y = checkPageSpace(doc, y, 5);
      doc.text(`${m.title} (${m.date})`, left, y);
      y += 5;
      y = checkPageSpace(doc, y, 5);
      doc.text(m.description, left + 2, y);
      y += 5;
      m.achievements.forEach((a) => {
        y = checkPageSpace(doc, y, 5);
        doc.text(`- ${a}`, left + 4, y);
        y += 5;
      });
      y += 2;
    });
    y += sectionGap;

    // Volunteering
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, lineGap);
    doc.text('Volunteering', left, y);
    y += lineGap;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    resumeData.volunteering.forEach((v) => {
      y = checkPageSpace(doc, y, 5);
      doc.text(`${v.role} - ${v.organization} (${v.period})`, left, y);
      y += 5;
      y = checkPageSpace(doc, y, 5);
      doc.text(v.description, left + 2, y);
      y += 5;
      v.impact.forEach((impact) => {
        y = checkPageSpace(doc, y, 5);
        doc.text(`- ${impact}`, left + 4, y);
        y += 5;
      });
      y += 2;
    });
    y += sectionGap;

    // Open Source
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, lineGap);
    doc.text('Open Source', left, y);
    y += lineGap;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    resumeData.openSource.forEach((repo) => {
      y = checkPageSpace(doc, y, 5);
      doc.text(`${repo.name} (${repo.languages.join(', ')})`, left, y);
      y += 5;
      y = checkPageSpace(doc, y, 5);
      doc.text(repo.description, left + 2, y);
      y += 5;
      y = checkPageSpace(doc, y, 7);
      doc.text(`Stars: ${repo.stars} | ${repo.url}`, left + 2, y);
      y += 7;
    });
    y += sectionGap;

    // Projects
    /*
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    y = checkPageSpace(doc, y, lineGap);
    doc.text('Projects', left, y);
    y += lineGap;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    resumeData.projects.forEach((proj) => {
      y = checkPageSpace(doc, y, 5);
      doc.text(`${proj.title} (${proj.technologies.join(', ')})`, left, y);
      y += 5;
      y = checkPageSpace(doc, y, 5);
      doc.text(proj.description, left + 2, y);
      y += 5;
      y = checkPageSpace(doc, y, 7);
      doc.text(`GitHub: ${proj.githubUrl} | Live: ${proj.liveUrl}`, left + 2, y);
      y += 7;
    });
    */

    doc.save('resume.pdf');
  };

  return (
    <Button
      onClick={handleExport}
      className="gap-2"
    >
      <Download className="h-4 w-4" />
      Download Resume
    </Button>
  );
}
