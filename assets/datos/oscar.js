/*function buscarElementoQuimico(simbolo){
    var elementosQuimico = {
        'al': 'alumnio',
        's' : 'azufre',
        'cl': 'cloro',
        'he': 'helio'
    };
      
    return elementosQuimico[simbolo];
}
console.log(buscarElementoQuimico('al'))
console.log(buscarElementoQuimico('he')) */

/*
un programa que se compran 3 prendas y se le realiza un descuento del 30% y despues el iva del 16% y
sumar y dar el total
let prenda_1 = prompt('valor de la prenda 1' ,'introduce ');
let prenda_2 = prompt('valor de la prenda 2');
let prenda_3 = prompt('valor de la prenda 3');

let subtotal = Number(prenda_1) + parseInt(prenda_2) + parseInt(prenda_3);
document.write('<h1>el subtotal de la prenda es:<h1>'+subtotal);
document.write('</br>');

let descuento = subtotal * 0.30
document.write('el descuento de la prenda es :' + Math.round(descuento))
document.write('</br>')
let iva = (subtotal - descuento) * 0.16
document.write('IVA: ' + iva)
document.write('</br>')
let total =subtotal - descuento + iva
document.write('TOTAL :' + Math.ceil(total))
*/
/*
agregar valores a una matriz
let number = []
let num_1 =prompt('introduce el numero 1');
number.push(num_1);

let num_2 = prompt('introduce el numero 2');
number.push(num_2);

let nuum_3 = prompt('introduce el numero 3');
number.push(nuum_3);

let suma = Number(number[0]) + Number(number[1]) + Number(number[2]);
document.write('EL VALOR DE LA MTRIZ ES; '+number.length)


let nombre ='kuka'
edad = 13

const perro ={
    nombre: nombre, 
    edad: edad,
    ladrar:function (){
        console.log('guaaa guaaa')
    }
}

console.log(perro)
//perro.ladrar()

function sumar(a,b,...c){
    let resultado = a + b
    c.forEach(function(n){
        resultado +=n
    })
    return resultado
}
document.writeln(sumar(3,6,5,9,9))
*/
const arr_1 =[1,2,3,4,5]
      arr_2 = [6,7,8,9,10]
      document.writeln(arr_1 , arr_2)
      const arr_3 =[...arr_1 , ...arr_2]
      console.log(arr_3)