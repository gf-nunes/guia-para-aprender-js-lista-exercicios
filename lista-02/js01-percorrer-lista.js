/**
 * Faça um programa que percorra uma lista e gere um outra lista com o
 * mesmo numero de elementos no formato: 'impar' ou 'par' 
 * 
 * ENTRADA          SAÍDA
 * [1,3,5,7,8]      ['impar', 'impar', 'impar', 'impar', 'par']
 */

// Entrada
let numero = [2, 8, 4, 6, 3, 7]
let listaNumeros = []
for (valor of numero){
    resto = valor % 2
    if (resto == 0){
        listaNumeros.push('par')
    }else{
        listaNumeros.push('ímpar')
    }
}
console.log(listaNumeros)