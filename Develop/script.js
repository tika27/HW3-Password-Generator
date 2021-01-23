//declare variables 
var passwordEl = document.querySelector("#password");
var generateBtnEl = document.querySelector("#generate");
var btncopyEl = document.querySelector("#copy");

generateBtnEl.addEventListener("click", function () {
var charlength = prompt ("how many words would you perfer for your new password? Please pick a # between 8 to 128.");

if ((charlength >=8) && (charlength <= 128)){

  let symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  let numbers = "0123456789";
  let lowerCase = "abcdefghijklmonpqrstuvwxy";
  let upperCase = "ABCDEFGHIJCLMOPQRSTUVQXYZ";
  
  let newPassword = "";

  //prompt variables
  let useLowerCase = confirm("Do you want to use lowercase characters?");
  let useUpperCase = confirm("Do you want to use uppercase letters?");
  let useNumeric = confirm("Do you eant to use numbers?");
  let useSpecial = confirm("Do you want to use special charaters?");

}
}



)





// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
