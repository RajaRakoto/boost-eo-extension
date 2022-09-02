export const js_hybrid = {
	'[hybr]: Find index of element -> number': {
		prefix: 'bbeo-js-hybrid-indexOfElement',
		body: ['${1:hybr_var}.indexOf(${2:e})'],
		description: '[hybr]: Find index of element',
	},
	'[hybr]: Check the existence of an element -> boolean': {
		prefix: 'bbeo-js-hybrid-includesElement',
		body: ['${1:hybr_var}.includes(${2:e})'],
		description: '[hybr]: Check the existence of an element',
	},

};
