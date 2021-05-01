// create a databse of possible characters
let generateBtn = document.querySelector("#generate");
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqurstuvwxyz";
const numbers ="12345667890";
const symbols = "! @#$%'^&*;,:<=>?|()~-_./[]{}+";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  let passcode= [];
  let buckets = [];
  // determine length of password, check to make sure it is between 8 and 128.
  let numCharacters = window.prompt("Enter number of desired characters you want your password");
  if(numCharacters < 8 || numCharacters >128 || isNaN(numCharacters)) {
    window.alert("Please pick a number between 8 and 128 characters");
    generatePassword();
  }
  // confirms what type of characters are required for their password
  let wantUppers = window.confirm("Do you need uppercase letters?");
  let wantLowers = window.confirm("Do you need lowercase letters?");
  let wantNumbers = window.confirm("Do you need numbers?");
  let wantSymbols = window.confirm("Do you need special characters?");
  // assigns one character from each required category to the password and adds categories to the buckets array that wre selected by the user.
  if(wantUppers){
    passcode.push(upperCase.charAt(Math.floor(Math.random()*upperCase.length)));
    buckets.push(upperCase);
    
  }
  if(wantLowers){
    passcode.push(lowerCase.charAt(Math.floor(Math.random()*lowerCase.length)));
    buckets.push(lowerCase);
    
  }

  if(wantNumbers){
    passcode.push(numbers.charAt(Math.floor(Math.random()*numbers.length)));
    buckets.push(numbers);
    
  }

  if(wantSymbols){
    passcode.push(symbols.charAt(Math.floor(Math.random()*symbols.length)));
    buckets.push(numbers)
  }
  // determines how many characters still need to be assigne to the password.
  let remainder = numCharacters-passcode.length;
  // randomly select characters from the user chosen categories to complete the password.
  for(let i = 0; i <(remainder); i++){
    let list = buckets[Math.floor(Math.random()*buckets.length)]
    passcode.push(list.charAt(Math.floor(Math.random()*list.length)));
  }
  // rearrange the selected characters to randomize the password
  passcode.sort(function(a, b){return 0.5 - Math.random()});
  // this gets rid of commas and put the passcode together with no spaces.
  return passcode.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


