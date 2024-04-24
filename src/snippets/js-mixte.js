export const js_mixte = {
	"[mixte]: Search a specific element -> mixed": {
		prefix: "bbeo-mixte-findElement",
		body: ["${1:mixte_var}.find(${2:e} => ${2:e} ${3:===} ${4:foo})"],
		description: "[mixte]: Search a specific element -> mixed",
	},
	"[mixte]: Check one or more specific element.s of an array/object (no size modification) -> boolean":
		{
			prefix: "bbeo-mixte-someElement",
			body: ["${1:mixte_var}.some(${2:e} => ${2:e} ${3:===} ${4:foo})"],
			description:
				"[mixte]: Check one or more specific element.s of an array/object (no size modification) -> boolean",
		},
	"[mixte]: Check the integrity of the elements of an array/object (no size modification) -> boolean":
		{
			prefix: "bbeo-mixte-everyElement",
			body: ["${1:mixte_var}.every(${2:e} => ${2:e} ${3:===} ${4:foo})"],
			description:
				"[mixte]: Check the integrity of the elements of an array/object (no size modification) -> boolean",
		},
	"[mixte]: Processing of different element of the array/object (no modification of the size) -> mixed":
		{
			prefix: "bbeo-mixte-mapElement",
			body: ["${1:mixte_var}.map(${2:e} => {${3:expression}})"],
			description:
				"[mixte]: Processing of different element of the array/object (no modification of the size) -> mixed",
		},
	"[mixte]: Filter the element of an array/object (size modification) -> mixed":
		{
			prefix: "bbeo-mixte-filterElement",
			body: ["${1:mixte_var}.filter(${2:e} => {${3:condition}})"],
			description:
				"[mixte]: Filter the element of an array/object (size modification) -> mixed",
		},
	"[mixte]: Processing each element of the array/object to obtain a single value -> number":
		{
			prefix: "bbeo-mixte-reduceElement",
			body: ["${1:mixte_var}.reduce((${2:total, e}) => {${3:total + e}})"],
			description:
				"[mixte]: Processing each element of the array/object to obtain a single value -> number",
		},
	"[mixte]: Fill an array/object with a static value -> mixed": {
		prefix: "bbeo-mixte-fillElement",
		body: ["${1:mixte_var}.fill(${2:start_index},${3:foo})"],
		description: "[mixte]: Fill an array/object with a static value -> mixed",
	},
	"[mixte]: Browse the elements of an array/object -> any": {
		prefix: "bbeo-mixte-foreachElement",
		body: ["${1:mixte_var}.forEach((${2:e}) => {", "    ${3:expression}", "})"],
		description: "[mixte]: Browse the elements of an array/object -> any",
	},
};
