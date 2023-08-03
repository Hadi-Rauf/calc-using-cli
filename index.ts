import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((response) => setTimeout(response, 2000));
};

async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow("Lets Start Calculations");
  await sleep();
  rainbowTitle.stop();
  console.log(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`);
}
 await welcome();

async function askQ() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "operator",
        message: "Which operation do you want to perform? \n",
        choices: ["Addition", "Subraction", "Multiplication", "Division"],
      },
      {
        type: "number",
        name: "num1",
        message: "Enter the first number: "
      },
      {
        type: "number",
        name: "num2",
        message: "Enter the second number: "
      },
    ])
    .then((answers) => {
      if (answers.operator == "Addition") {
        console.log(
          chalk.blue(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2} `)
        );
      }
      else if (answers.operator == "Subraction") {
        console.log(
          chalk.blue(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2} `)
        );
      }
      else if (answers.operator == "Multiplication") {
        console.log(
          chalk.blue(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2} `)
        );
      }
      else if (answers.operator == "Division") {
        console.log(
          chalk.blue(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2} `)
        );
      }
    });
}



async function startAgain(){
  do{
    await askQ();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to start again? press Y to continue or N to Stop",

    })
  }while(again.restart == 'y' || again.restart == 'Y'|| again.restart == 'YES'|| again.restart == 'yes')
}
startAgain();
    

