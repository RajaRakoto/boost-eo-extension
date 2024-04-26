export const js_array = {
	"[array]: (a0 -> b1) sort in ascending order -> array": {
		prefix: "bbeo-array-asc",
		body: ["${1:array}.sort((${2:a},${3:b}) => ${2:a} - ${3:b})"],
		description: "[array]: (a0 -> b1) sort in ascending order -> array",
	},
	"[array]: (b1 -> a0) sort in descending order -> array": {
		prefix: "bbeo-array-desc",
		body: ["${1:array}.sort((${2:a},${3:b}) => ${3:b} - ${2:a})"],
		description: "[array]: (b1 -> a0) sort in descending order -> array",
	},
	"[array]: Split an array [start, end+1] -> array": {
		prefix: "bbeo-array-slice",
		body: ["${1:array}.slice(${2:start}, ${3:end+1})"],
		description: "[array]: split an array [n, n+1] -> array",
	},
	"[array]: Join an array from a delimiter to get a string -> string": {
		prefix: "bbeo-array-join",
		body: ["${1:array}.join(${2:delimiter})"],
		description:
			"[array]: join an array from a delimiter to get a string -> string",
	},
	"[array]: Flatten the elements of a nested array to a specific depth -> array":
		{
			prefix: "bbeo-array-flat",
			body: ["${1:array}.flat(${2:depth})"],
			description:
				"[array]: Flatten the elements of a nested array to a specific depth -> array",
		},
	"[array]: Check if an array is empty -> boolean": {
		prefix: "bbeo-array-isEmpty",
		body: ["${1:array}.length === 0 ? true : false"],
		description: "[array]: Check if an array is empty -> boolean",
	},
	"[array]: Remove duplicates from an array -> array": {
		prefix: "bbeo-array-removeDuplicates",
		body: ["[...new Set(${1:array})]"],
		description: "[array]: Remove duplicates from an array -> array",
	},
	"[array]: Reverse all element in an array -> array": {
		prefix: "bbeo-array-reverse",
		body: ["${1:array}.reverse()"],
		description: "[array]: Reverse all element in an array -> array",
	},
	"[array]: Search a specific element -> array": {
		prefix: "bbeo-array-find",
		body: ["${1:array}.find(${2:element} => ${2:element} ${3:===} ${4:foo})"],
		description: "[array]: Search a specific element -> array",
	},
	"[array]: Check one or more specific element.s of an array (no size modification) -> boolean":
		{
			prefix: "bbeo-array-some",
			body: ["${1:array}.some(${2:element} => ${2:element} ${3:===} ${4:foo})"],
			description:
				"[array]: Check one or more specific element.s of an array (no size modification) -> boolean",
		},
	"[array]: Check the integrity of the elements of an array (no size modification) -> boolean":
		{
			prefix: "bbeo-array-every",
			body: [
				"${1:array}.every(${2:element} => ${2:element} ${3:===} ${4:foo})",
			],
			description:
				"[array]: Check the integrity of the elements of an array (no size modification) -> boolean",
		},
	"[array]: Processing of different element of the array (no modification of the size) -> array":
		{
			prefix: "bbeo-array-map",
			body: ["${1:array}.map(${2:element} => {${3:expression}})"],
			description:
				"[array]: Processing of different element of the array (no modification of the size) -> array",
		},
	"[array]: Filter the element of an array (size modification) -> array": {
		prefix: "bbeo-array-filter",
		body: ["${1:array}.filter(${2:element} => {${3:condition}})"],
		description:
			"[array]: Filter the element of an array (size modification) -> array",
	},
	"[array]: Processing each element of the array to obtain a single value -> number":
		{
			prefix: "bbeo-array-reduce",
			body: [
				"${1:array}.reduce((${2:total, element}) => {${3:total + element}})",
			],
			description:
				"[array]: Processing each element of the array to obtain a single value -> number",
		},
	"[array]: Fill an array with a static value -> array": {
		prefix: "bbeo-array-fill",
		body: ["${1:array}.fill(${2:start_index},${3:foo})"],
		description: "[array]: Fill an array with a static value -> array",
	},
	"[array]: Browse the elements of an array -> any": {
		prefix: "bbeo-array-foreach",
		body: [
			"${1:array}.forEach((${2:element}) => {",
			"    ${3:expression}",
			"})",
		],
		description: "[array]: Browse the elements of an array -> any",
	},
	"[array]: Find index of element -> number": {
		prefix: "bbeo-array-indexOf",
		body: ["${1:array}.indexOf(${2:element})"],
		description: "[array]: Find index of element",
	},
	"[array]: Check the existence of an element -> boolean": {
		prefix: "bbeo-array-includes",
		body: ["${1:array}.includes(${2:element})"],
		description: "[array]: Check the existence of an element",
	},
	"[array]: Length of array -> number": {
		prefix: "bbeo-array-length",
		body: ["${1:array}.length"],
		description: "[array]: Length of array",
	},
	"[array]: Concatenate with another array -> array": {
		prefix: "bbeo-array-concat",
		body: ["${1:array}.concat(${2:array})"],
		description: "[array]: Concatenate with another array",
	},
	"[array]: Add to queue -> array": {
		prefix: "bbeo-array-addToQueue",
		body: ["${1:array}.push(${2:element})"],
		description: "[array]: Add to queue -> array",
	},
	"[array]: Add to head -> array": {
		prefix: "bbeo-array-addToHead",
		body: ["${1:array}.unshift(${2:element})"],
		description: "[array]: Add to head -> array",
	},
	"[array]: Delete at tail -> array": {
		prefix: "bbeo-array-deleteAtTail",
		body: ["${1:array}.pop(${2:element})"],
		description: "[array]: Delete at tail -> array",
	},
	"[array]: Delete at head -> array": {
		prefix: "bbeo-array-deleteAtHead",
		body: ["${1:array}.shift(${2:element})"],
		description: "[array]: Delete at head -> array",
	},
};
