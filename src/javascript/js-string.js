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
	'[string]: Repeat a string N times -> string': {
		prefix: 'bbeo-js-string-repeat',
		body: ['${1:string_var}.repeat(${2:N})'],
		description: '[string]: Repeat a string N times -> string',
	},
	'[string]: Remove the white space at the beginning and at the end of a string -> string':
		{
			prefix: 'bbeo-js-string-trim',
			body: ['${1:string_var}.trim()'],
			description:
				'[string]: Remove the white space at the beginning and at the end of a string -> string',
		},
	'[string]: Get chatAt index -> string': {
		prefix: 'bbeo-js-string-charAt',
		body: ['${1:string_var}.charAt(${2:index})'],
		description: '[string]: Get chatAt index -> string',
	},
	'[string]: Check start of a string -> boolean': {
		prefix: 'bbeo-js-string-startsWith',
		body: ['${1:string_var}.startsWith(${2:input}, ${3:start_index})'],
		description: '[string]: Check start of a string -> boolean',
	},
	'[string]: Check end of a string -> boolean': {
		prefix: 'bbeo-js-string-endsWith',
		body: ['${1:string_var}.endsWith(${2:input}, ${3:end_index})'],
		description: '[string]: Check end of a string -> boolean',
	},
};
