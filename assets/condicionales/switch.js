/*
const type_payment ='cash'

switch (type_payment){
    case 'cash':
        document.writeln("tipo de pago con efectivo")
        break;
    case 'cc':
        document.writeln('tipo de pago en efectivo')
        break;
    default;
        document.writeln('sin tipo de pago')
        break;
    }
    */
   const edad = prompt('dame tu edad (0 - 18 - 65')
   //edad = parseInt(edad)
   switch(edad){
    case '0':
        document.writeln('acabas de nacer')
        break;
    case '18':
        document.writeln('ya eres mayor de edad')
        break;
    case '65':
        document.writeln('edad de jubilacion')
        break;
    default:
        document.writeln('edad no valida')       
   }