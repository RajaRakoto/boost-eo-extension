export const js_cast = {
	"[cast]: method 1 - Convert any object to string -> string": {
		prefix: "bbeo-cast-objectToString1",
		body: ["${1:object}.toString()"],
		description: "[cast]: method 1 - Convert any object to string -> string",
	},
	"[cast]: method 2 - Convert any object to string -> string": {
		prefix: "bbeo-cast-objectToString2",
		body: ["String(${1:object})"],
		description: "[cast]: method 2 - Convert any object to string -> string",
	},
	"[cast]: method 1 - convert string to array -> array": {
		prefix: "bbeo-cast-stringToArray1",
		body: ["Array.from(${1:string})"],
		description: "[cast]: method 1 - convert string to array -> array",
	},
	"[cast]: method 2 - convert string to array -> array": {
		prefix: "bbeo-cast-stringToArray2",
		body: ["[... ${1:string}]"],
		description: "[cast]: method 2 - convert string to array -> array",
	},
	"[cast]: method 3 - convert string to array -> array": {
		prefix: "bbeo-cast-stringToArray3",
		body: ["${1:string}.split()"],
		description: "[cast]: method 3 - convert string to array -> array",
	},
	"[cast]: method 1 - convert string to number -> number": {
		prefix: "bbeo-cast-stringToNumber1",
		body: ["Number(${1:string})"],
		description: "[cast]: method 1 - convert string to number -> number",
	},
	"[cast]: method 2 - convert string to number -> number": {
		prefix: "bbeo-cast-stringToNumber2",
		body: ["parseInt(${1:string})"],
		description: "[cast]: method 2 - convert string to number -> number",
	},
	"[cast]: hex -> dec": {
		prefix: "bbeo-cast-hex2dec",
		body: ["+('0x'+ ${1:var})"],
		description: "[cast]: hex -> dec",
	},
	"[cast]: dec -> hex": {
		prefix: "bbeo-cast-dec2hex",
		body: ["${1:var}.toString(16)"],
		description: "[cast]: dec -> hex",
	},
	"[cast]: oct -> dec": {
		prefix: "bbeo-cast-oct2dec",
		body: ["parseInt(${1:var}, 8)"],
		description: "[cast]: oct -> dec",
	},
	"[cast]: dec -> oct": {
		prefix: "bbeo-cast-dec2oct",
		body: ["${1:var}.toString(8)"],
		description: "[cast]: dec -> oct",
	},
	"[cast]: bin -> dec": {
		prefix: "bbeo-cast-bin2dec",
		body: ["parseInt(${var}, 2)"],
		description: "[cast]: bin -> dec",
	},
	"[cast]: dec -> bin": {
		prefix: "bbeo-cast-dec2bin",
		body: ["${1:var}.toString(2)"],
		description: "[cast]: dec -> bin",
	},
	"[cast]: JSON to String": {
		prefix: "bbeo-cast-jsonToString",
		body: ["JSON.stringify(${1:json})"],
		description: "[cast]: JSON to String",
	},
	"[cast]: String to JSON": {
		prefix: "bbeo-cast-stringToJSON",
		body: ["JSON.parse(${1:string})"],
		description: "[cast]: String to JSON",
	},
	"[cast]: Date to String": {
		prefix: "bbeo-cast-dateToString",
		body: ["${1:date}.toISOString()"],
		description: "[cast]: Date to String",
	},
	"[cast]: String to Date": {
		prefix: "bbeo-cast-stringToDate",
		body: ["new Date(${1:string})"],
		description: "[cast]: String to Date",
	},
	"[cast]: Array to String": {
		prefix: "bbeo-cast-arrayToString",
		body: ["${1:array}.join(',')"],
		description: "[cast]: Array to String",
	},
	"[cast]: String to Array": {
		prefix: "bbeo-cast-stringToArray",
		body: ["${1:string}.split(',')"],
		description: "[cast]: String to Array",
	},
};
