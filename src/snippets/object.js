export const js_object = {
	"[object]: Extract object values -> object": {
		prefix: "bbeo-object-extractValues",
		body: ["Object.values(${1:object})"],
		description: "[object]: Extract objecy values",
	},
	"[object]: Extract object entries -> object": {
		prefix: "bbeo-object-extractEntries",
		body: ["Object.entries(${1:object})"],
		description: "[object]: Extract object entries",
	},
	"[object]: Get object length -> number": {
		prefix: "bbeo-object-length",
		body: ["Object.keys(${1:object}).length"],
		description: "[object]: Get object length",
	},
	"[object]: Search a specific element -> object": {
		prefix: "bbeo-object-find",
		body: ["${1:object}.find(${2:e} => ${2:e} ${3:===} ${4:foo})"],
		description: "[object]: Search a specific element -> object",
	},
	"[object]: Check one or more specific element.s of an object (no size modification) -> boolean":
		{
			prefix: "bbeo-object-some",
			body: ["${1:object}.some(${2:e} => ${2:e} ${3:===} ${4:foo})"],
			description:
				"[object]: Check one or more specific element.s of an object (no size modification) -> boolean",
		},
	"[object]: Check the integrity of the elements of an object (no size modification) -> boolean":
		{
			prefix: "bbeo-object-every",
			body: ["${1:object}.every(${2:e} => ${2:e} ${3:===} ${4:foo})"],
			description:
				"[object]: Check the integrity of the elements of an object (no size modification) -> boolean",
		},
	"[object]: Processing of different element of the object (no modification of the size) -> object":
		{
			prefix: "bbeo-object-map",
			body: ["${1:object}.map(${2:e} => {${3:expression}})"],
			description:
				"[object]: Processing of different element of the object (no modification of the size) -> object",
		},
	"[object]: Filter the element of an object (size modification) -> object": {
		prefix: "bbeo-object-filter",
		body: ["${1:object}.filter(${2:e} => {${3:condition}})"],
		description:
			"[object]: Filter the element of an object (size modification) -> object",
	},
	"[object]: Processing each element of the object to obtain a single value -> number":
		{
			prefix: "bbeo-object-reduce",
			body: ["${1:object}.reduce((${2:total, e}) => {${3:total + e}})"],
			description:
				"[object]: Processing each element of the object to obtain a single value -> number",
		},
	"[object]: Fill an object with a static value -> object": {
		prefix: "bbeo-object-fill",
		body: ["${1:object}.fill(${2:start_index},${3:foo})"],
		description: "[object]: Fill an object with a static value -> object",
	},
	"[object]: Browse the elements of an object -> any": {
		prefix: "bbeo-object-forEach",
		body: ["${1:object}.forEach((${2:e}) => {", "    ${3:expression}", "})"],
		description: "[object]: Browse the elements of an object -> any",
	},
};
