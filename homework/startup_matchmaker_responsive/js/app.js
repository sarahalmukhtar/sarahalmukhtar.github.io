$("#burger").click(function() {
	$("#mobile-nav").slideToggle();
})

$(window).resize(hideNav);

function hideNav() {
	//when width is greater than 1024px
	// hide the mobile nav

	var width = $(window).width();

	if (width > 1024) {
		$("#mobile-nav").hide();
	}
}