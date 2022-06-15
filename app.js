var Reader = require("./Reader");
var Processor = require("./Processor");

var leitor = new Reader();

async function main() {
    var dados = await leitor.Read("./ListPokemon.csv");
    //console.log(dados);

    Processor.Process(dados);
}

main();