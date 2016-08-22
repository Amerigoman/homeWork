(function() {
	var army = [];

	for (var i = 0; i < 10; i++) {
		(function(index) {
			army.push(function() {
			console.log('Function ' + index);
			});
		})(i);
	}

	for (var i = 0; i < 10; i++) {
		army[i]();
	}
})();