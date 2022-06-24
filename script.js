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

function windowPrompt() {

    // Creates string lists that contain options to select from.
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var numbers = "0123456789";
    
    var specialCharacters = "!#$%&()*+,-./:;<=>?@[^]_`{|}~";

    // Sets the variable that will contain your selection options to blank
    selectedCharacterOptions = "";
    // Sets the variable that will eventually contain your password to blank
    yourPassword = "";

    // This is your window prompt for character
    let passwordLength = prompt("How long do you want your password to me?", "Enter a number between 8 and 128");
        if (passwordLength >= 8 && passwordLength <= 128) {
            // This asks if user wants to include lowercase letters and if so, adds lowercaseLetters to selectedCharacter list
            var includeLowercase = confirm("Include lowercase letters?")
            if (includeLowercase) {
                selectedCharacterOptions += lowercaseLetters;
            }

            // This asks if user wants to include uppercase letters and if so, adds uppercaseLetters to selectedCharacter list
            var includeUppercase = confirm("Include uppercase letters?")
            if (includeUppercase) {
                selectedCharacterOptions += uppercaseLetters;
            }

            // This asks if user wants to include numeric characters (numbers) and if so, adds numbers to selectedCharacter list
            var includeNumeric = confirm("Include numeric characters?")
            if (includeNumeric) {
                selectedCharacterOptions += numbers;
            }

            // This asks if user wants to include special characters and if so, adds specialCharacters to selectedCharacter list
            var includeSpecial = confirm("Include special characters?")
            if (includeSpecial) {
                selectedCharacterOptions += specialCharacters;
            }
            
            // This makes sure that at least one of the 4 character options asked above is chosen and if this condition isn't met, it'll alert the user and end password generation
            if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
                return alert("You must choose to include at least one uppercase, lowercase, numeric, or special character")
            }

            // This runs a loop that produces yourPassword at the user's chosen passwordLength and randomly chooses them from selectedCharacterOptions
            for (let i = 0; i < passwordLength; i++) {
                yourPassword += selectedCharacterOptions.charAt(
                    Math.floor(Math.random() * selectedCharacterOptions.length)
                )
                }

            // This inputs yourPassword into the "Your Secure Password" text area so users can see and use it.
            document.getElementById("password").innerHTML = yourPassword;
    
    }

    // This alerts the user if they don't initially input a number between 8 and 128.
    else {
        alert("You must enter a number between 8 and 128.");
    }
}