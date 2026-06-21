import { valid_input } from './utils/input_verifier.js'
import { encrypt } from './utils/encrypt.js'
import { decrypt } from './utils/decrypt.js'

function showError() {
    popup.style.display = "flex";
    blur.style.display = "block";
}

function hideError() {
    popup.style.display = "none";
    blur.style.display = "none";
}

const popup = document.querySelector(".error-popup");
const blur = document.querySelector("#blurry-screen");

const closeBtn = document.querySelector("#close-button");
const okBtn = document.querySelector("#ok-button");

const scramble_btn = document.getElementById("scramble")
const unscramble_btn = document.getElementById("unscramble")

const error_text = document.getElementById("messages")

scramble_btn.addEventListener("click", () => {
    let message = document.getElementById("message").value
    let code_word = document.getElementById("code_word").value

    //checks if valid
    if (valid_input(message) && valid_input(code_word) == true) {
        message = encrypt(message, code_word)
        error_text.innerHTML = `Word: ${message} || Code Word: ${code_word}`
        showError()
    } else {
        console.log("invalid")
    }
})

unscramble_btn.addEventListener("click", () => {
    let message = document.getElementById("message").value
    let code_word = document.getElementById("code_word").value

    //checks if valid
    if (valid_input(message) && valid_input(code_word) == true) {
        message = decrypt(message, code_word)
        error_text.innerHTML = `Word: ${message} || Code Word: ${code_word}`
        showError()
    } else {
        console.log("invalid")
    }
})

closeBtn.addEventListener("click", hideError);
okBtn.addEventListener("click", hideError);
