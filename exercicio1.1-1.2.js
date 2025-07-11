// 1. Create a list of numbers from 1 to 1000
const numeros = [];
for (let i = 1; i <= 1000; i++) {
    numeros.push(i);
}

// 2. Binary search for numbers with step counter
function pesquisaBinariaComPassos(lista, numeroAlvo) {
    let baixo = 0;
    let alto = lista.length - 1;
    let passos = 0;

    while (baixo <= alto) {
        passos++;
        let meio = Math.floor((baixo + alto) / 2);
        let chute = lista[meio];

        if (chute === numeroAlvo) {
            console.log(`Encontrado em ${passos} passos!`);
            return meio;
        }

        if (chute > numeroAlvo) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
    }

    console.log(`Não encontrado após ${passos} passos.`);
    return -1;
}

// 3. Test the function
const numeroParaBuscar = 500;
const posicao = pesquisaBinariaComPassos(numeros, numeroParaBuscar);

console.log("Posição encontrada:", posicao + 1); // +1 para ajustar ao índice humano
