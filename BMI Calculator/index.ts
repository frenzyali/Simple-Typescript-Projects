// BMI Calculator by Syed Ali Hussain

import inquirer from "inquirer"
let isRunning = true;
START:
while(isRunning){
    let answer = await inquirer.prompt([
        {
            type: "input",
            name: "weight",
            message: "Enter your weight in KGs: "
        },
        {
            type: "input",
            name: "height",
            message: "Enter your height in centimeters: "
        }
    ])
    let height_in_meters = parseFloat(answer.height) / 100
    let bmi = parseInt(answer.weight) / ((height_in_meters) ** 2)
    bmi = Math.round(bmi * 10) / 10
    if(bmi < 18.5){
        console.log(`Your BMI is ${bmi}. You are underweight.`)
    }else if(bmi >= 18.5 && bmi <= 24.9){
        console.log(`Your BMI is ${bmi}. You are healthy.`)
    }else if(bmi >= 25 && bmi <= 29.9){
        console.log(`Your BMI is ${bmi}. You are overweight.`)
    }else if(bmi > 30){
        console.log(`Your BMI is ${bmi}. You are obese.`)
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


