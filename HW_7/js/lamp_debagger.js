var scheme1 = {
		name: 'Gate',
		type: 'XOR',
		children: [{
			name: 'Gate',
			type: 'AND',
			children: [{
				name: 'Switch',
				type: 'ON',
				state: 1
			}, {
				name: 'Switch',
				type: 'OFF',
				state: 0
			}]
		}, 
		{
			name: 'Gate',
			type: 'NOT',
			children: [{
				name: 'Switch',
				type: 'ON',
				state: 1
			}]
		}]
	},

scheme2 = {
	name: 'Gate',
	type: 'AND',
	children: [{
		name: 'Gate',
		type: 'OR',
		children: [{
			name: 'Switch',
			type: 'ON',
			state: 1
		}, {
			name: 'Gate',
			type: 'XOR',
			children: [{
				name: 'Switch',
				type: 'OFF',
				state: 0
			}, {
				name: 'Gate',
				type: 'NOT',
				children: [{
					name: 'Switch',
					type: 'ON',
					state: 1
				}]
			}]
		}]
	}, {
		name: 'Gate',
		type: 'NOT',
		children: [{
			name: 'Switch',
			type: 'ON',
			state: 1
		}]
	}]
},

scheme3 = {
	name: 'Gate',
	type: 'XOR',

	children: [{
		name: 'Gate',
		type: 'NOT',
		children: [{
			name: 'Switch',
			type: 'OFF',
			state: 0
		}]
	}, {
		name: 'Gate',
		type: 'OR',
		children: [{
			name: 'Gate',
			type: 'OR',
			children: [{
				name: 'Switch',
				type: 'OFF',
				state: 0
			}, {
				name: 'Gate',
				type: 'AND',
				children: [{
					name: 'Switch',
					type: 'OFF',
					state: 0
				}, {
					name: 'Switch',
					type: 'ON',
					state: 1
				}]
			}]
		}, {
			name: 'Switch',
			type: 'OFF',
			state: 0
		}]
	}]
};

var logic = [];
var state = [];
var oper;
var operand1;
var operand2;

function bulbCondition(obj) {
	for (var key in obj) {
		
		if (typeof obj[key] == 'object' && obj['children'] != undefined) {
			bulbCondition(obj[key]);
			console.log(logic);
			oper = logic.pop();
			console.log(logic);

			if(oper == 'AND') {
				operand1 = state.pop();
				operand2 = state.pop();				
				console.log(oper + ' ' + operand1 + ' ' + operand2);

				if(operand1 && operand2) {
					state.push(1);
				} else {
					state.push(0);
				}
			} else if(oper == 'XOR') {
				operand1 = state.pop();
				operand2 = state.pop();
				console.log(oper + ' ' + operand1 + ' ' + operand2);

				if(operand1 ^ operand2) {
					state.push(1);
				} else {
					state.push(0);
				}
			} else if(oper == 'OR') {
				operand1 = state.pop();
				operand2 = state.pop();
				console.log(oper + ' ' + operand1 + ' ' + operand2);

				if(operand1 || operand2) {
					state.push(1);
				} else {
					state.push(0);
				}				
			} else if(oper == 'NOT') {
				operand1 = state.pop();
				console.log(oper + ' ' + operand1);

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
}

bulbCondition(scheme3);
console.log(state);
console.log(logic);