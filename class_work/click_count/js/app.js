// As a user
// When I click anywhere on the page
// I expect the click counter to increase by 1


// As a user
// When the click counter reaches 5
// I expect the background of the body to be red


// As a user
// When the click counter reaches 10
// I expect the background of the body to be green


// As a user
// When the click counter reaches 15
// I expect the background of the body to be blue

var number = 0;

$("#clickme").click(clickCount);

function clickCount() {
	number += 1;
	$("#click-num").html(number);

	if (number === 5) {
		$("body").css("background-color", "red");
	} else if (number === 10) {
		$("body").css("background-color", "green");
	} else if (number === 15) {
		$("body").css("background-color", "blue");
	}
}
