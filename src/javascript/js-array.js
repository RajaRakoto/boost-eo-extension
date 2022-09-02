export const js_array = {
	'[array]: (a0 -> b1) sort in ascending order -> array': {
		prefix: 'bbeo-js-array-ascElement',
		body: ['${1:array_var}.sort((${2:a},${3:b}) => ${2:a} - ${3:b})'],
		description: '[array]: (a0 -> b1) sort in ascending order -> array',
	},
	'[array]: (b1 -> a0) sort in descending order -> array': {
		prefix: 'bbeo-js-array-descElement',
		body: ['${1:array_var}.sort((${2:a},${3:b}) => ${3:b} - ${2:a})'],
		description: '[array]: (b1 -> a0) sort in descending order -> array',
	},
	'[array]: Split an array [start, end+1] -> array': {
		prefix: 'bbeo-js-array-slice',
		body: ['${1:array_var}.slice(${2:start}, ${3:end+1})'],
		description: '[array]: split an array [n, n+1] -> array',
	},
	'[array]: Join an array from a delimiter to get a string -> string': {
		prefix: 'bbeo-js-array-join',
		body: ['${1:array_var}.join(${2:delimiter})'],
		description:
			'[array]: join an array from a delimiter to get a string -> string',
	},
	'[array]: Flatten the elements of a nested array to a specific depth -> array':
		{
			prefix: 'bbeo-js-array-flat',
			body: ['${1:array_var}.flat(${2:depth})'],
			description:
				'[array]: Flatten the elements of a nested array to a specific depth -> array',
		},
	'[array]: Check if an array is empty -> boolean': {
		prefix: 'bbeo-js-array-isEmpty',
		body: ['${1:array_var}.length === 0 ? true : false'],
		description: '[array]: Check if an array is empty -> boolean',
	},
	'[array]: Remove duplicates from an array -> array': {
		prefix: 'bbeo-array-removeDuplicates',
		body: ['[...new Set(${1:array_var})]'],
		description: '[array]: Remove duplicates from an array -> array',
	},
};
