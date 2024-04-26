export const bbeo_object = {
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
};
