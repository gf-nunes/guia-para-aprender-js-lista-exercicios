/* Faça um programa que retorne true ou false conforme a entra Y,y,yes,S,sim */

// let valor = "y"

// if (valor == "Y" || valor == "y" || valor =="yes" || valor =="S" || valor =="sim"){
//     console.log(true)
// }else{
//     console.log(false)
// }

let valor = "y"

let vogal = ["y", "yes" ,"s" ,"sim"]
if (vogal.includes(valor.toLowerCase())){
    console.log(true)
}else{
    console.log(false)
}