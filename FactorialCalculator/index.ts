// Factorial Calculator by Syed Ali Hussain

import inquirer from "inquirer";

function factorial(n: number): number{
    if(n === 0){          // If the input given is 0 then it's factorial will be 1
        return 1
    }else{
        return factorial(n-1) * n;   
    }
    
        
}
console.log("\t Welcome to Factorial Calculator by Syed Ali Hussain")
let isRunning = true;
START:
while(isRunning){
    let answer = await inquirer.prompt([
        {
            type: "number",
            name: "option",
            message: "> Enter a non negative integer you want to get the factorial of: ",
        }
    ])
    if(answer.option >= 0 && !isNaN(answer.option)){
        console.log(`> The factorial of ${answer.option} is: ` + factorial(answer.option));
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

