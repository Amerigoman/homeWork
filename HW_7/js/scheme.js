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