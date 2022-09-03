export const js_struct = {
	'[struct]: Add to queue -> array': {
		prefix: 'bbeo-js-struct-addToQueue',
		body: ['${1:array_var}.push(${2:e})'],
		description: '[struct]: Add to queue -> array',
	},
	'[struct]: Add to head -> array': {
		prefix: 'bbeo-js-struct-addToHead',
		body: ['${1:array_var}.unshift(${2:e})'],
		description: '[struct]: Add to head -> array',
	},
	'[struct]: Delete at tail -> array': {
		prefix: 'bbeo-js-struct-deleteAtTail',
		body: ['${1:array_var}.pop(${2:e})'],
		description: '[struct]: Delete at tail -> array',
	},
	'[struct]: Delete at head -> array': {
		prefix: 'bbeo-js-struct-deleteAtHead',
		body: ['${1:array_var}.shift(${2:e})'],
		description: '[struct]: Delete at head -> array',
	},
};
