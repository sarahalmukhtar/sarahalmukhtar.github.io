// As a user
// When I click on the row
// I expect to see the text appear underneath

$(".row").click(toggleText);

function toggleText(event) {
	$(event.currentTarget).find(".wrapper").slideToggle();
}

// As a user
// When I click on an opened row
// I expect to see the text disappear

// It should animate like this: https://imgur.com/ivlcesG

// Hint: remember traversal (parent, child) and event arguments
// Also, might be worth looking into event.target vs. event.currentTarget

// Extra Credit:
// 
// As a user
// When I click on an opened row
// I expect the text to disappear more slowly than how it appeared