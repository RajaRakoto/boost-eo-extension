export const js_struct = {
	"[struct]: Add to queue -> array": {
		prefix: "bbeo-struct-addToQueue",
		body: ["${1:array_var}.push(${2:e})"],
		description: "[struct]: Add to queue -> array",
	},
	"[struct]: Add to head -> array": {
		prefix: "bbeo-struct-addToHead",
		body: ["${1:array_var}.unshift(${2:e})"],
		description: "[struct]: Add to head -> array",
	},
	"[struct]: Delete at tail -> array": {
		prefix: "bbeo-struct-deleteAtTail",
		body: ["${1:array_var}.pop(${2:e})"],
		description: "[struct]: Delete at tail -> array",
	},
	"[struct]: Delete at head -> array": {
		prefix: "bbeo-struct-deleteAtHead",
		body: ["${1:array_var}.shift(${2:e})"],
		description: "[struct]: Delete at head -> array",
	},
};
