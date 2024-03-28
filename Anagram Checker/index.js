// Anagram Checker by Syed Ali Hussain
import inquirer from "inquirer";
console.log("\t Welcome to Anagram Checker by Syed Ali Hussain");
function checkAnagrams(str1, str2) {
    let cleanStr1 = str1.toLowerCase().split('').sort().join('');
    let cleanStr2 = str2.toLowerCase().split('').sort().join('');
    return cleanStr1 === cleanStr2;
}
let isRunning = true;
START: while (isRunning) {
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "firstword",
            message: "Enter the first word: "
        },
        {
            type: "input",
            name: "secondword",
            message: "Enter the first word: "
        }
    ]);
    console.log("Are they anagrams? " + checkAnagrams(answer.firstword, answer.secondword));
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
