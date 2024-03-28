// Temperature Converter by Syed Ali Hussain
import inquirer from "inquirer";
function celsiusToFahrenheit(celsiusTemp) {
    return (9 / 5 * celsiusTemp) + 32;
}
function fahrenheitToCelsius(fahrenheitTemp) {
    return (fahrenheitTemp - 32) * 5 / 9;
}
console.log("\t Welcome to Temperature Converter By Syed Ali Hussain");
let isRunning = true;
START: while (isRunning) {
    let answer = await inquirer.prompt([
        {
            type: "number",
            name: "temperature",
            message: "Enter your temperature: "
        },
        {
            type: "list",
            name: "choice",
            message: "What would you like to convert it in?",
            choices: ["Celsius", "Fahrenheit"]
        }
    ]);
    if (answer.choice == "Celsius") {
        console.clear();
        console.log(fahrenheitToCelsius(answer.temperature) + "°C");
    }
    else if (answer.choice == "Fahrenheit") {
        console.clear();
        console.log(celsiusToFahrenheit(answer.temperature) + "°F");
    }
    let exitContinue = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "What do you want to do?",
            choices: ["Exit", "Continue"]
        }
    ]);
    if (exitContinue.option == "Exit") {
        console.clear();
        console.log("Good Bye!");
        isRunning = false;
        process.exit(1);
    }
    else if (exitContinue.option == "Continue") {
        console.clear();
        continue START;
    }
}
