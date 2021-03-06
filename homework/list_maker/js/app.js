// As a user
// When I enter an item in the input and click the button
// I expect to see a new item in the list

// As a user
// Once I have added an item to the list
// I expect the input to be empty


$("#clickme").click(function() {
	var text = $("#item").val();
	var output = "<li>" + text + "</li>";
	$("#list").append(output);
	$("#item").val("").focus();
	//^chained function

	if (text === "") {
		alert("Please input an item!");
	}
	//having the if statement at the bottom means it's still doing all the steps and therefore appending even though it's empty
})


$("ul").click(function remove(event) {
	$(event.target).remove();
})



// Bonus:

// As a user
// Once I have added an item to the list
// I expect the prompt to be focused on the input

// Harder Bonus:

// As a user
// When I try to add a blank item
// I expect to see an alert telling me to add an item

// Legendary Bonus:

// As a user
// When I click on an item I have already added
// I expect it to be removed from the list