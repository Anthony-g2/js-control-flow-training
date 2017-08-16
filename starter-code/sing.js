console.log("sing.js loaded");

console.log('Beer on the wall!')
let verseTot = prompt('How many verses would you like to hear?');
while (verseTot >= 0) {
  if (verseTot == 2) {
    console.log(`${verseTot} bottles of beer on the wall,\n${verseTot} bottles of beer!\nTake one down and pass it around,\n${verseTot -1} bottle of beer on the wall!`);
  } else if (verseTot == 1) {
      console.log(`${verseTot} bottle of beer on the wall,\n${verseTot} bottle of beer!\nTake one down and pass it around,\nNo more bottles of beer on the wall!`);
  } else if (verseTot == 0) {
    console.log(`No more bottles of beer on the wall,\nNo more bottles of beer!\nWe took them down and passed them around,\nNo more bottles of beer on the wall!`);
  } else {
    console.log(`${verseTot} bottles of beer on the wall,\n${verseTot} bottles of beer!\nTake one down and pass it around,\n${verseTot -1} bottles of beer on the wall!`);
  }
  verseTot--;
};
