var Reader = require("./Reader");
var Writer =require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
const HtmlParser = require("./HtmlParser");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
    var dados = await leitor.Read("./ListPokemon2.csv");
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);

}

main();