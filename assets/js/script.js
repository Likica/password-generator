// Assignment code here
// Character choices 
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numerical = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// contains prompts - length, choices of char arrays 
function passOptions() {
  // let user know what is the criteria for creating the password
  alert('The criteria for generating your password is choosing at least one of the following options: lowercase, uppercase, numerical and/or special characters');
  // user prompt for password length
  var length = parseInt(
    prompt('Please enter a number between 8 and 128 for your password length'));
  // user input validation
  if (isNaN(length) === true) {
    prompt('Please enter Length of your password using NUMBERS from 8 to 128 ONLY!');
    return;
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
  var passwordOptions = {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumerical: hasNumerical,
    hasSpecialCharacters: hasSpecialCharacters
  };
  return passwordOptions;
}
//get an array to randomized Password element
function generateRandPass(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}
//use user input to generate password
function generatePassword() {
  var options = passOptions();
  var finalPassword = [];
  //user choice chars
  var userChoices = [];
  //create array out of userChars
  var guranteedChoices = [];

  //if user chose options(use all four array options), use them in array of userChoices (push)
  if (options.hasLowercase) {
    userChoices = userChoices.concat(lowercase);
    guranteedChoices.push(generateRandPass(lowercase));
  }
  if (options.hasUppercase) {
    userChoices = userChoices.concat(uppercase);
    guranteedChoices.push(generateRandPass(uppercase));
  }
  if (options.hasNumeric) {
    userChoices = userChoices.concat(numerical);
    guranteedChoices.push(generateRandPass(numerical));
  }
  if (options.hasSpecialCharacters) {
    userChoices = userChoices.concat(specialCharacters);
    guranteedChoices.push(generateRandPass(specialCharacters));
  }

  //need a for loop of user inputs to prompts
  for (var i = 0; i < options.length; i++) {
    var userChoices = generateRandPass(userChoices);
    finalPassword.push(userChoices);
  }
  // add at lease one char from eaach of user Choices character options
  for (var i = 0; i < guranteedChoices.length; i++) {
    finalPassword[i] = guranteedChoices[i];
  }
  //create a string out of finalPassword
  return finalPassword.join("");
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
