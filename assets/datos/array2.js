/*let currencies = ['MXN', 'USD', 'EUR', 'CAD']
console.log(currencies);

//conocer el tamano de un arreglo
let size =currencies.length;

//si quiero acceder a la ultima posicion del arreglo
let new_lenght = currencies.push('JPY')
console.log({new_lenght, currencies})

//agregar un njuevo valor al inicio del arreglo
new_lenght = currencies.unshift('GBP')
console.log({new_lenght, currencies})
*/
let number =[]
let number_1 = prompt('teclea un numero 1')
number.push(number_1);
let number_2 = prompt('teclea otro numero 2')
number.push(number_2);
let number_3 = prompt('teclea el numero 3')
number.push(number_3);

let suma = Number(number[0]) + parseInt(number[1]) + parseFloat(number[2])
document.write(number)
