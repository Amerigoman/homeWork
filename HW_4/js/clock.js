function formatDate(date, counter) {
	var now = new Date(date);
	now.setSeconds(date.getSeconds() + counter);
	
	var dd = now.getDate();
	if(dd < 10) dd = '0' + dd;

	var mm = now.getMonth() + 1;
	if(mm < 10) mm = '0' + mm;

	var yy = now.getFullYear() % 100;
	if (yy < 10) yy = '0' + yy;

	var hh = now.getHours();
	if (hh < 10) hh = '0' + hh;

	var min = now.getMinutes();
	if (min < 10) min = '0' + min;

	var ss = now.getSeconds();
	if (ss < 10) ss = '0' + ss;

	return dd + '.' + mm + '.' + yy + ' / ' + hh + ':' + min + ':' + ss;
}

(function() {
	var d = new Date();

	for (var i = 1; i <= 1000; i++) {
		(function(index) {
			setTimeout(function() {
				console.clear();
				console.log(formatDate(d, index));
			}, 1000 * i);
		})(i);
	}
})();