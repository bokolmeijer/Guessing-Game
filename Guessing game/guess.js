let maximum = parseInt(prompt("Enter the maximum number"))
while (!maximum){
    maximum = parsetInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random()*maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"))
while (parseInt(guess) !== targetNum){
    if (guess === "q"){ break; attemps++;

    }
    if(guess > targetNum){
       guess =(prompt("Too high enter a new guess:"))
    }
    else{
        guess= (prompt("Too low, enter a new guess"))
    }
}
if(guess === "q"){
    console.log(`You quit.It took you ${attemps} guesses`)
}
console.log(`You got it. It took you ${attemps} guesses`)
