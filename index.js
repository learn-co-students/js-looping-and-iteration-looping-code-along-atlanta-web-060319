// Code your solutions in this file
const namesArray = ['Lisa', 'Kaitlin', 'Jan'];
const event = "surprise"

function writeCards(namesArrray, event) {
   let phrase = [];
  for (let i = 0; i < namesArray.length; i++) {
    phrase.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
  }
 
  return phrase;
}

 function countdown(x) {
    while (x > 0) {
    console.log(x)
   x -= 1
     }
     console.log(x)

  }
