/*
let score = 7;
if(score >8){
document.writeln('alumno aprobado con: ' + score)
} else
{
    document.writeln('alumno reprobado: ' + score)
}

int num = 100
if( num == '100'){
    document.writeln('son iguales')
}

let tope_fondo = prompt('teclea el dinero maximo');
let retiro = prompt('cuanto deseas retirar');
//let number(tope_fondo)
//let number(retiro)
if(tope_fondo > retiro){
    document.writeln('toma tu dinero' +retiro);
} else{
    document.write('no tienes fondos suficientes' + tope_fondo);
}
*/
/*
let tope_fondo = prompt('teclea el dinero maximo');
let retiro = prompt('cuanto deseas retirar');

if(tope_fondo > retiro){
    document.writeln('toma tu dinero' +retiro);
} else{
    document.write('no tienes fondos suficientes' + tope_fondo);
}
*/
// distinto al if else
/*
let tope_fondo = 100;
 let  retiro = prompt('cuanto a rerirar');
let pancho = (tope_fondo > retiro) ? 'si puede retirar': 'no puede retirar' 
alert(pancho)


const dinero = 10000
let retirar = prompt('cuanto deseas retirar?', 0)
if(dinero <= retirar){

}else if (retirar > 2000 && retirar < 5000){
 document.writeln('se puede realizar el retiro')
}else if (retirar >= 5000){
    document.writeln('no se permite retirar mas de 5k diarios')
}
*/ //sistema de calificaciones
let solicitar=prompt('dame tu calificacion del (0 -10)')
 if (solicitar >= 0 && solicitar < 6){
    alert('reprobado')
 }else if(solicitar >= 6 && solicitar < 8){
    alert('aprobado con condicional')
 } else if( solicitar >= 8 && solicitar < 10){
    alert('aprobado')
  } else if (solicitar > 10){
        alert('calificacion no valida')
    }
 else {
    alert('calificacion no valida')
 }
 
     