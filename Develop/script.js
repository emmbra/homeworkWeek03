// Arrays

// var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|" "}", "~", "\"",  ]
// var pwLength
// var pwCriteria
// var userPassword = []
// var finalUserPassword =

function pwGenerator(){
  var pwLength = prompt("How long do you want your password? Please enter a number between 8 - 128.");
  var lowerCase = confirm("For your password, do you want to include lowercase characters? e.g. a, b, c");
  var lowerCase = confirm("For your password, do you want to include uppercase characters? e.g. A, B, C");
  var numbers = confirm("For your password, do you want to include numbers? e.g. 1, 2, 3")
  var specialChars = confirm("For your password, do you want to include special characters? e.g. @, #, $")
}

// ", \, quote and blckslash, how to enter into array?

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
