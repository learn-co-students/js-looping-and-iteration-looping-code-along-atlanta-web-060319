// Code your solutions in this file
let grtngsArr = [];
function writeCards(arr, event) {
  for (let i = 0; i < arr.length; i++) {
    grtngsArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return grtngsArr;
}

function countdown(num){
  while (num >= 0 ) {
  console.log(num--);
}}