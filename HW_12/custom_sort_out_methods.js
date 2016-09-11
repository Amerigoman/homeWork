// custom forEach
function forEach(func, arr) {
	for(var i = 0; i < arr.length; i++) {
		func(arr[i], i, arr);
	}
}



// custom map
function map(func, arr) {
	var result = [];

	for(var i = 0; i < arr.length; i++) {
		result[i] = func(arr[i], i, arr);
	}

	return result;
}



// custom reduce
function reduce(func, arr, initValue) {
	var result = 0;

	var i = arguments.length === 3 ? initValue : 0;

	for(; i < arr.length; i++) {
		result = func(result, arr[i], i, arr);
	}

	return result;
}



// custom some
function some(func, arr) {
	var result = false;

	for(var i = 0; i < arr.length; i++) {
		result = func(arr[i], i, arr);
		if(result) break;
	}

	return result;
}



// custom every
function every(func, arr) {
	var result = true;

	for(var i = 0; i < arr.length; i++) {
		result = func(arr[i], i, arr);
		if(!result) break;
	}

	return result;
}