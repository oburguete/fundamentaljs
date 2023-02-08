/*
let serie_1 =document.getElementById('serie_1')
serie_1.innerHTML = 'esto es una caja serie desde js'
serie_1.style.background = 'red'

let serie_2
serie_2 = document.getElementsByClassName('card')
*/

let all_cards = document.querySelectorAll('.card')
console.warm(all_cards)
console.warn(all_cards.length)

let series = {
    serie_1 : { name: 'serie 1', descriction: 'descripcion 1'},
    serie_2: {name: ' serie 2', description: 'descripcion 2'}
}

let all_cards = document.querySelectorAll('.card')

for( let i0; i < all_cards; i++){
    console.log()
}

