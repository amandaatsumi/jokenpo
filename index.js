var randomNumber1 = Math.floor(Math.random()*3)+1;

var randomNumber2 = Math.floor(Math.random()*3)+1;

var imageSource1 = "images/img" + randomNumber1 + ".png";

var imageSource2 = "images/img" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

if(randomNumber1=== 1 & randomNumber2 === 2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
    document.querySelector("button").innerHTML = "Play Again";
    document.querySelector("h2").innerHTML = "Jokenpo!!";
}
else if(randomNumber1=== 1 & randomNumber2 === 3){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
    document.querySelector("button").innerHTML = "Play Again";
    document.querySelector("h2").innerHTML = "Jokenpo!!";
}
else if(randomNumber1=== 2 & randomNumber2 === 1){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
    document.querySelector("button").innerHTML = "Play Again";
    document.querySelector("h2").innerHTML = "Jokenpo!!";
}
else if(randomNumber1=== 2 & randomNumber2 === 3){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
    document.querySelector("button").innerHTML = "Play Again";
    document.querySelector("h2").innerHTML = "Jokenpo!!";
}
else if(randomNumber1=== 3 & randomNumber2 === 1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
    document.querySelector("button").innerHTML = "Play Again";
    document.querySelector("h2").innerHTML = "Jokenpo!!";
}
else if(randomNumber1=== 3 & randomNumber2 === 2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
    document.querySelector("button").innerHTML = "Play Again";
    document.querySelector("h2").innerHTML = "Jokenpo!!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
    document.querySelector("button").innerHTML = "Play Again";
    document.querySelector("h2").innerHTML = "Jokenpo!!";
}

