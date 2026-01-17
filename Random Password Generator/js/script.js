const passwordBox = document.getElementById("password-box");
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");

const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const allChars = upperCase + lowerCase + numbers + symbols;

// Function to shuffle string
const shuffle = (str) => str.split('').sort(() => 0.5 - Math.random()).join('');

// Create password
const createPassword = () => {
    let password = '';
    
    // Ensure at least one character from each type
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    // Fill the rest
    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle to remove predictability
    passwordBox.value = shuffle(password);
}

// Copy password to clipboard
const copyPassword = () => {
    if(passwordBox.value){
        navigator.clipboard.writeText(passwordBox.value);
        alert("Password copied to clipboard!");
    }
}

generateBtn.addEventListener("click", createPassword);
copyBtn.addEventListener("click", copyPassword);
