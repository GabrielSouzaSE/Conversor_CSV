var pdf = require("html-pdf");

class PDFWriter {
    static WriterPDF(filename, html) {
        pdf.create(html, {}).toFile(filename,(erro) => {});
    }
}

module.exports = PDFWriter;