import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
  {
    name: "NumberGuessed",
    type: "number",
    message: "Please Guess a number between 1 to 9",
  },
]);
if (randomnumber === answer.NumberGuessed) {
  console.log(
    `You've guessed the right number, That is ${randomnumber} "CONGRATULATIONS"`
  );
} else {
  console.log("You've Guessed the wrong number try again dont stop just yet");
}
