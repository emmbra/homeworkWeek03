//Establish the datasets the generatePassword function will select from.
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "~!@#$%^&*()[]{}.?<>'/\"\\";
var numbers = "1234567890";

function generatePassword() {
  //Establish blank final password variable.
  var pwFinal = "";

  //Password Length: need variable and prompt for user
  //parseInt is a function that parses a string and returns an integer. Functions same as Number.
  var pwLength = parseInt(prompt("How many characters would you like in your password? Please select a number between 8 - 128."));

  //if statement could work here vs. while loop.
  //set while loop if user enters a value not in the range of 8 - 128 or NaN. will run until condition is false.
  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Try again ya shmuck! Please select a number between 8 - 128.");
    pwLength = parseInt(prompt("How many characters would you like in your password? Please select a number between 8 - 128."));
  }

  //prompt user for which characters they want in the random password. BOOLEAN ANSWERS.
  var lowerBoolean = confirm("Would you like lower case characters in your password? a, b, c, etc.");
  var upperBoolean = confirm("Would you like upper case characters in your password? A, B, C, etc.");
  var specialBoolean = confirm("Would you like special characters in your password? @, !, #, etc.");
  var numbersBoolean = confirm("Would you like numbers in your password? 1, 2, 3, etc.");

  //What if user answers no to all password criteria?
  //! bang operator = false
  if (!lowerBoolean && !upperBoolean && !specialBoolean && !numbersBoolean) {
    pwFinal = "Stop saying no to everything! Please try again and select password critera this time.";
    return pwFinal;
  }

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

  //Randomize the character selection functions and collating the random selections from random selection functions.
  function genCollate() {
    var collate = [genLower(), genUpper(), genSpecial(), genNumbers()];
    return collate[Math.floor(Math.random() * 4)];
  }

  //Build the pwFinal with a loop up to the password length established by user.
  for (var i = 0; i < pwLength; i++) {
    var addChar = genCollate();

    //Establish while loop if password criteria filtered out by user.
    while (
      (!lowerBoolean && lowerChars.indexOf(addChar) !== -1) ||
      (!upperBoolean && upperChars.indexOf(addChar) !== -1) ||
      (!specialBoolean && specialChars.indexOf(addChar) !== -1) ||
      (!numbersBoolean && numbers.indexOf(addChar) !== -1)
    ) {
      var addChar = genCollate();
    }

    pwFinal = pwFinal + addChar
  }

  return pwFinal;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.textContent = " ";
  var password = generatePassword();
  passwordText.textContent = password;
}

function copyPassword() {
  var passwordText = document.querySelector("#password");
  passwordText.select();
  document.execCommand("copy");
  alert("Your password has been copied to the clipboard.");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);
