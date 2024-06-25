import inquirer from "inquirer";
import chalk from "chalk"; // we use this code for colouring our text colour or background colour 
// Atm name
console.log(chalk.bgBlueBright.bold.underline("Anss ATM Machine"));
// my account balance 
let my_ballance = 10000;
// my account pin
let my_pin_code = 1122;
// code for enter your pin
let pin = await inquirer.prompt([
    {
        name: "C1",
        message: (chalk.bgGreenBright("Enter your pin number")),
        type: "number",
    }
]);
// pin code is correct
if (pin.C1 === my_pin_code) {
    console.log(chalk.bgYellowBright("correct pin code!!!"));
    // choose option
    let operationq = await inquirer.prompt([
        {
            name: "operation",
            message: (chalk.bgYellowBright("Please select one option")),
            type: "list",
            choices: ["Withdraw", "Check Account Balance", "Statement"]
        }
    ]);
    // if we select withdraw option
    if (operationq.operation === "Withdraw") {
        // select amount
        let question = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.bgMagenta("enter you amount"),
                type: "list",
                choices: ["1000", "2000", "3000", "4000", "5000", "11000"],
            }
        ]);
        // if amount is less then 10000 this code will run
        if (question.amount <= 10000) {
            my_ballance -= question.amount;
            console.log(chalk.green("your remaining balance is:" + my_ballance));
            console.log('😃');
        }
        // if amount is greater then 10000 this code will run
        else if (question.amount > 10000) {
            console.log(chalk.greenBright("not enough funds :("));
            console.log('😥');
            console.log(chalk.greenBright("Your transaction is failed and your remaining balance is" + my_ballance));
        }
    }
    // if we select Check Account Balance this code will run
    else if (operationq.operation === "Check Account Balance") {
        console.log(chalk.blueBright("Your account balance is: " + my_ballance));
    }
    // if we select statement this code will run
    else if (operationq.operation === "Statement") {
        console.log(chalk.blue("Jazz Cash -1000", "Food Panda -1000", "Onilne Bill -1000"));
    }
}
// if we run wrong pin this code will run
else {
    console.log(chalk.red("Invalid Pin"));
    console.log(chalk.bold('😑'));
}
