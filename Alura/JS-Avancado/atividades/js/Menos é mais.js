/*Temos as seguintes classes:
class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}
Agora, vamos criar uma lista de avaliações. Cada item da lista é uma instância de Prova:

var avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];
Dessa lista, precisamos dos alunos que foram aprovados, ou seja, que possuam nota maior ou igual a 7. Contudo, não queremos uma lista de provas no final, apenas uma lista com os nomes:

var aprovados = avaliacoes
    .filter(function(prova) { return prova.nota >= 7; })
    .map(function(prova) { return prova.aluno.nome;});

console.log(aprovados);
Altere o código acima para fazer uso de arrow functions. Tente ser o mais sucinto possível, em outras palavras, tente escrever a menor quantidade de código.*/

class Aluno {
    
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

var avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];

var aprovados = avaliacoes
.filter(prova => prova.nota >= 7)
.map(prova => prova.aluno.nome);

console.log(aprovados);