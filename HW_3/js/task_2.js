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

function sameElementsInBothArray(arr1, arr2) {
	var result = [];
	var equal = false;

	for(var i = 0; i < arr1.length; i++)
	{
		for(var j = 0; j < arr2.length; j++)
		{
			if(arr1[i] === arr2[j])
			{
				for(var r = 0; r < result.length; r++)
				{
					if(arr1[i] === result[r])
					{
						equal = true;
					}
				}

				if(!equal)
				{
					result.push(arr1[i]);
					break;
				}
			}
		}
	}

	return result;
}

arr1 = getRandomArray(10, 0, 10);
arr2 = getRandomArray(10, 0, 10);

//  числа, которые одновременно присутствуют в обоих массивах
result = sameElementsInBothArray(arr1, arr2);

console.log(arr1);
console.log(arr2);
console.log(result);