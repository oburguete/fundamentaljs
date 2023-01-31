// manejo de numeros
/*
let number_1 = 20
let number_2 = 30.5
let number_3 = 0.45
let number_4 = 30
let pi = Math.pi
pi = Math.round(pi)
console.log(pi)
//raiz cuadrada
let raiz = Math.sqrt(144)
console.log(raiz)
// valor absoluto
resultado = Math.abs(500)
console.log(resultado)

//operacion basica
let resultado;
//suma
resultado = number_1 + number_2
//resta
resultado = number_1 - number_2
//multi
resultado = number_1 * number_2


for (let i = 0; i < 3; i++) {
    let i = prompt('costo de prenda');
    lrt desc = (0.20)(1/100);
    document.write('el sub total es '+i )
}
*/
let prenda_1 = prompt('valor de la prenda 1')
let prenda_2 = prompt('valor de la prenda 2')
let prenda_3 = prompt('valor prenda 3')
let subtotal = Number(prenda_1) + Number(prenda_2) + Number(prenda_3)
document.write('<h1>el subtotal de la prenda es:' + subtotal)
document.write('</br>')

let descuento  = subtotal * 0.30
document.write('el descuento de la prenda es : ' +descuento)
document.write('</br>')

let iva =(subtotal - descuento)* 0.16
