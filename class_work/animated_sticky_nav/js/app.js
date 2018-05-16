$(window).scroll(changeHeader);

function changeHeader() {
	var userPos = $(window).scrollTop();

	if (userPos > 150) {
		console.log("greater than 150");
		$("header").addClass("red");
	} else {
		$("header").removeClass("red");
		console.log("less than 150");
	}

}