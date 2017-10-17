/* Temos a seguinte sequência de números:
let numeros = [3,2,11,20,8,7];
Sua tarefa: criar uma nova lista com a mesma quantidade de números,
mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar.

ATENÇÃO: a lista numeros não pode ser alterada! Você pode resolver do jeito que desejar,
o mais importante é o resultado.*/


// Minha solução
let numeros = [3,2,11,20,8,7];
let numeros2 = [...numeros.map((item) => item % 2 != 0 ? item*2 : item )];
console.log(numeros2);

// solução do curso
let numeros = [3,2,11,20,8,7];
let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item);
console.log(novosNumeros);