var randomVariable = Math.random()*6;  // a randowm number between 1 to 6 is thrown
var random1 = Math.floor(randomVariable) + 1;  // calculate floor value
                                               // floor variable + 1 to narrow the range
                                            // narrowing the range between 1 and 6
var diceName1 = "dice" + random1 + ".png"  // generate dice by concatenating with string


var dice1 = "./images/" + diceName1   // concatenate with another string using ./images/

// now range of dices is = "./images/dice1.png" to "./images/dice2.png"

document.querySelector(".img1").setAttribute("src", dice1)  // everytime website is refreshed
// we get randomly assigned dice images, change all attributes when refreshed

var randomVariable2 = Math.random()*6;  // again range between 0 to 6
var random2 = Math.floor(randomVariable2) + 1; // now ranged between 1 to 6
var diceName2 = "./images/dice" + random2 + ".png"

document.querySelector(".img2").setAttribute("src", diceName2); // changing for second dice


if(random1 > random2){
    document.querySelector("h1").innerHTML = " &#128681Player 1 Wins!"
}

 if(random1< random2){
    document.querySelector("h1").innerHTML = " &#128681Player 2 Wins!"
}

 if(random1===random2){
    document.querySelector("h1").innerHTML = "Draw!"
}

