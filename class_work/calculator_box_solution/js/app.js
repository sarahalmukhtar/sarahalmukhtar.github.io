var total = 0;

function setOutput() {
	$("#out").html(total);
}

// +10

$("#a10").click(addTen);

function addTen() {
	total = total + 10;

	setOutput();
}

// +20

$("#a20").click(addTwenty);

function addTwenty() {
	total = total + 20;
	
	setOutput();
}

// +30

$("#a30").click(addThirty);

function addThirty() {
	total = total + 30;

	setOutput();
}

// -10

$("#n10").click(subtractTen);

function subtractTen() {
	total = total - 10;

	setOutput();
}


// -20

$("#n20").click(subtractTwenty);

function subtractTwenty() {
	total = total - 20;

	setOutput();
}

// -30

$("#n30").click(subtractThirty);

function subtractThirty() {
	total = total - 30;

	setOutput();
}

// red

$("#red").click(turnRed);

function turnRed() {
	$("#out").css("background", "red");
}

// blue

$("#blue").click(turnBlue);

function turnBlue() {
	$("#out").css("background", "blue");
}

// reset

$("#out").click(reset);

function reset() {
	total = 0;

	$("#out").html(total);
	$("#out").css("background", "white");
}
