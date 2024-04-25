export const js_object = {
	"[object]: Extract object values -> object": {
		prefix: "bbeo-object-extractValues",
		body: ["Object.values(${1:object_var})"],
		description: "[object]: Extract objecy values",
	},
	"[object]: Extract object entries -> object": {
		prefix: "bbeo-object-extractEntries",
		body: ["Object.entries(${1:object_var})"],
		description: "[object]: Extract object entries",
	},
	"[object]: Get object length": {
		prefix: "bbeo-object-length",
		body: ["Object.keys(${1:object_var}).length"],
		description: "[object]: Get object length",
	},
	"[object]: Search a specific element -> object": {
		prefix: "bbeo-object-findElement",
		body: ["${1:object_var}.find(${2:e} => ${2:e} ${3:===} ${4:foo})"],
		description: "[object]: Search a specific element -> object",
	},
	"[object]: Check one or more specific element.s of an object (no size modification) -> boolean":
		{
			prefix: "bbeo-object-someElement",
			body: ["${1:object_var}.some(${2:e} => ${2:e} ${3:===} ${4:foo})"],
			description:
				"[object]: Check one or more specific element.s of an object (no size modification) -> boolean",
		},
	"[object]: Check the integrity of the elements of an object (no size modification) -> boolean":
		{
			prefix: "bbeo-object-everyElement",
			body: ["${1:object_var}.every(${2:e} => ${2:e} ${3:===} ${4:foo})"],
			description:
				"[object]: Check the integrity of the elements of an object (no size modification) -> boolean",
		},
	"[object]: Processing of different element of the object (no modification of the size) -> object":
		{
			prefix: "bbeo-object-mapElement",
			body: ["${1:object_var}.map(${2:e} => {${3:expression}})"],
			description:
				"[object]: Processing of different element of the object (no modification of the size) -> object",
		},
	"[object]: Filter the element of an object (size modification) -> object": {
		prefix: "bbeo-object-filterElement",
		body: ["${1:object_var}.filter(${2:e} => {${3:condition}})"],
		description:
			"[object]: Filter the element of an object (size modification) -> object",
	},
	"[object]: Processing each element of the object to obtain a single value -> number":
		{
			prefix: "bbeo-object-reduceElement",
			body: ["${1:object_var}.reduce((${2:total, e}) => {${3:total + e}})"],
			description:
				"[object]: Processing each element of the object to obtain a single value -> number",
		},
	"[object]: Fill an object with a static value -> object": {
		prefix: "bbeo-object-fillElement",
		body: ["${1:object_var}.fill(${2:start_index},${3:foo})"],
		description: "[object]: Fill an object with a static value -> object",
	},
	"[object]: Browse the elements of an object -> any": {
		prefix: "bbeo-object-foreachElement",
		body: [
			"${1:object_var}.forEach((${2:e}) => {",
			"    ${3:expression}",
			"})",
		],
		description: "[object]: Browse the elements of an object -> any",
	},
};
