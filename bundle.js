/* Exercicio 1 

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
*/

/* Exercicio 2 
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//Map
var idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

//Filter
var usuariosFilter = usuarios.filter(usuario => usuario.idade >= 18 && usuario.empresa === 'Rocketseat');
console.log(usuariosFilter);

//Find
var usuarioFind = usuarios.find(usuario => usuario.empresa === 'Google')
console.log(usuarioFind);

//Map e Filter
var usuariosFilter1 = usuarios.map(usuario => ({...usuario, idade: usuario.idade*2})).filter(usuario => usuario.idade <= 50);
console.log(usuariosFilter1);
*/

/* Exercicio 3 

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade;
console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = () => new Promise((resolve, reject) => resolve())
*/

/* Exercicio 4

const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { cidade }, endereco: { estado } } = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2

function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
 */

/* Exercicio 5 

//5.1 REST
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//5.2 Spread
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};
console.log(usuario2);
console.log(usuario3);
*/

/* Exercicio 6 
const usuario = 'Diego';
const idade = 23;

console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log(`O usuário ${usuario} possui ${idade} anos`);
*/

/* Exercicio 7 
const nome = 'Diego';
const idade = 23;

const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul',
};

console.log(usuario)
*/
"use strict";
