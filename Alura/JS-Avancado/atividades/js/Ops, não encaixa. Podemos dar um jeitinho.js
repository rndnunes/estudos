/*
    Temos a seguinte função:
function somaDoisNumeros(numero1, numero2) {
    return numero1 + numero2;                                            
}
É uma função simples, que retorna o somatório de dois números. Um exemplo:

console.log(somaDoisNumeros(10,30)); // exibe 40!
Muitas vezes não recebemos os dados em uma estrutura compatível com nossas funções. Vejamos um exemplo:

let numeros = [10, 30];
console.log(somaDoisNumeros(numeros[0], numeros[1]));
ES2015 trouxe uma novidade, o spread operator. Altere a passagem de parâmetros para somaDoisNumeros e faça uso do spread operator para receber um array, com isso, evitando a necessidade de usar numeros[0] e numeros[1].
*/

function somaDoisNumeros(numero1, numero2) {

    return numero1 + numero2;                                            

}

console.log(somaDoisNumeros(...[10, 30]));