function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var min = 1;
var max = 21;
var arr = [];

for(var i = 0; i < 30; i++)
{
	arr.push(rand(min, max));
}

var desiredNumber = rand(min, max);

for(i = 0; i < arr.length; i++)
{
	if(desiredNumber === arr[i])
	{
		alert('Сгенерированное число (от ' + min + ' до ' + (max - 1) + ') :: ' + 
			desiredNumber + '\nИндекс элемента :: ' + i);
		break;
	}
}

if(i === arr.length)
{
	alert(-1);
}