function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getMatrix(size, min, max) {
	var arr = [];

	for (var i = 0; i < size; i++) 
	{
		arr[i] = [];
		for (var j = 0; j < size; j++) 
		{
			arr[i].push(rand(min, max));
		}
	}	

	return arr;
}

function sumHourglassArea(arr) {
	var size = arr[0].length;
	var elemInArea = [];
	var wholeSum = 0, diagonalsSum = 0, sumV = 0, sumH = 0;
	var result = [];
	var center = Math.floor(size/2);
	var half = size/2;

	for (var i = 0; i < size; i++) 
	{
		for (var j = 0; j < size; j++) 
		{
			wholeSum += arr[i][j];

			if(i <= (half - 1) || (size%2 && i <= center))
			{
				if(j >= i && j <= size - 1 - i)
				{
					elemInArea.push(arr[i][j]);

					if(j === i || j === size - 1 - i)
					{
						diagonalsSum += arr[i][j];
					}
				}			
			} 
			else 
			{
				if(j >= size - 1 - i && j <= i)
				{
					elemInArea.push(arr[i][j]);

					if(j === size - 1 - i || j === i)
					{
						diagonalsSum += arr[i][j];
					}
				}
			}			
		}
	}

	for(i = 0; i < elemInArea.length; i++)
	{
		sumV += elemInArea[i];
	}

	sumH = wholeSum - sumV + diagonalsSum;

	result.push(sumV, sumH);

	return result;
}

// заполняем двумерный массив
var arr = getMatrix(4, 0, 10);
console.table(arr);

// сумма элементов, расположенных в области песочных часов
var result = sumHourglassArea(arr);
console.log('Сумма элементов в области песочных ' +
				'часов по вертикали: ' + result[0]);
console.log('Сумма элементов в области песочных ' +
				'часов по горизонтали: ' + result[1]);