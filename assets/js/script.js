// Assignment code here
// Character choices 
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numerical = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// contains prompts - length, choices of char arrays 
function passOptions() {
  alert('The criteria for generating your password is choosing at least one of the following options: lowercase, uppercase, numerical and/or special characters');
  // user prompt for password length
  var length = parseInt(prompt('Please enter a number between 8 and 128 for your password length'));
  // user input validation
  if (!length === true) {
    alert('Please enter Length of your password using NUMBERS from 8 to 128 ONLY!');
  }
  if (length < 8 || length > 128) {
    prompt('Please enter Length of your password using NUMBERS from 8 to 128 ONLY!');
    return;
  }
  //prompt user for char choices
  hasLowercase = confirm('Do you want to include lowercase characters?');
  hasUppercase = confirm('Do you want to include uppercase characters?');
  hasNumerical = confirm('Do you want to include numerical characters?');
  hasSpecialCharacters = confirm('Do you want to include special characters?');
  // alert user if they do not chose at least one type of characters
  if (!hasLowercase && !hasUppercase && !hasNumerical && !hasSpecialCharacters) {
    alert('You must choose at least one of the offered options!');
    return;
  }
  // worked with tutor on this
  // store user input into object
  var passChoices = {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumerical: hasNumerical,
    hasSpecialCharacters: hasSpecialCharacters
  };
  return passChoices;
}
//get an array to randomiezedPassword element
function generatePasswordRandomness(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomizedPassword = arr[randomIndex];
  return randomizedPassword;
}
//use user input to generate password
function generatePassword() {
  var choices = passOptions();
  var finalPassword = [];
  //user choice chars
  var chosenChars = [];
  //create array out of userChars
  var userChoices = [];

  //if user chose options(use all four array options), use them in array of userChoices (push)
  if (choices.hasLowercase) {
    chosenChars = chosenChars.concat(lowercase);
    userChoices.push(generatePasswordRandomness(lowercase));
  }
  if (choices.hasUppercase) {
    chosenChars = chosenChars.concat(uppercase);
    userChoices.push(generatePasswordRandomness(uppercase));
  }
  if (choices.hasNumeric) {
    chosenChars = chosenChars.concat(numerical);
    userChoices.push(generatePasswordRandomness(numerical));
  }
  if (choices.hasSpecialCharacters) {
    chosenChars = chosenChars.concat(specialCharacters);
    userChoices.push(generatePasswordRandomness(specialCharacters));
  }

  //need a for loop of user inputs to prompts

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
