// Assignment code here
var passwordText = document.querySelector("#password");

// generatePassword function declaration
function generatePassword(){

  /* Initializes variable at highest scope of function for later manipulation */
  var finishedString = "";

  var lowercharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
  var uppercharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 
  var symbols = ["!", "#", "$", "%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","~"];

  var finalArray=[];
  
  var lengthPass = prompt('Enter the length of password: 8-128 characters.');

   // User hits "Cancel" on password length prompt -- passwordLength is null
  if (!lengthPass) {
    alert('No number entered! Please try again.');
    // passwordText.setAttribute("placeholder","Try again!");
    return "Try again!";
  }
  else {
    // Removes spaces from input so evaluations don't need to filter for whitespace
    lengthPass = lengthPass.replace(/\s+/g, '');
  }
  /* Regular expression to exclude lengthPass strings that contain letters or special characters */
  if ((/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(lengthPass)) &&
  (/[a-zA-Z]/.test(lengthPass)))
  {
    alert("Only numbers accepted in this box! Please try again.");
    // passwordText.setAttribute("placeholder", "Try again!");
    return "Try again!";
  } 
  // User enters number outside of 8-128 range
  else if (
    (lengthPass < 8) ||
    (lengthPass > 128)
  ) {
    alert("Number out of range! Please try again.");
    // passwordText.setAttribute("placeholder", "Try again!");
  return "Try again!";
  } 
  // Ensures passwordLength is within 8-128 range before proceeding
  else if (
    (lengthPass >= 8) &&
    (lengthPass <= 128)
);
  // Window confirm creates boolean to determine if uppercase letters are used
  var upperPass = confirm('Do you want to have uppercased characters?');
  // Window confirm creates boolean to determine if lowercase letters are used
  var lowerPass = confirm('Do you want to have lowercased characters?');
  // Window confirm creates boolean to determine if numbers are used
  var numberPass = confirm('Do you want to have numbers?');
  // Window confirm creates boolean to determine if special characters are used
  var symbolPass = confirm('Do you want to have symbols?');

if (upperPass === true){
  finalArray = finalArray.concat(uppercharacters)
} 
if (lowerPass === true){
  finalArray = finalArray.concat(lowercharacters)
} 
if (numberPass === true){
  finalArray = finalArray.concat(numbers)
} 
if (symbolPass === true){
  finalArray = finalArray.concat(symbols)
}
if (upperPass === false && lowerPass === false && numberPass === false && symbolPass === false) {
  return "No parameters specified! Please try again!"
};

  for (let i =0; i < lengthPass; i++) {
  let randomIndex = Math.floor(Math.random() * finalArray.length);
  finishedString += finalArray[randomIndex].toString(); 
 }

//and return the final value
return finishedString;

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
