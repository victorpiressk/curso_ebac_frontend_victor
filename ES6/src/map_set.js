// map

let meuMap = new Map();
meuMap.set("nome", "victor");
meuMap.set("stack", "html, css, js");

console.log(meuMap)

const nome = meuMap.get("nome");

console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has("nome"))

//meuMap.clear

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

// [nome => victor]
// [stack => html, css, js]

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap)

// set

const cpfs = new Set();

cpfs.add('3434234234223')
cpfs.add('2312312132323')
cpfs.add('4423132442323')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
});

const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']

const arrayComoSet = new Set([...array])

const arraySemItensDuplaicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplaicados)