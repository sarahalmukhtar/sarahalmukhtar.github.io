// clicking the "Red" button turns the center red
var redButton = document.querySelector("#red");

redButton.onclick = colorRed;

function colorRed() {
    var red = "red";
    document.querySelector("#out").style.background = red;
}


// clicking the "Blue" button turns the center blue
var blueButton = document.querySelector("#blue");

blueButton.onclick = colorBlue;

function colorBlue() {
    var blue = "blue";
    document.querySelector("#out").style.background = blue;
}


// clicking the + buttons adds to the value of the center
var plusTenButton = document.querySelector("#a10");
var plusTwentyButton = document.querySelector("#a20");
var plusThirtyButton = document.querySelector("#a30");
var minusTenButton = document.querySelector("#n10");
var minusTwentyButton = document.querySelector("#n20");
var minusThirtyButton = document.querySelector("#n30");

plusTenButton.onclick = addTen;
plusTwentyButton.onclick = addTwenty;
plusThirtyButton.onclick = addThirty;
minusTenButton.onclick = subtractTen;
minusTwentyButton.onclick = subtractTwenty;
minusThirtyButton.onclick = subtractThirty;

function addTen() {
    var base = document.querySelector("#out").innerHTML;

    document.querySelector("#out").innerHTML = parseInt(base) + 10;
}

function addTwenty() {
    var base = document.querySelector("#out").innerHTML;

    document.querySelector("#out").innerHTML = parseInt(base) + 20;
}

function addThirty() {
    var base = document.querySelector("#out").innerHTML;

    document.querySelector("#out").innerHTML = parseInt(base) + 30;
}

function subtractTen() {
    var base = document.querySelector("#out").innerHTML;

    document.querySelector("#out").innerHTML = parseInt(base) - 10;
}

function subtractTwenty() {
    var base = document.querySelector("#out").innerHTML;

    document.querySelector("#out").innerHTML = parseInt(base) - 20;
}

function subtractThirty() {
    var base = document.querySelector("#out").innerHTML;

    document.querySelector("#out").innerHTML = parseInt(base) - 30;
}