/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

// Create a variable for Jon and Jamie's attack strengths.
let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

// Before the battle begins, Jon and Jamie decide to compare attack strengths to get insight into who might win this battle.
// Using an if-else statement, console.log who has the greater attack strength.

if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon Snow has the greater attack strength.");
} else if (jonSnowAttack < jamieLannisterAttack) {
  console.log("Jamie Lannister has the greater attack strength.");
} else {
  console.log("Jon Snow and Jamie Lannister have equal attack strengths.");
}


// Jamie, knowing he is the superior, initiates a fight with Jon. Let's create some additional stats for Jon Snow so we 
// can see how this plays out.

let jonSnowHealth = 100
let jonSnowDefense = 0

// Jamie attacks first - use an if/else to determine if Jon Snow can survive the attack. If he does not, console.log "Jon Snow has been slain."
// Otherwise, console.log Jon Snow's health. 

if (jamieLannisterAttack > jonSnowDefense) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    if (jonSnowHealth <= 0) {
      console.log("Jon Snow has been slain.");
    } else {
      console.log("Jon Snow's remaining health: " + jonSnowHealth);
    }
  } else {
    console.log("Jon Snow successfully defends against Jamie's attack.");
  }

  // Jon Snow, adamant he does not want to fight Jamie (can you blame him?), picks up a shield to help defend himself.
  // Increase Jon's defense by 25.
jonSnowDefense += 25;


// Jamie attacks again - use an if/else to determine if Jon Snow can survive the attack. Make sure to account for Jon's defense.
// If he does not, console.log "Jon Snow has been slain." Otherwise, console.log Jon Snow's health.
if (jonSnowHealth <= (jamieLannisterAttack - jonSnowDefense)) {
    console.log("Jon Snow has been slain.");
  } else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log("Jon Snow's remaining health: " + jonSnowHealth);
  }
  
  // One of the town's people, obviously wanting Jon Snow to win, throws Jon a health kit. This health kit can raise
  // Jon's health by 50pts. However, Jon's health cannot exceed 100. Using an if-else statement, raise Jon's health to the
  // appropriate level.
  const healthKit = 50;
  if (jonSnowHealth + healthKit <= 100) {
    jonSnowHealth += healthKit;
  } else {
    jonSnowHealth = 100;
  }

  
  console.log("Jon Snow's health after using the health kit: " + jonSnowHealth);

  /* Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on heads, 
  he will aim to take Jon's head. If it lands on tails, Jamie will allow Jon to run away. Create a variable called
  coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the 
  value of the flipped coin (handle for both true and false). */

  let coinLandsHeads = true;

if (coinLandsHeads === true) {
    console.log("The fight continues!");
  } else {
    console.log("Jamie allows Jon to run away.");
  }

/* Let's see how this battle will play out if it continues. Create a for loop that will have Jamie attack Jon 5 times.
Console log Jon Snow's health after each attack.
*/

for (let i = 0; i < 5; i++) {
    if (jonSnowHealth <= (jamieLannisterAttack - jonSnowDefense)) {
      console.log("Jon Snow has been slain.");
      break; // If Jon Snow is slain, exit the loop.
    } else {
      jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
      console.log("Jon Snow's remaining health after attack " + (i + 1) + ": " + jonSnowHealth);
    }
  }

  