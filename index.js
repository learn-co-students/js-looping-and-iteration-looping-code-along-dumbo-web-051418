function printBadges (names) {
  for (let n = 0; n < names.length; n++) {
    console.log(`Welcome ${names[n]}! You are employee #${n + 1}.`);
  }
  return names;
}

function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
}
