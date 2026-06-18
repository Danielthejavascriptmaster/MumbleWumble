import { encrypt_alias_high, encrypt_alias_low, decrypt_alias_high, decrypt_alias_low } from './data.js'

export function encrypt(message, code_word) {
    let message_letters = message.toLowerCase().split('');
    let code_word_letters = code_word.toLowerCase().split('');

    let code_word_total = 0;

    for (let letter of code_word_letters) {
        code_word_total += encrypt_alias_high[letter];
    }

    let message_numbers = [];
    for (let letter of message_letters) {
        message_numbers.push(encrypt_alias_high[letter] + code_word_total);
    }

    let message_numbers_single = [];

    for (let number of message_numbers) {
        let double = String(number).split('');
        for (let digit of double) {
            message_numbers_single.push(parseInt(digit));
        }
    }
    let encrypted_code_digits = [];
    for (let number of message_numbers_single) {
        encrypted_code_digits.push(decrypt_alias_low[number]);
    }

    return encrypted_code_digits.join('');
}