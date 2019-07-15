// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];


function writeCards(name, event) {
    let array = []
    for (let i = 0; i < names.length; i++){
    array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return array;
}

function countdown(num){
    while (num > 0) {
        console.log(num);
        num -= 1
      }
      console.log(num)
}
