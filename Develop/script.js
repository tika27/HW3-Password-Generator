//declare variables 
var passwordEl = document.querySelector("#password");
var generateBtnEl = document.querySelector("#generate");
var btncopyEl = document.querySelector("#copy");

generateBtnEl.addEventListener("click", function () {
var charlength = prompt ("how many words would you perfer for your new password? Please pick a # between 8 to 20.");
if ((charlength >=8) && (charlength <= 20)){

  let symbols = "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~;
  let numbers = "0,1,2,3,4,5,6,7,8,9";
  let lowerCase = "a,b,c,d,"
}
}



)





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
