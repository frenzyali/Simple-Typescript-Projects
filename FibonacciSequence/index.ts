// Fibonacci Sequence by Syed Ali Hussain

import inquirer from "inquirer"

function generateFibonacciSequence(n: number): number[]{
    let fibonacciSeries: number[] = [0, 1]
    if(n <= 2){
        return fibonacciSeries.slice(0, n)
    }

    for(let i = 2; i < n; i++){
        let nextTerm = fibonacciSeries[i - 1] + fibonacciSeries[i -2]
        fibonacciSeries.push(nextTerm)
    }
    return fibonacciSeries
}
console.log("\t Welcome to Fibonacci Sequence Generator by Syed Ali Hussain")
let isRunning = true;

START:
while(isRunning){
    let answer = await inquirer.prompt([
        {
            type: "number",
            name: "option",
            message: "Enter a number to generate a fibonacci sequence: "
        }
    ])
    if(!isNaN(answer.option)){
        console.log(`The fibonacci sequence for ${answer.option} terms is: ` + generateFibonacciSequence(answer.option))
    }else{
        console.log("Invalid input")
        continue START;
    }
    let answer2 = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "> What do you want to do?",
            choices: ["Exit", "Continue"]
        }
    ])
    if(answer2.option == "Exit"){
        console.clear()
        console.log("> Goodbye");
        isRunning = false;
    }else if(answer2.option == "Continue"){
        console.clear()
        continue START;
    }
}   