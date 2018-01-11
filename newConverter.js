function clickOn(clickOnThing,clickCode) {
	$(clickOnThing).on('click', function() {
		clickCode
	});
}

//hide or show stuff functions
function hideThis(thingToHide) {
	$(thingToHide).hide();
}
function showThis(thingToShow) {
	$(thingToShow).show();
}

$(document).ready(function() {
	//hiding stuff at the beginning
	hideThis('#back');
	hideThis('#fromHeading');
	hideThis('#toHeading');
	hideThis('.temperature');
	hideThis('.distance');
	hideThis('.pressure');
});
