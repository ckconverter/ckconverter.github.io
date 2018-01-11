function clickOn(clickOnThing,clickCode) {
	$(clickOnThing).on('click', function() {
		clickCode
	});
}
