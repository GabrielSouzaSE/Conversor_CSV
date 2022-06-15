var Reader = require("./Reader");
var Processor = require("./Processor");

var leitor = new Reader();

async function main() {
    var dados = await leitor.Read("./ListPokemon.csv");
    var dadosProcessados = Processor.Process(dados);
}

main();