/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 * 
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 * 
 * SAIDA
 * 4 3
 */

// Entrada
var lista = [1,2,3,4,5,6,7]

// processamento

//saida
let pares = 0

for (elemento of lista){
    if(elemento %2 == 0){
        pares = pares+1
    }
} 
impares =  - pares

console.log(`${impares} ${pares}`)