// Faça um programa que imprima na tela apenas os números ímpares entre 1 e 150.

function numerosImpares() {
    for (var i = 0; i < 151; i++) {
        if ((i % 2) == 1) {
            console.log( + i);
        }
    }
}
numerosImpares();