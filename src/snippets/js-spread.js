export const js_spread = {
	"[spread]: Merge several arrays (concat() alternative) -> array": {
		prefix: "bbeo-spread-mergeArrays",
		body: ["[...${1:arr1}, ...${2:arr2}]"],
		description:
			"[spread]: Merge several arrays (concat() alternative) -> array",
	},
	"[spread]: Merge several objects (Object.assign() alternative) -> object": {
		prefix: "bbeo-spread-mergeObjects",
		body: ["{...${1:obj1}, ...${2:obj2}}"],
		description:
			"[spread]: Merge several objects (Object.assign() alternative) -> object",
	},
	"[spread]: Remove duplicates from an array -> array": {
		prefix: "bbeo-spread-removeDuplicates",
		body: ["[...new Set(${1:array_var})]"],
		description: "[spread]: Remove duplicates from an array -> array",
	},
	"[spread]: Add a new prop/value to an existing object -> object": {
		prefix: "bbeo-spread-addProp",
		body: ["{...${1:obj_var}, ${2:newProp}: ${3:foo}}"],
		description:
			"[spread]: Add a new prop/value to an existing object -> object",
	},
};
