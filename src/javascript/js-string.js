export const js_string = {
	'[string]: Replace single occurrence of value -> string': {
		prefix: 'bbeo-js-string-replace',
		body: ["${1:string_var}.replace(${2:'input'}, ${3:'output'})"],
		description: '[string]: Replace single occurrence of value -> string',
	},
	'[string]: Replace all occurrences of value -> string': {
		prefix: 'bbeo-js-string-replaceAll',
		body: ["${1:string_var}.replaceAll(${2:'input'}, ${3:'output'})"],
		description: '[string]: Replace all occurrences of value -> string',
	},
	'[string]: Split string into array by delimiter -> array': {
		prefix: 'bbeo-js-string-split',
		body: ["${1:string_var}.split(${2:'delimiter'})"],
		description: '[string]: Split string into array -> array',
	},
	'[string]: Split a string [start, end+1] -> string': {
		prefix: 'bbeo-js-string-sub',
		body: ['${1:string_var}.substr(${2:start}, ${3:end+1})'],
		description: '[string]: Split a string [start, end+1] -> string',
	},
};
