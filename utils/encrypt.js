import { decrypt_alias, decrypt_codeword_alias, encrypt_alias, encrypt_codeword_alias } from './data.js'

function encrypt(message, code_word) {
    let message_list = message.toLowerCase().split("");
    let encryption_numbers = [];

    let code_word_list = code_word.toLowerCase().split("");
    let total_code_word_value = 0;

    code_word_list.forEach(letter => {
        total_code_word_value += encrypt_codeword_alias[letter];
    });
    message_list.forEach(letter => {
        let encrypted_word = encrypt_alias[letter] += total_code_word_value
        encryption_numbers.push(encrypted_word.toString().split(""))
    });

    let encryption_numbers_single = []
    for (let count = 0; count < encryption_numbers.length; count++) {
        encryption_numbers_single.push(encryption_numbers[count][0])
        encryption_numbers_single.push(encryption_numbers[count][1])
    }

    let encryption_letters_single = []
    encryption_numbers_single.forEach(numbers => {
        encryption_letters_single.push(decrypt_alias[numbers])
    });

    let encrypted_word_final = encryption_letters_single.join("")

    return encrypted_word_final
}