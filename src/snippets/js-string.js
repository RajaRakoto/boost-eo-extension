export const js_string = {
	"[string]: Replace single occurrence of value -> string": {
		prefix: "bbeo-string-replace",
		body: ["${1:string}.replace(${2:'input'}, ${3:'output'})"],
		description: "[string]: Replace single occurrence of value -> string",
	},
	"[string]: Replace all occurrences of value -> string": {
		prefix: "bbeo-string-replaceAll",
		body: ["${1:string}.replaceAll(${2:'input'}, ${3:'output'})"],
		description: "[string]: Replace all occurrences of value -> string",
	},
	"[string]: Split string into array by delimiter -> array": {
		prefix: "bbeo-string-split",
		body: ["${1:string}.split(${2:'delimiter'})"],
		description: "[string]: Split string into array -> array",
	},
	"[string]: Split a string [start, end+1] -> string": {
		prefix: "bbeo-string-sub",
		body: ["${1:string}.substr(${2:start}, ${3:end+1})"],
		description: "[string]: Split a string [start, end+1] -> string",
	},
	"[string]: Repeat a string N times -> string": {
		prefix: "bbeo-string-repeat",
		body: ["${1:string}.repeat(${2:N})"],
		description: "[string]: Repeat a string N times -> string",
	},
	"[string]: Remove the white space at the beginning and at the end of a string -> string":
		{
			prefix: "bbeo-string-trim",
			body: ["${1:string}.trim()"],
			description:
				"[string]: Remove the white space at the beginning and at the end of a string -> string",
		},
	"[string]: Get chatAt index -> string": {
		prefix: "bbeo-string-charAt",
		body: ["${1:string}.charAt(${2:index})"],
		description: "[string]: Get chatAt index -> string",
	},
	"[string]: Check start of a string -> boolean": {
		prefix: "bbeo-string-startsWith",
		body: ["${1:string}.startsWith(${2:input}, ${3:start_index})"],
		description: "[string]: Check start of a string -> boolean",
	},
	"[string]: Check end of a string -> boolean": {
		prefix: "bbeo-string-endsWith",
		body: ["${1:string}.endsWith(${2:input}, ${3:end_index})"],
		description: "[string]: Check end of a string -> boolean",
	},
	"[string]: String to lower case -> string": {
		prefix: "bbeo-string-toLowerCase",
		body: ["${1:string}.toLowerCase()"],
		description: "[string]: String to lower case -> string",
	},
	"[string]: String to upper case -> string": {
		prefix: "bbeo-string-toUpperCase",
		body: ["${1:string}.toUpperCase()"],
		description: "[string]: String to upper case -> string",
	},
	"[string]: Find index of element -> number": {
		prefix: "bbeo-string-indexOfElement",
		body: ["${1:string}.indexOf(${2:e})"],
		description: "[string]: Find index of element",
	},
	"[string]: Check the existence of an element -> boolean": {
		prefix: "bbeo-string-includesElement",
		body: ["${1:string}.includes(${2:e})"],
		description: "[string]: Check the existence of an element",
	},
	"[string]: Length of string -> number": {
		prefix: "bbeo-string-length",
		body: ["${1:string}.length"],
		description: "[string]: Length of string",
	},
	"[string]: Concatenate with another string -> string": {
		prefix: "bbeo-string-concat",
		body: ["${1:string}.concat(${2:string})"],
		description: "[string]: Concatenate with another string",
	},
};
