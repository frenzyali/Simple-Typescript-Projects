// Palindrome Checker By Syed Ali Hussain
import inquirer from "inquirer";
function palindromeCheck(word) {
    let stringtoArray = word.split(''); // Changes my input string to Array
    let reversedArray = stringtoArray.reverse(); // Reverses the order of Array 
    let answer = reversedArray.join(''); // Joins the elements of the array to make a string
    // Conditional Statements 
    if (answer.toLowerCase() == word.toLowerCase()) {
        console.log("It is a Palindrome");
    }
    else {
        console.log("It is not a Palindrome");
    }
}
console.log("\t Welcome to Palindrome Calculator by Syed Ali Hussain");
let isRunning = true;
START: while (isRunning) {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "word",
            message: "Enter your word: "
        }
    ]);
    palindromeCheck(answer.word);
    let answer2 = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "> What do you want to do?",
            choices: ["Exit", "Continue"]
        }
    ]);
    if (answer2.option == "Exit") {
        console.clear();
        console.log("> Goodbye");
        isRunning = false;
    }
    else if (answer2.option == "Continue") {
        console.clear();
        continue START;
    }
}
