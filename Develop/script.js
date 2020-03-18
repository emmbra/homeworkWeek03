// Arrays

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|" "}", "~", "\"",  ]
var pwLength
var pwCriteria
var userPassword = ""
var finalUserPassword =

// ", \, quote and blckslash, how to enter into array?

function pwGenerator(){
  var pwLength = prompt("How long do you want your password? Please enter a number between 8 - 128.");
  // is this loop written correctly? won't accept 128
  for (pwLength = 0; pwLength < 8 || pwLength > 128; pwLength++) {
    var pwLength = prompt("You fool! Enter a password length between 8 - 128.");
  }

  var lowerCase = confirm("For your password, do you want to include lowercase characters? e.g. a, b, c");
  if (lowerCase === true) {
    var userPassword = Math.floor(Math.random() * lowerCase.length);
  }
  else (lowerCase === false) {

  }

  var upperCase = confirm("For your password, do you want to include uppercase characters? e.g. A, B, C");
  if (upperCase === true) {
    var userPassword = Math.floor(Math.random() * upperCase.length);
  }
  else (upperCase === false) {
    
  }

  var numbers = confirm("For your password, do you want to include numbers? e.g. 1, 2, 3")
  if (numbers === true) {
    var userPassword = Math.floor(Math.random() * numbers.length);
  }
  else (numbers === false) {
    
  }

  var specialChars = confirm("For your password, do you want to include special characters? e.g. @, #, $")
  if (specialChars === true) {
    var userPassword = Math.floor(Math.random() * specialChars.length);
  }
  else (specialChars === false) {
    
  }
var userPassword += lowerCase + upperCase + numbers + specialChars
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
