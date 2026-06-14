import { decrypt_alias, decrypt_codeword_alias, encrypt_alias, encrypt_codeword_alias } from './data.js'

function decrypt(message, code_word) {
    let encrypted_codeword_split = code_word.split("")
    let encrypted_word_split = message.split("")

    let encrypted_codeword_split_num = []
    let encrypted_word_split_num = []

    let code_word_total = 0

    encrypted_codeword_split.forEach(number => {
        code_word_total += encrypt_codeword_alias[number]
    });

    encrypted_word_split.forEach(number => {
        encrypted_word_split_num.push(encrypt_alias[number])
    });


    let cycle_length = encrypted_word_split_num.length
    let encrypted_codeword_split_num_twins = []
    for (let i = 0; i < cycle_length - 6; i++) {
        let pair = encrypted_word_split_num[0].toString() + encrypted_word_split_num[1].toString()
        encrypted_codeword_split_num_twins.push(pair)
        encrypted_word_split_num.splice(encrypted_word_split_num, 2)
    }

    let encrypted_codeword_split_letter = []
    encrypted_codeword_split_num_twins.forEach(number => {
        number = Number(number)
        number -= code_word_total
        console.log(code_word_total)
        encrypted_codeword_split_letter.push(decrypt_alias[number])
    });

    console.log(encrypted_codeword_split_num_twins)
    console.log(encrypted_codeword_split_letter)

    let decrypted_message = encrypted_codeword_split_letter.join("")
    return decrypted_message
}