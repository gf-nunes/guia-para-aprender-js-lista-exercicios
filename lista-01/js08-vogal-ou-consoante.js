/* Faça um Programa que verifique se uma letra digitada é vogal ou consoante. */

let valor = 5
valor = valor.toString()

let vogal = ["a", "e", "i", "o", "u"]
if (valor.toLowerCase() == valor.toUpperCase() || valor.length > 1){
    console.log("Não é uma letra")
}
else if (vogal.includes(valor.toLowerCase())){
    console.log("Vogal")
}else{
    console.log("Consoante")
}