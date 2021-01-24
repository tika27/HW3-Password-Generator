//Create a atomatic password genetar. (You don't have to do anything in html and css. Write a js code)
// I need a new secure password. When I click the button to generate a password
// I am presented with a series of prompts for password criteria (alert)

// password criteria
// Then I select which criteria to include in the password,length of the password 8 to 128 characters
// include in the password: lowercase, uppercase, numeric, and/or special characters
// (WHEN I answer each prompt( Alert)
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered, generated that matches the selected criteria
// WHEN the password is generated it shows in displayed in an alert or written to the page


// Assignment Code
var passwordEl = document.querySelector("#password");
var btngenerateEl = document.querySelector("#generate");
var btncopyEl = document.querySelector("#copy");

//function for clicking on the button
btngenerateEl.addEventListener("click", function () {
   
    //Prompt to create password length
    var charLength = prompt("How many characters would you like your new password to be? Pick a number between 8 and 128.");

    //Will run if password is choseen between 8 and 128;
    if ((charLength >= 8) && (charLength <= 128)) {

        //create password generater
        let symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
        let numbers = "0123456789";
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        //Generate new password
        let newPassword = "";

        let genSymbols = confirm("Please choose any special characters?");
        let genNumbers = confirm("Select to use numbers?");
        let genLowerCase = confirm("Select to use lowercase letters?");
        let genUpperCase = confirm("Select to use uppercase letter?");

        //new characters together
        var allCharacters = symbols + numbers + lowerCase + upperCase;
        var a = lowerCase + numbers + lowerCase;
        var b = symbols + lowerCase + upperCase;
        var c = numbers + lowerCase + upperCase;
        var d = symbols + lowerCase + upperCase;
        var e = upperCase+ numbers;
        var f = symbols + lowerCase;
        var g = symbols + lowerCase;
        var h = lowerCase + lowerCase + numbers;
        var j = numbers + upperCase;
        var k = lowerCase + upperCase;

        // combin/combination of passwords
        if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * allCharacters.length);
                newPassword += allCharacters.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * a.length);
                newPassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * b.length);
                newPassword += b.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * c.length);
                newPassword += c.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * d.length);
                newPassword += d.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * e.length);
                newPassword += e.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * f.length);
                newPassword += f.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * g.length);
                newPassword += g.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * h.length);
                newPassword += h.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * j.length);
                newPassword += j.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * k.length);
                newPassword += k.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * symbols.length);
                newPassword += symbols.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * numbers.length);
                newPassword += numbers.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * lowerCase.length);
                newPassword += lowerCase.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * a.length);
                newPassword += a.charAt(character, character + 1);
            }
        }

        //new password into text area
        passwordEl.textContent = newPassword;
    }

})



//This assignment was extremly hard. 
// I had no idea what i was suppose to do however, 
// with help of internet and my tutor and online assistant I have been able to do this much. 
// It took me around 32hrs of non-stop cross checking between console.log and 20+ hrs of youtube.