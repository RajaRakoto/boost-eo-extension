export const js_gen = {
	'[gen]: Swap 2 values ​​from 2 variables': {
		prefix: 'bbeo-js-gen-permut',
		body: ['[${1:a},${2:b}] = [${2:b},${1:a}]'],
		description: '[gen]: Swap 2 values ​​from 2 variables',
	},
	'[gen]: Id generator': {
		prefix: 'bbeo-js-gen-idgen',
		body: [
			'let ${1:id_name} = idMaker()',
			'${1:id_name}.next().value  // → 0',
			'${1:id_name}.next().value  // → 1',
			'${1:id_name}.next().value  // → 2',
		],
		description: '[gen]: Id generator',
	},
	'[gen]: Alphabet generator': {
		prefix: 'bbeo-js-gen-alphagen',
		body: ['String.fromCharCode(...Array(123).keys()).slice(97)'],
		description: '[gen]: Alphabet generator',
	},
	'[gen]: Number generator': {
		prefix: 'bbeo-js-gen-numgen',
		body: ['[...Array(${1:min(0)~max(n+1)})].map((_, i) => i); '],
		description: '[gen]: Number generator',
	},
};
