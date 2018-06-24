// Code your solutions in this file
function printBadges(arrayOfEmployees) {
  for(let i = 0; i < arrayOfEmployees.length; i++) {
    console.log(`Welcome ${arrayOfEmployees[i]}! You are employee #${i+1}.`)
  };
  return arrayOfEmployees;
};

function tailsNeverFails() {
  function coinToss() {
    return Math.random() >= 0.5;
  };
  let consecutiveTails = 0;
  while(coinToss()) {
    consecutiveTails++
  }
  return `You got ${consecutiveTails} tails in a row!`
};
