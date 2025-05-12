let prompt = require("prompt-sync")();
//50
let numero = parseInt(prompt("Digite um número:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
//51
for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
//52
let N = parseInt(prompt("Digite um número:"));
let soma = 0;
for (let i = 1; i <= N; i++) {
    soma += i;
}
console.log(`Soma de 1 até ${N}: ${soma}`);

//53
let soma = 0;
for (let i = 2; i <= 100; i += 2) {
    soma += i;
}
console.log(`Soma dos pares de 1 a 100: ${soma}`);
//54
let base = parseInt(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));
let resultado = 1;
for (let i = 0; i < expoente; i++) {
    resultado *= base;
}
console.log(`${base} elevado a ${expoente} é ${resultado}`);
//55
let num = parseInt(prompt("Digite um número:"));
let primo = true;

if (num <= 1) {
    primo = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }
}

console.log(primo ? `${num} é primo.` : `${num} não é primo.`);
//56
let N = parseInt(prompt("Digite um número:"));
for (let i = 2; i < N; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primo = false;
            break;
        }
    }
    if (primo) console.log(i);
}
//57
let N = parseInt(prompt("Digite quantos números primos deseja:"));
let count = 0;
let num = 2;

while (count < N) {
    let primo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        console.log(num);
        count++;
    }
    num++;
}
//58
let N = parseInt(prompt("Digite quantos números primos deseja:"));
let count = 0;
let num = 2;

while (count < N) {
    let primo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        console.log(num);
        count++;
    }
    num++;
}
//59
let A = parseInt(prompt("Digite o número A:"));
let B = parseInt(prompt("Digite o número B:"));

for (let i = A + 1; i < B; i++) {
    console.log(i);
}
//60
let soma = 0;
while (true) {
    let num = parseInt(prompt("Digite um número (negativo para sair):"));
    if (num < 0) break;
    soma += num;
}
console.log("Soma dos números positivos:", soma);
//61
let limite = parseInt(prompt("Digite o número limite para a sequência de Fibonacci:"));
let a = 0, b = 1;
while (a <= limite) {
    console.log(a);
    [a, b] = [b, a + b];
}
//62
let soma = 0, count = 0;
while (true) {
    let num = parseInt(prompt("Digite um número (0 para sair):"));
    if (num === 0) break;
    soma += num;
    count++;
}
let media = soma / count;
console.log("Média:", media);
//63
let numeros = [], num;
do {
    num = parseInt(prompt("Digite um número (0 para sair):"));
    if (num !== 0) numeros.push(num);
} while (num !== 0);

let max = Math.max(...numeros);
let min = Math.min(...numeros);
console.log(`Maior: ${max}, Menor: ${min}`);
//64
let frase = prompt("Digite uma frase:");
let vogais = frase.match(/[aeiouAEIOU]/g);
console.log("Quantidade de vogais:", vogais ? vogais.length : 0);
//65
let frase = prompt("Digite uma frase:");
let invertida = frase.split("").reverse().join("");
console.log("Frase invertida:", invertida);
//66
let texto = prompt("Digite uma sequência de caracteres:");
let limpo = texto.replace(/\s+/g, "").toLowerCase();
let invertido = limpo.split("").reverse().join("");
console.log(limpo === invertido ? "É um palíndromo." : "Não é um palíndromo.");
//67
let numero = parseInt(prompt("Digite um número:"));
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) console.log(i);
}
//68
let a = parseInt(prompt("Digite o primeiro número:"));
let b = parseInt(prompt("Digite o segundo número:"));

function mmc(x, y) {
    let max = x * y;
    for (let i = 1; i <= max; i++) {
        if (i % x === 0 && i % y === 0) return i;
    }
}
console.log("MMC:", mmc(a, b));

//69
let a = parseInt(prompt("Digite o primeiro número:"));
let b = parseInt(prompt("Digite o segundo número:"));

function mdc(x, y) {
    while (y !== 0) {
        [x, y] = [y, x % y];
    }
    return x;
}
console.log("MDC:", mdc(a, b));

//70
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += cpf[i] * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != cpf[9]) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += cpf[i] * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != cpf[10]) return false;

    return true;
}

let cpf = prompt("Digite seu CPF:");
console.log(validarCPF(cpf) ? "CPF válido" : "CPF inválido");
//71
let vetor = [1, 2, 3, 4, 5]; // exemplo fixo
let soma = vetor.reduce((acc, val) => acc + val, 0);
console.log("Soma dos elementos:", soma);
//72
let vetor = [1, 9, 3, 7, 2];
let maior = Math.max(...vetor);
console.log("Maior elemento:", maior);
//73
let vetor = [1, 2, 3, 4, 5];
let media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
console.log("Média:", media);
//74
let v1 = [1, 2, 3];
let v2 = [4, 5, 6];
let soma = v1.map((val, i) => val + v2[i]);
console.log("Vetor soma:", soma);
//75
let vetor = [1, 2, 3, 4, 5];
let crescente = vetor.every((val, i, arr) => i === 0 || arr[i] >= arr[i - 1]);
console.log(crescente ? "Em ordem crescente" : "Não está em ordem crescente");
//76
let vetor = [1, 2, 3, 4];
console.log("Ordem inversa:", vetor.slice().reverse());
//77
let vetor = [4, 2, 9, 1, 9];
let unico = [...new Set(vetor)].sort((a, b) => b - a);
console.log("Segundo maior:", unico[1]);
//78
let vetor = [1, 2, 3, 2, 4, 2];
let num = parseInt(prompt("Digite o número a contar:"));
let count = vetor.filter(v => v === num).length;
console.log(`${num} aparece ${count} vezes.`);
//79
let v1 = [1, 2, 3];
let v2 = [4, 5, 6];
let produto = v1.map((val, i) => val * v2[i]);
console.log("Vetor multiplicado:", produto);
//80
let vetor = [2, 4, 6, 8];
let todosPares = vetor.every(v => v % 2 === 0);
console.log(todosPares ? "Todos são pares" : "Há elementos ímpares");
//81
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let soma = 0;
for (let i = 0; i < 3; i++) {
    soma += matriz[i][i];
}
console.log("Soma da diagonal principal:", soma);
//82
let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
    [3, 4, 5, 6]
];
let transposta = matriz[0].map((_, col) => matriz.map(row => row[col]));
console.log("Matriz transposta:", transposta);
//83
let m1 = [
    [1, 2],
    [3, 4]
];
let m2 = [
    [5, 6],
    [7, 8]
];
let soma = m1.map((row, i) => row.map((val, j) => val + m2[i][j]));
console.log("Soma das matrizes:", soma);
//84
let matriz = Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
);
let maior = -Infinity;
let pos = [0, 0];
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
            pos = [i, j];
        }
    }
}
console.log("Maior valor:", maior, "Posição:", pos);
//85
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let soma = 0, count = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if ((i + j) % 2 === 0) {
            soma += matriz[i][j];
            count++;
        }
    }
}
console.log("Média:", soma / count);
//86
let matriz = Array.from({ length: 4 }, () =>
    Array.from({ length: 4 }, () => Math.floor(Math.random() * 10))
);
for (let i = 0; i < 4; i++) {
    let somaLinha = matriz[i].reduce((a, b) => a + b, 0);
    let somaColuna = matriz.reduce((a, row) => a + row[i], 0);
    console.log(`Linha ${i}: ${somaLinha}, Coluna ${i}: ${somaColuna}`);
}
//87
let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let det = m[0][0]*(m[1][1]*m[2][2] - m[1][2]*m[2][1])
        - m[0][1]*(m[1][0]*m[2][2] - m[1][2]*m[2][0])
        + m[0][2]*(m[1][0]*m[2][1] - m[1][1]*m[2][0]);
console.log("Determinante:", det);
//88
function multiplicarMatrizes(a, b) {
    let linhasA = a.length, colunasA = a[0].length;
    let linhasB = b.length, colunasB = b[0].length;

    if (colunasA !== linhasB) {
        console.log("Multiplicação impossível.");
        return;
    }

    let resultado = Array.from({ length: linhasA }, () => Array(colunasB).fill(0));
    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return resultado;
}

let a = [[1, 2], [3, 4]];
let b = [[2, 0], [1, 2]];
console.log("Resultado:", multiplicarMatrizes(a, b));
//89
let matriz = [
    [1, 0, 0, 0],
    [0, 5, 0, 0],
    [0, 0, 9, 0],
    [0, 0, 0, 3]
];
let diagonal = true;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (i !== j && matriz[i][j] !== 0) {
            diagonal = false;
            break;
        }
    }
}
console.log(diagonal ? "É diagonal" : "Não é diagonal");
//90
let campo = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0]
];

let linhas = campo.length;
let colunas = campo[0].length;

function contarMinas(i, j) {
    let minas = 0;
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            let ni = i + x, nj = j + y;
            if (ni >= 0 && ni < linhas && nj >= 0 && nj < colunas && (x !== 0 || y !== 0)) {
                minas += campo[ni][nj];
            }
        }
    }
    return minas;
}

let resultado = campo.map((linha, i) =>
    linha.map((_, j) => contarMinas(i, j))
);
console.log("Matriz com contagem de minas vizinhas:");
console.table(resultado);
//91
function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
}
console.log(fatorial(5)); // 120
//92
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let limite = 10;
for (let i = 0; i <= limite; i++) {
    console.log(fibonacci(i));
}
//93
function ehPrimo(n, divisor = 2) {
    if (n <= 2) return n === 2;
    if (n % divisor === 0) return false;
    if (divisor * divisor > n) return true;
    return ehPrimo(n, divisor + 1);
}
console.log(ehPrimo(17));
//94
function somaDigitos(n) {
    if (n < 10) return n;
    return (n % 10) + somaDigitos(Math.floor(n / 10));
}
console.log(somaDigitos(123));
//95
function potencia(base, expoente) {
    if (expoente === 0) return 1;
    return base * potencia(base, expoente - 1);
}
console.log(potencia(2, 3));
//96
function mdc(a, b) {
    if (b === 0) return a;
    return mdc(b, a % b);
}
console.log(mdc(24, 36));
//97
function inverterString(str) {
    if (str.length <= 1) return str;
    return inverterString(str.slice(1)) + str[0];
}
console.log(inverterString("hello"));
//98
function menorVetor(vetor, index = 0, menor = Infinity) {
    if (index >= vetor.length) return menor;
    return menorVetor(vetor, index + 1, Math.min(menor, vetor[index]));
}
console.log(menorVetor([8, 3, 9, 1, 4]));
//99
function ehPalindromo(palavra) {
    if (palavra.length <= 1) return true;
    if (palavra[0] !== palavra[palavra.length - 1]) return false;
    return ehPalindromo(palavra.slice(1, -1));
}
console.log(ehPalindromo("radar"));
//100
function somaVetor(vetor, index = 0) {
    if (index >= vetor.length) return 0;
    return vetor[index] + somaVetor(vetor, index + 1);
}
console.log(somaVetor([1, 2, 3, 4]));
