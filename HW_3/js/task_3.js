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

function perimeterAnticlockwise(arr) {
	var result = [];
	var size = arr[0].length;
	var left = [], bottom = [], right = [], top = [];

	for (var i = 0; i < size; i++) 
	{
		for (var j = 0; j < size; j++) 
		{
			if(i === 0)
			{
				left.push(arr[j][i]);

				if(j !== 0 && j !== size - 1)
				{
					top.push(arr[i][j]);
				}
			}
			else if(i === size - 1)
			{
				right.push(arr[j][i]);

				if(j !== 0 && j !== size - 1)
				{
					bottom.push(arr[i][j]);
				}
			}
		}
	}
	result = left.concat(bottom, right.reverse(), top.reverse());

	return result;
}

function perimeterMainDiagonal(arr) {
	var result = [];
	var size = arr[0].length;
	var diagonal = [], right = [], top = [];

	for (var i = 0; i < size; i++) 
	{
		for (var j = 0; j < size; j++) 
		{
			if(i === 0)
			{
				top.push(arr[i][j]);
			}
			else if(i === size - 1 && j !== 0)
			{
				right.push(arr[j][i]);
			}
			else
			{
				if(i === j)
				{
					diagonal.push(arr[i][j]);
				}
			}
		}
	}
	result = top.concat(right, diagonal.reverse());

	return result;
}

function perimeterSecondaryDiagonal(arr) {
	var result = [];
	var size = arr[0].length;
	var diagonal = [], left = [], top = [];

	for (var i = 0; i < size; i++) 
	{
		for (var j = 0; j < size; j++) 
		{
			if(i === 0)
			{
				top.push(arr[i][j]);
				if(j !== 0)
				{
					left.push(arr[j][i]);
				}				
			}
			else if(i !== size - 1 && (i + j) === size - 1)
			{
				diagonal.push(arr[i][size - 1 - i]);
			}
		}
	}
	result = top.concat(diagonal, left.reverse());

	return result;
}

// заполняем двумерный массив
var arr = getMatrix(5, 0, 10);
console.table(arr);

// периметр против часовой стрелки
console.log('Периметр против часовой стрелки: ');
var result1 = perimeterAnticlockwise(arr);
console.log(result1.join(',  '));

/* стороны треугольника, образованного двумя 
сторонами периметра и главной диагональю 
(направление движения - по часовой стрелке)*/
console.log('Cтороны треугольника, образованного двумя ' +
				'сторонами периметра и главной диагональю : ');
var result2 = perimeterMainDiagonal(arr);
console.log(result2.join(',  '));

/* стороны треугольника, образованного двумя 
сторонами периметра и побочной диагональю
(направление движения - по часовой стрелке)*/
console.log('Cтороны треугольника, образованного двумя ' +
				'сторонами периметра и побочной диагональю : ');
var result3 = perimeterSecondaryDiagonal(arr);
console.log(result3.join(',  '));