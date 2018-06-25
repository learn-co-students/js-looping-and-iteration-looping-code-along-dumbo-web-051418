// Code your solutions in this file
function printBadges(anArray) {

  for (let i = 0;i < anArray.length; i++) {
    console.log(`Welcome ${anArray[i]}! You are employee #${i+1}.`);
  }
  return anArray;
}
//
function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  tails = 0;

  while (maybeTrue()) {
    tails++;
 }
  return `You got ${tails} tails in a row!`;
}
