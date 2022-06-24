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

    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var numbers = "0123456789";
    
    var specialCharacters = "!#$%&()*+,-./:;<=>?@[^]_`{|}~";
    
    selectedCharacterOptions = "";
    
    yourPassword = "";

    let passwordLength = prompt("How long do you want your password to me?", "Enter a number between 8 and 128");
        if (passwordLength >= 8 && passwordLength <= 128) {
            var includeLowercase = confirm("Include lowercase letters?")
            if (includeLowercase) {
                selectedCharacterOptions += lowercaseLetters;
            }

            var includeUppercase = confirm("Include uppercase letters?")
            if (includeUppercase) {
                selectedCharacterOptions += uppercaseLetters;
            }

            var includeNumeric = confirm("Include numeric characters?")
            if (includeNumeric) {
                selectedCharacterOptions += numbers;
            }

            var includeSpecial = confirm("Include special characters?")
            if (includeSpecial) {
                selectedCharacterOptions += specialCharacters;
            }
            
            if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
                return alert("You must choose to include at least one uppercase, lowercase, numeric, or special character")
            }

            for (let i = 0; i < passwordLength; i++) {
                yourPassword += selectedCharacterOptions.charAt(
                    Math.floor(Math.random() * selectedCharacterOptions.length)
                )
                }


                document.getElementById("password").innerHTML = yourPassword;


            

    }
    else {
        alert("You must enter a number between 8 and 128.");
    }
}










