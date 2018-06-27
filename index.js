// Code your solutions in this file
function printBadges(array){
  let counter = 0
  for(let i = 0; i < array.length; i++){
    counter++;
    console.log(`Welcome ${array[i]}! You are employee #${counter}.`);
  }
  return array
}


function tailsNeverFails(){
  let i = 0;
  while (Math.random() >= 0.5){
    i++
  }
  return `You got ${i} tails in a row!`
}
