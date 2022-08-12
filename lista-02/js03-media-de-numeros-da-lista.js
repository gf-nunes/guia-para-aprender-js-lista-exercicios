var entrada = [1,1,40]
var soma = 0
let media = 0

for (numero of entrada){ //Para cada número da entrada ppegue o número
    soma += numero
}
console.log(soma)

media = soma / entrada.length

console.log(media.toFixed(1))

