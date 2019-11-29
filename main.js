// REST
//Pegar o resto das propriedades

//1

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a, b, c);

//2

function soma(a, b, ...params) {
    return params;
}

console.log(soma(1, 3, 4));

// SPREAD
//Propagar as informaçoes pra outra estrutura de dados...


//1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

//2
const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const usuario2 = {
    ...usuario1, nome: 'Gabriel'
}

console.log(usuario2);

