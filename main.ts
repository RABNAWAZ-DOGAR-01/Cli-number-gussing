#! /usr/bin/env node


// 1. computer will generate a random number.

// 2. usr input for gussing number.

// 3. campare usr input with computer generated number and show result.

import inquirer from "inquirer";



const RandomNumber = Math.floor(Math.random() * 6 + 1);


const answer = await inquirer.prompt([
    {
        name:"usrGuessNumber",
        type:"number",
        message:"plz guess  a number  between 1 - 6 ",
    },
],
);


if(answer.usrGuessNumber === RandomNumber){
    console.log("Congratulations, you have guess the correct number")
}

else{
    console.log("You guess the wrong number")
}

console.log(answer)
