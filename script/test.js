import { decrypt } from "../utils/decrypt.js";
import { encrypt } from "../utils/encrypt.js";

let code = encrypt("mikael", "cool")
console.log(code)

let code_2 = decrypt("vruxuztzutu&", "cool")
console.log(code_2)