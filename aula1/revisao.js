// funcoes
function soma(a, b) {
 1   return a + b;
}

const soma = (a, b) => {
    return a + b;
}


sincrona - retorna valor, objeto
assincrona - promise valor, objeto


var - global
let - escopo limitado
const - constantes:: não mudam

// let result = 0;
const soma = async (a, b) => {
    // throw Error("Erro ao realizar a Soma");
    return a + b;
}

const x = 10;
const y = 20;



try{
    const result = await soma(x, y);
    const z = result * 3;
    console.log(z);
} catch(error) {
    console.log(`Erro: ${error.message}`);
}



soma(x, y).then((result) => {
    const z = result * 3;
    console.log(z);
}).catch((error) => {
    console.log(`Erro: ${error.message}`);
});


const operador1 = {
    id: 1,
    nome: "Joao",
    idade: 25,
    genero: "M",
    salario: 3000,
};
const operador2 = {
    id: 2,
    nome: "Maria",
    idade: 25,
    genero: "F",
    salario: 5000,
};

let operadores = [operador1, operador2];


const imprimeSalario = (operador) => {
    const { nome, salario } = operador;
    console.log(`Salario de ${nome} é ${salario}`);
}


imprimeSalario(operador2);
operadores.forEach((operador) => {
    imprimeSalario(operador);
})

operadores.forEach((operador) => imprimeSalario(operador));

const maleOperators = operadores.filter(({ genero }) => {
    return genero === "M";
})

console.log(`Homens: ${JSON.stringify(maleOperators)}`);


const operators = operadores.filter(({ id }) => {
    return id === 1;
})[0]

console.log(`Operador 1: ${JSON.stringify(operators)}`);


const operator = operadores.find(({ id }) => {
    return id === 1;
})

const operator = operadores.find(({ id }) => id === 1);

console.log(`Operador 1: ${JSON.stringify(operator)}`);

const operadoresReajuste = operadores.map((operator) => {
    const { salario } = operator;
    return {
        ...operator,
        salario: salario * 1.05,
    };
});

console.log(`Reajustes: ${JSON.stringify(operadoresReajuste)}`);

// reduce

const totalSalario = operadores
    .map(({ salario }) => salario)
    .reduce((totalSalario, salario) => {
        return totalSalario + salario;
    }, 0);

console.log(`>> Salario ${totalSalario}`);


const operador3 = {
    id: 2,
    nome: "Pedro",
    idade: 25,
    genero: "M",
    salario: 2300,
};


const operador4 = {
    id: 2,
    nome: "Aline",
    idade: 25,
    genero: "F",
    salario: 3600,
};

operadores = [operador1, operador2, operador3, operador4];

const menorSalario = operadores
    .reduce((operadorMenorSalario, operador) => {
        if (operador.salario < operadorMenorSalario.salario)
            return operador;
        else
            return operadorMenorSalario;
    }, operadores[0]);

console.log(`>> Menor salario ${JSON.stringify(menorSalario)}`);