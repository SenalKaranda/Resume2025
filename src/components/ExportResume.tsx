import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function ExportResume() {
  const handleExport = async () => {
    try {
      // Get the main content container
      const content = document.querySelector('main');
      if (!content) return;

      // Create canvas from content
      const canvas = await html2canvas(content, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        windowWidth: 1200, // Fixed width for consistency
        onclone: (clonedDoc) => {
          // Remove any fixed/sticky positioning that might interfere
          const elements = clonedDoc.querySelectorAll('*');
          elements.forEach((el) => {
            const style = window.getComputedStyle(el);
            if (style.position === 'fixed' || style.position === 'sticky') {
              (el as HTMLElement).style.position = 'relative';
            }
          });
        }
      } as any);

      // Initialize PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = 297; // A4 height in mm
      let heightLeft = imgHeight;
      let position = 0;

      // Add image to first page
      pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add new pages if content overflows
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save PDF
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
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
