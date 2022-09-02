export const js_math = {
	'[math]: Format a number in fixed-dot notation -> number': {
		prefix: 'bbeo-js-math-dot',
		body: ['${1:number_var}.toFixed(${2:decal})'],
		description: '[math]: Format a number in fixed-dot notation -> number',
	},
	'[math]: Power of number': {
		prefix: 'bbeo-js-math-pow',
		body: ['${1:number_var} ** ${2:exp}'],
		description: '[math]: Power of number',
	},
	'[math]: Get MAX element': {
		prefix: 'bbeo-js-math-max',
		body: ['Math.max(... ${1: element})'],
		description: '[math]: Get MAX element',
	},
	'[math]: Get MIN element': {
		prefix: 'bbeo-js-math-min',
		body: ['Math.min(... ${1: element})'],
		description: '[math]: Get MAX element',
	},
	'[math]: Get exponent of a number': {
		prefix: 'bbeo-js-math-expOfNumber',
		body: ['Math.log(${solution})/Math.log(${base})'],
		description: '[math]: Get exponent of a number',
	},
};
