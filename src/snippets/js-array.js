export const js_array = {
	"[array]: (a0 -> b1) sort in ascending order -> array": {
		prefix: "bbeo-array-ascElement",
		body: ["${1:array_var}.sort((${2:a},${3:b}) => ${2:a} - ${3:b})"],
		description: "[array]: (a0 -> b1) sort in ascending order -> array",
	},
	"[array]: (b1 -> a0) sort in descending order -> array": {
		prefix: "bbeo-array-descElement",
		body: ["${1:array_var}.sort((${2:a},${3:b}) => ${3:b} - ${2:a})"],
		description: "[array]: (b1 -> a0) sort in descending order -> array",
	},
	"[array]: Split an array [start, end+1] -> array": {
		prefix: "bbeo-array-slice",
		body: ["${1:array_var}.slice(${2:start}, ${3:end+1})"],
		description: "[array]: split an array [n, n+1] -> array",
	},
	"[array]: Join an array from a delimiter to get a string -> string": {
		prefix: "bbeo-array-join",
		body: ["${1:array_var}.join(${2:delimiter})"],
		description:
			"[array]: join an array from a delimiter to get a string -> string",
	},
	"[array]: Flatten the elements of a nested array to a specific depth -> array":
		{
			prefix: "bbeo-array-flat",
			body: ["${1:array_var}.flat(${2:depth})"],
			description:
				"[array]: Flatten the elements of a nested array to a specific depth -> array",
		},
	"[array]: Check if an array is empty -> boolean": {
		prefix: "bbeo-array-isEmpty",
		body: ["${1:array_var}.length === 0 ? true : false"],
		description: "[array]: Check if an array is empty -> boolean",
	},
	"[array]: Remove duplicates from an array -> array": {
		prefix: "bbeo-array-removeDuplicates",
		body: ["[...new Set(${1:array_var})]"],
		description: "[array]: Remove duplicates from an array -> array",
	},
	"[array]: Reverse all element in an array -> array": {
		prefix: "bbeo-array-reverse",
		body: ["${1:array_var}.reverse()"],
		description: "[array]: Reverse all element in an array -> array",
	},
	"[array]: Search a specific element -> array": {
		prefix: "bbeo-array-findElement",
		body: ["${1:array_var}.find(${2:e} => ${2:e} ${3:===} ${4:foo})"],
		description: "[array]: Search a specific element -> array",
	},
	"[array]: Check one or more specific element.s of an array (no size modification) -> boolean":
		{
			prefix: "bbeo-array-someElement",
			body: ["${1:array_var}.some(${2:e} => ${2:e} ${3:===} ${4:foo})"],
			description:
				"[array]: Check one or more specific element.s of an array (no size modification) -> boolean",
		},
	"[array]: Check the integrity of the elements of an array (no size modification) -> boolean":
		{
			prefix: "bbeo-array-everyElement",
			body: ["${1:array_var}.every(${2:e} => ${2:e} ${3:===} ${4:foo})"],
			description:
				"[array]: Check the integrity of the elements of an array (no size modification) -> boolean",
		},
	"[array]: Processing of different element of the array (no modification of the size) -> array":
		{
			prefix: "bbeo-array-mapElement",
			body: ["${1:array_var}.map(${2:e} => {${3:expression}})"],
			description:
				"[array]: Processing of different element of the array (no modification of the size) -> array",
		},
	"[array]: Filter the element of an array (size modification) -> array": {
		prefix: "bbeo-array-filterElement",
		body: ["${1:array_var}.filter(${2:e} => {${3:condition}})"],
		description:
			"[array]: Filter the element of an array (size modification) -> array",
	},
	"[array]: Processing each element of the array to obtain a single value -> number":
		{
			prefix: "bbeo-array-reduceElement",
			body: ["${1:array_var}.reduce((${2:total, e}) => {${3:total + e}})"],
			description:
				"[array]: Processing each element of the array to obtain a single value -> number",
		},
	"[array]: Fill an array with a static value -> array": {
		prefix: "bbeo-array-fillElement",
		body: ["${1:array_var}.fill(${2:start_index},${3:foo})"],
		description: "[array]: Fill an array with a static value -> array",
	},
	"[array]: Browse the elements of an array -> any": {
		prefix: "bbeo-array-foreachElement",
		body: ["${1:array_var}.forEach((${2:e}) => {", "    ${3:expression}", "})"],
		description: "[array]: Browse the elements of an array -> any",
	},
	"[array]: Find index of element -> number": {
		prefix: "bbeo-array-indexOfElement",
		body: ["${1:array_var}.indexOf(${2:e})"],
		description: "[array]: Find index of element",
	},
	"[array]: Check the existence of an element -> boolean": {
		prefix: "bbeo-array-includesElement",
		body: ["${1:array_var}.includes(${2:e})"],
		description: "[array]: Check the existence of an element",
	},
	"[array]: Length of array -> number": {
		prefix: "bbeo-array-length",
		body: ["${1:array_var}.length"],
		description: "[array]: Length of array",
	},
	"[array]: Concatenate with another array -> array": {
		prefix: "bbeo-array-concat",
		body: ["${1:array_var}.concat(${2:array_var})"],
		description: "[array]: Concatenate with another array",
	},
};
