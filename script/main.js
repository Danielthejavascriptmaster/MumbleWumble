import { valid_input } from '../utils/input_verifier.js'
import { encrypt } from '../utils/encrypt.js'
import { decrypt } from '../utils/decrypt.js'
const scramble_btn = document.getElementById("scramble")
const unscramble_btn = document.getElementById("unscramble")

scramble_btn.addEventListener("click", () => {
    let message = document.getElementById("message").value
    let code_word = document.getElementById("code_word").value

    //checks if valid
    if (valid_input(message) && valid_input(code_word) == true) {
        message = encrypt(message, code_word)
        window.alert(`Your message: ${message} || Your Code word: ${code_word}`)
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
        window.alert(`Your message: ${message} || Your Code word: ${code_word}`)
    } else {
        console.log("invalid")
    }
})