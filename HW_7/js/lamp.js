var logic = [];
var state = [];
var oper;
var operand1;
var operand2;

function bulbCondition(obj) {
	for (var key in obj) {
		
		if (typeof obj[key] == 'object' && obj['children'] != undefined) {
			bulbCondition(obj[key]);
			oper = logic.pop();

			if(oper == 'AND') {
				operand1 = state.pop();
				operand2 = state.pop();				

				if(operand1 && operand2) {
					state.push(1);
				} else {
					state.push(0);
				}
			} else if(oper == 'XOR') {
				operand1 = state.pop();
				operand2 = state.pop();

				if(operand1 ^ operand2) {
					state.push(1);
				} else {
					state.push(0);
				}
			} else if(oper == 'OR') {
				operand1 = state.pop();
				operand2 = state.pop();

				if(operand1 || operand2) {
					state.push(1);
				} else {
					state.push(0);
				}				
			} else if(oper == 'NOT') {
				operand1 = state.pop();

				if(!operand1) {
					state.push(1);
				} else {
					state.push(0);
				}
			}
		} else if (typeof obj[key] == 'object') {
			bulbCondition(obj[key]);
		} else if (obj[key] == 'Gate') {
			logic.push(obj['type']);
			bulbCondition(obj[key]);
		} else if (obj[key] == 'Switch') {
			state.push(obj['state']);
		}
	}

	return state[0];
}

console.log('Signal on bulb element 1 :: ' + bulbCondition(scheme1));
state = [];
console.log('Signal on bulb element 2 :: ' + bulbCondition(scheme2));
state = [];
console.log('Signal on bulb element 3 :: ' + bulbCondition(scheme3));