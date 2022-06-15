var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PdfWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
    var dados = await leitor.Read("./ListPokemon.csv");
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);

    PDFWriter.WriterPDF(Date.now() + ".pdf", html);

}

main();