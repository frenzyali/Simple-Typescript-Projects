// Palindrome Checker By Syed Ali Hussain

import inquirer from "inquirer";

function palindromeCheck(word: string){
    let stringtoArray = word.split('')  // Changes my input string to Array
    let reversedArray = stringtoArray.reverse() // Reverses the order of Array 
    let answer = reversedArray.join('') // Joins the elements of the array to make a string

    // Conditional Statements 
    if(answer.toLowerCase() == word.toLowerCase()){
        console.log("It is a Palindrome");
    }else{
        console.log("It is not a Palindrome")
    }
}

let answer = await inquirer.prompt([
    {
        type: "input",
        name: "word",
        message: "Enter your word: "
    }
])

palindromeCheck(answer.word)