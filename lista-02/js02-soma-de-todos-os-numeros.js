/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]       34
 * [1,1,40]             40
 */

// Entrada
let entrada = [1,3,5,7,8,10]

let soma = 0

// percorrer a lista e fazer a somatória dos elementos
for (var i = 0; i < entrada.length; i++){
    soma += entrada[i];
}
console.log(soma);