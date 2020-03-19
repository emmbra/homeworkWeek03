
function generatePassword() {

  //Password Length: need variable and prompt for user
  var pwLength = parseInt(prompt("How many characters would you like in your password? Please select a number between 8 - 128."));

  //set loop if user enters a value not in the range of 8 - 128.
  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Try again ya shmuck! Please select a number between 8 - 128.");
    pwLength = parseInt(prompt("How many characters would you like in your password? Please select a number between 8 - 128."));
  }

  //prompt user for which characters they want in the random password. BOOLEAN ANSWERS.
  var lowerBoolean = confirm("Would you like lower case characters in your password? e.g. a, b, c, etc.");
  var upperBoolean = confirm("Would you like upper case characters in your password? e.g. A, B, C, etc.");
  var specialBoolean = confirm("Would you like special characters in your password? e.g. @, !, #, etc.");
  var numbersBoolean = confirm("Would you like numbers in your password? e.g. 1, 2, 3, etc.");

  //What if user answers no to all password criteria?
  if (lowerBoolean === false && upperBoolean === false && specialBoolean === false && numbersBoolean === false) {
    pwFinal = "Stop saying no to everything! Please try again and select password critera this time.";
    return pwFinal;
  }

  //Establish the datasets the generatePassword will select from.

  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "~!@#$%^&*()[]{}.?<>'/\"\\";
  var numbers = "1234567890";

  //Generate random selections from each dataset.
  function genLower() {
    return lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
  }
  function genUpper() {
    return upperChars.charAt(Math.floor(Math.random() * upperChars.length));
  }
  function genSpecial() {
    return specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  }
  function genNumbers() {
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  //Collating the random selections from random selection functions.
  function genCollate() {
    var collate = [genLower(), genUpper(), genSpecial(), genNumbers()];
    return collate[Math.floor(Math.random() * 4)];
  }

  //Establish blank final password variable.
  var pwFinal = "";

  //Build the pwFinal with a loop up to the password length established by user.
  for (var i = 0; i < pwLength; i++) {
    var addChar = genCollate();

    //Establish while loop if password criteria filtered out by user.
    while (
      (lowerBoolean === false && lowerChars.indexOf(addChar) !== -1) ||
      (upperBoolean === false && upperChars.indexOf(addChar) !== -1) ||
      (specialBoolean === false && specialChars.indexOf(addChar) !== -1) ||
      (numbersBoolean === false && numbers.indexOf(addChar) !== -1)
    ) {
      var addChar = genCollate();
    }

    pwFinal = pwFinal + addChar
  }

  return pwFinal;

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
