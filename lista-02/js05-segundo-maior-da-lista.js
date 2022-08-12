
/**
 * Faça um programa que mostre o segundo maior número da lista 
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      40
 * 
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */

// Entrada
var lista = [40,42,1,0,-10]
var segundoMaior = lista[0]
maior = lista[0]

for (numero of lista){
    if (numero > maior){
        maior = numero
    }
}

for (numero of lista){
    if (numero > segundoMaior && numero < maior){
        segundoMaior = numero
    }
}
console.log(segundoMaior)