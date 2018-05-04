// As a user
// When I change my selection
// I expect the background image to change into the image of my selection

$("#city-type").change(changeImg);

function changeImg() {
    var newClass = $("#city-type").val();
    $("body").removeClass();
    $("body").addClass(newClass);
}