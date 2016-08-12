function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function duplicateValue(mass) {
	var result = [];
	var equal;

	for(var i = 0; i < mass.length - 1; i++)
	{
		equal = false;

		for(var j = i + 1; j < mass.length; j++)
		{
			if(mass[i] === mass[j])
			{
				for(var k = 0; k < result.length; k++)
				{
					if(mass[i] === result[k])
					{
						equal = true;
						break;
					}
				}

				if(!equal)
				{
					result.push(mass[i]);
					break;
				}
			}
		}
	}

	return result;
}

var min = 1;
var max = 20;
var arr = [];

for(var i = 0; i < 30; i++)
{
	arr.push(rand(min, max));
}

console.log('array ::          ' + arr);
console.log('duplicateValue :: ' + duplicateValue(arr));

alert(duplicateValue(arr).join(',  '));