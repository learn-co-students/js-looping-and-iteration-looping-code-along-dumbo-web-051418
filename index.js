// Code your solutions in this file
function printBadges(arr){
  let counter = 1;
  arr.forEach(function(element){
    console.log("Welcome "+element+"! You are employee #"+(counter++)+".");
  });
  return arr;
}

function tailsNeverFails(){
  let counter = 0;
  while(Math.random() >= 0.5){
    counter++;
  }
  return "You got "+counter+" tails in a row!";
}
