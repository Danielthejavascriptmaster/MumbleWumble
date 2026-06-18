import { encrypt_alias_high, encrypt_alias_low, decrypt_alias_high, decrypt_alias_low } from './data.js'

export function decrypt(message, code_word) {
    let message_letters = message.toLowerCase().split('');
    let code_word_letters = code_word.toLowerCase().split('');

    let code_word_total = 0;

    for (let letter of code_word_letters) {
        code_word_total += encrypt_alias_high[letter];
    }

    let message_numbers_single = [];
    for (let letter of message_letters) {
        message_numbers_single.push(encrypt_alias_low[letter]);
    }
    let message_numbers_double = [];

    let loop_range = Math.floor(message_numbers_single.length / 2);
    for (let number = 0; number < loop_range; number++) {
        let fake_message_numbers_single = message_numbers_single;
        let double_digit = String(fake_message_numbers_single[0]) + String(fake_message_numbers_single[1]);
        message_numbers_double.push(double_digit);

        fake_message_numbers_single.shift();
        fake_message_numbers_single.shift();
    }

    let message_letters_decrypted = [];
    for (let number of message_numbers_double) {
        message_letters_decrypted.push(decrypt_alias_high[parseInt(number) - code_word_total]);
    }

    return message_letters_decrypted.join('');
}