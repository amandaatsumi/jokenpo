var randomNumber1 = Math.floor(Math.random()*3)+1;

var randomNumber2 = Math.floor(Math.random()*3)+1;

var imageSource1 = "images/img" + randomNumber1 + ".png";

var imageSource2 = "images/img" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imageSource1);

document.querySelectorAll("img")[1].setAttribute("src", imageSource2);