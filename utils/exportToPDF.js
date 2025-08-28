import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportToPDF(contentRef, filenamePrefix) {
    const element = contentRef.current;
    if (!element) return;

    const buttonContainer = element.querySelector("[data-button-container]");

    // Aktuelles Datum
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const dateString = `${yyyy}-${mm}-${dd}`;

    try {
        // Buttons temporär ausblenden
        if (buttonContainer) buttonContainer.style.display = "none";

        const pages = Array.from(element.children).filter(
            (child) => child !== buttonContainer && !child.hasAttribute("data-button-container")
        );

        if (pages.length === 0) throw new Error("Keine Seiten gefunden");

        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        for (let i = 0; i < pages.length; i++) {
            const canvas = await html2canvas(pages[i], {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: "#ffffff",
                width: pages[i].offsetWidth,
                height: pages[i].offsetHeight,
            });

            const imgData = canvas.toDataURL("image/png");
            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * pdfWidth) / canvas.width;

            if (i > 0) pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, Math.min(imgHeight, pdfHeight));
        }

        pdf.save(`${dateString}_${filenamePrefix}.pdf`);
    } catch (error) {
        console.error("Fehler beim PDF-Export:", error);
        alert("Es gab ein Problem beim Erstellen des PDFs. Versuchen Sie es erneut.");
    } finally {
        if (buttonContainer) buttonContainer.style.display = "flex";
    }
}
