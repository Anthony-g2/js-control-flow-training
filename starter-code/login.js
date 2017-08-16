console.log("login.js loaded");
var userLogin = {
  userName: 'McLovin81',
  userPass: 'Hawaii<3'
};
var tries = [];
var y = 3;
var x = prompt(`Enter password for ${userLogin.userName}`);
while (x != userLogin.userPass) {
  if (x == userLogin.userPass) {
    break;
  }
  x = prompt(`Incorrect, enter password for ${userLogin.userName}
    Remaining attempts: ${y}`);
  tries.push('');
  if (tries.length == y) {
    alert('Too many attempts, goodbye.');
    break
  }
};
