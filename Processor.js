class Processor {
    static Process(data) {
        var divisao = data.split("\n");
        var rows = [];

        divisao.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;