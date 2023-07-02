// Code your solutions in this file
//example -- const people = ['John', 'Otis', 'Kamau']

function writeCards(array1,eventName){
    const cards = []
    for(let x = 0; x < array1.length; x++){
        let messages = `Thank you, ${array1[x]}, for the wonderful ${eventName} gift!`
        cards.push(messages)
    }
    return cards
}

//console.log(writeCards(people, 'Wedding'))

function countDown(y){
    let x = y
    while( x >= 0){
        console.log(x--)
    }
    return x
}