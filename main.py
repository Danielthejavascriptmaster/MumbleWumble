encrypt_alias_high = {
    "a": 26,
    "b": 25,
    "c": 24,
    "d": 23,
    "e": 22,
    "f": 21,
    "g": 20,
    "h": 19,
    "i": 18,
    "j": 17,
    "k": 16,
    "l": 15,
    "m": 14,
    "n": 13,
    "o": 12,
    "p": 11,
    "q": 10,
    "r": 9,
    "s": 8,
    "t": 7,
    "u": 6,
    "v": 5,
    "w": 4,
    "x": 3,
    "y": 2,
    "z": 1,
    "&": 0.
}
encrypt_alias_low = {
    "&": 0,
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26.
}

decrypt_alias_high = {
    26: "a",
    25: "b",
    24: "c",
    23: "d",
    22: "e",
    21: "f",
    20: "g",
    19: "h",
    18: "i",
    17: "j",
    16: "k",
    15: "l",
    14: "m",
    13: "n",
    12: "o",
    11: "p",
    10: "q",
    9: "r",
    8: "s",
    7: "t",
    6: "u",
    5: "v",
    4: "w",
    3: "x",
    2: "y",
    1: "z",
    0: "&",
}

decrypt_alias_low = {
    0: "&",
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
}       


def scramble(message: str, code_word: str):
    message_letters = list(message.lower())
    code_word_letters = list(code_word.lower())

    code_word_total = 0

    for letter in code_word_letters:
        code_word_total += encrypt_alias_high[letter]

    message_numbers = []
    for letter in message_letters:
        message_numbers.append(encrypt_alias_high[letter] + code_word_total)

    message_numbers_single = []

    count= 0
    for count in range(len(message_numbers)):
        double = list(str(message_numbers[count]))
        for number in double:
            message_numbers_single.append(int(number))
    
    encrypted_code_digits = []
    for number in message_numbers_single:
        encrypted_code_digits.append(decrypt_alias_low[number])
    
    return ''.join(encrypted_code_digits)

def unscramble(message: str, code_word: str):
    message_letters = list(message.lower())
    code_word_letters = list(code_word.lower())

    code_word_total = 0

    for letter in code_word_letters:
        code_word_total += encrypt_alias_high[letter]

    message_numbers_single = []
    for letter in message_letters:
        message_numbers_single.append(encrypt_alias_low[letter])
    message_numbers_double = []
    
    loop_range = int(len(message_numbers_single)/2)
    for number in range(loop_range):
        fake_message_numbers_single = message_numbers_single
        double_digit = str(fake_message_numbers_single[0]) + str(fake_message_numbers_single[1])
        message_numbers_double.append(double_digit)

        fake_message_numbers_single.pop(0)
        fake_message_numbers_single.pop(0)

    message_letters_decrypted = []
    for number in message_numbers_double:
        message_letters_decrypted.append(decrypt_alias_high[int(number) - code_word_total])

    return ''.join(message_letters_decrypted)

    
message = "mikael"
code_word = "cool"

encrpted_message = scramble(message=message, code_word=code_word)
print(encrpted_message)
unencrypted_message = unscramble(message=encrpted_message, code_word=code_word)
print(unencrypted_message)