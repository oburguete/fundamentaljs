let invoice = {
    number: '1',
    client: 'livinglab',
    currency: 'usd',
    coords: {
        lat: 42.0,
        lon: -100.1
    } ,
    services: ['laptops', 'coffe', 'gas', 'internet'],
    location:{cp: '31100', address:'av.americas'},
    subtotal: 500,
    iva: 80
}

console.log(invoice);
// podemos acceder a metodos diferentes maneras
console.log('cliente:', invoice.client),
console.log('cliente', invoice['client']);
console.log('latitud:', invoice.coords.lat);

//calcula el ultimo servicio que le ofrecemosa la empresa
console.log('ultimo servicio:', invoice.services[invoice.services.length-1]);

document.writeln(invoice.client)
document.writeln('<br>')
document.writeln(invoice['client'])
document.writeln('<br>')
document.writeln(invoice.coords.lat)
document.writeln('<br>')
document.writeln(invoice.services[1])
Document.writeln('<br>')
document.writeln(invoice.services[invoice.services.length - 1])