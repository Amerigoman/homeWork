function rand (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArray(size, min, max) {
	min = min || 0;
	max = max || 100;
	var arr = [];
	for (var i = 0; i < size; i++) 
	{
		var randomValue = rand(min, max);
    	arr.push(randomValue);
	}
	return arr;
}

function isAllElementsDiff(arr) {
	var result = true;

	for(var i = 0; i < arr.length - 1; i++)
	{
		for(var j = 1 + i; j < arr.length; j++)
		{
			if(arr[i] === arr[j])
			{
				result = false;
			}
		}
	}

	return result;
}

var arr = getRandomArray(10, 0, 50);

console.log('Вывод массива из начала в конец: ');
for(var i = 0; i < arr.length; i++)
{
	console.log(arr[i]);
}

console.log('Вывод массива с конца к началу: ');
for(i = 0; i < arr.length; i++)
{
	console.log(arr[arr.length - 1 - i]);
}

console.log('Вывод каждого второго элемента массива: ');
for(i = 1; i < arr.length; i += 2)
{
	console.log(arr[i]);
}

console.log('Вывод каждого второго элемента массива в обратном порядке: ');
for(i = arr.length - 2; i >= 0; i -= 2)
{
	console.log(arr[i]);
}

console.log('Все элементы массива различны :: ' + isAllElementsDiff(arr));