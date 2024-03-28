// Password Generator By Syed Ali Hussain
function generate_password() {
    let smallletters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let capLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
    let randomSmallLetters = [smallletters[Math.floor(Math.random() * smallletters.length)], smallletters[Math.floor(Math.random() * smallletters.length)]];
    let randomCapitalLetters = [capLetters[Math.floor(Math.random() * smallletters.length)], capLetters[Math.floor(Math.random() * smallletters.length)]];
    let randomNumbers = [numbers[Math.floor(Math.random() * numbers.length)], numbers[Math.floor(Math.random() * numbers.length)]];
    let randomSymbols = [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]];
    let password_Array = randomSmallLetters.concat(randomCapitalLetters, randomNumbers, randomSymbols);
    password_Array = password_Array.sort(() => Math.random() - 0.5);
    let password = password_Array.join('');
    return password;
}
console.log("\t Welcome to the Random Password Generator by Syed Ali Hussain");
console.log("Here is your password: " + generate_password());
export {};
