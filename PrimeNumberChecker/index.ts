import inquirer from "inquirer";

// Prime Number Checker By Syed Ali Hussain

function isPrime(number: number): boolean {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

console.log("\t Welcome to Prime Number Checker by Syed Ali Hussain")
let isRunning = true;
START:
while(isRunning){
    let answer = await inquirer.prompt([
        {
            type: "number",
            name: "option",
            message: "Enter a positive integer: "
        }
    ])
    if(answer.option > 0 && !isNaN(answer.option)){
        if (isPrime(answer.option)) {
            console.log(`${answer.option} is a prime number.`);
        } else {
            console.log(`${answer.option} is not a prime number.`);
        }
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