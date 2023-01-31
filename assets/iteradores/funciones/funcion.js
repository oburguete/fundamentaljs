//funcion saludar
/*
function saludar_nombre(nombre, paterno){
    console.log(arguments)
    document.writeln('</br>')
    document.writeln('hola' + nombre + ' como estas?')
}
*/
function valida_hora(hora){
     if(hora <= 5){
        document.writeln('buenas madrugadas')
     }else if (hora > 5 && hora < 12){
            document.writeln('buenos dias')

        }else {
            document.writeln('buenas noches')
        }
     }

