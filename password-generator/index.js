"use strict";

const displayPass = document.querySelector(".display-pass");
const generateBtn = document.querySelector(".generate");
const characterRange = document.querySelector("#character-range");
const displayRange = document.querySelector(".char-length");
const isOneChecked = document.querySelector("#check-1");
const isTwoChecked = document.querySelector("#check-2");
const isThreeChecked = document.querySelector("#check-3");
const isFourChecked = document.querySelector("#check-4");

let includeLowerCase = "abcdefghijklmnopqrstuvwxyz";
let includeUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let includeNumbers = "1234509876";
let includeSymbols = "!@#$%^&*~?><";

characterRange.addEventListener("change", () => {
    displayRange.textContent = characterRange.value;
})

function generatePassword(n) {
    let finalString = "";
    let pass = "";
    let count = 0;
    if (isOneChecked.checked) {
        finalString += includeLowerCase;
        pass += includeLowerCase[Math.trunc(Math.random() * 26)];
        count++;
    }
    if (isTwoChecked.checked) {
        finalString += includeUpperCase;
        pass += includeUpperCase[Math.trunc(Math.random() * 26)];
        count++;
    }
    if (isThreeChecked.checked) {
        finalString += includeNumbers;
        pass += includeNumbers[Math.trunc(Math.random() * 10)];
        count++;
    }
    if (isFourChecked.checked) {
        finalString += includeSymbols;
        pass += includeSymbols[Math.trunc(Math.random() * 12)];
        count++;
    }

    for (let i = 0; i < n - count; i++) {
        let idx = Math.trunc(Math.random() * finalString.length);
        pass += finalString[idx];
    }

    return pass;

}

const isCorrect = () => {
    if (!isOneChecked.checked && !isThreeChecked.checked && !isTwoChecked.checked && !isFourChecked.checked) {
        alert("Please check atleast one option before generate");
        return;
    }
    const password = generatePassword(characterRange.value);
    displayPass.textContent = password;
    return;
}

generateBtn.addEventListener("click", isCorrect);
