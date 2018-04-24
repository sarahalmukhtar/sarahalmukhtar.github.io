// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

$(".thumb").click(changeImg);
// $("#second").click(changeImg);
// $("#third").click(changeImg);
// $("#fourth").click(changeImg);

function changeImg(event) {
	// console.log(event.target);
	var newSrc = $(event.target).attr("src");
	$("#bigimage").attr("src", newSrc);
}

// function secondImg() {
// 	$("#bigimage").attr("src", "img/2.jpg");
// }

// function thirdImg() {
// 	$("#bigimage").attr("src", "img/3.jpg");
// }

// function fourthImg() {
// 	$("#bigimage").attr("src", "img/4.jpg");
// }
