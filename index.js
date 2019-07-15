// Code your solutions in this file
function writeCards(array, surprise){
    let newCards = []
    for (let i = 0; i < array.length; i++) {
        newCards.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
return newCards
}

function countdown(i){
    while (i > 0){
        console.log(i)
        i -= 1
    }
    console.log(i)
}
