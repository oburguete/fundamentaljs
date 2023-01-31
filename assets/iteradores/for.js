/*
for(let i=0; i<=10; i++){
    document.writeln(i)
    document.writeln('<br>')
}

const enterprises =['TESLA', 'AMAZON', 'MICROSOFT', 'META']
console.warn('FOR TRADICIONAL')
for( let i=0; i < enterprises.length; i++){
    console.log(enterprises[i])
}

console.warn('FOR IN')
for(let i in enterprises){
    console.log(enterprises[i])
}

console.warn('FOR OF')
    for(let enterprise of enterprises){
        console.log(enterprise)
    }
*/
const encabezado = ['H1','H2','H3','H4','H5','H6']
for(let i=1; i<=6;i++){
    let nombre = encabezado[i-1]
    document.writeln('<h' +i+'>'+ nombre + '<h' + i +'>')
}