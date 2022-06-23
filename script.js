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

// Adds Window Prompt

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function windowPrompt() {
    let passwordLength = prompt("How long do you want your password to me?", "Enter a number between 8 and 128");
        if (passwordLength >= 8 && passwordLength <= 128) {
            confirm("Include lowercase letters?")





    }
    else {
        alert("You must enter a number between 8 and 128.");
    }
}










