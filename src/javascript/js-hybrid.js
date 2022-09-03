export const js_hybrid = {
	'[hybrid]: Find index of element -> number': {
		prefix: 'bbeo-js-hybrid-indexOfElement',
		body: ['${1:hybr_var}.indexOf(${2:e})'],
		description: '[hybrid]: Find index of element',
	},
	'[hybrid]: Check the existence of an element -> boolean': {
		prefix: 'bbeo-js-hybrid-includesElement',
		body: ['${1:hybr_var}.includes(${2:e})'],
		description: '[hybrid]: Check the existence of an element',
	},
	'[hybrid]: Length of string/array -> number': {
		prefix: 'bbeo-js-hybrid-length',
		body: ['${1:hybr_var}.length'],
		description: '[hybrid]: Length of string/array',
	},
};
