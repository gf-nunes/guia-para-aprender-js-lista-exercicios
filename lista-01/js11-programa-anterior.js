/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado 
 * 
 * ENTRADA          SAÍDA
 * bcbduf           abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 * 
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada

var texto = 'bcbduf'
// implemente aqui uma lógica para descriptografar o texto
var textoDecripto = 'abacate'
let cript = ''
let key = 1
for (const  letra  of texto) {
    cript += String.fromCharCode(letra.charCodeAt(0) - key)
}
console.log(cript)