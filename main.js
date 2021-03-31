let btnGuess = document.querySelector(".btns__color--guess");
let btnReset = document.querySelector(".btns__color--reset");

function randomNum(){
    // variables:
    let numGuess = document.querySelector(".color-input__guess").value;
    let showGuess = document.querySelector(".answers__show-guess").innerHTML = numGuess;
    
    let numAnswer = Math.floor(Math.random() * 10);
    console.log(numAnswer);

    if(numGuess > numAnswer || numGuess < numAnswer) {
        document.querySelector(".answers__show-guess").style.fontSize = "25rem";
        document.querySelector(".win-lose__try-again").style.opacity = 1;
        document.querySelector(".win-lose__win").style.opacity = 0;
        document.querySelector(".color-box").style.background = "red";
        document.querySelector(".color-input__guess").style.color = "red";
    } else {
        document.querySelector(".answers__show-guess").style.fontSize = "25rem";
        document.querySelector(".win-lose__win").style.opacity = 1;
        document.querySelector(".color-box").style.background = "green";
        document.querySelector(".color-input__guess").style.color = "green";
        document.querySelector(".win-lose__try-again").style.opacity = 0;
    }
}

btnGuess.addEventListener("click", function(){
    randomNum();
})

btnReset.addEventListener("click", function(){
    location.reload();
})
