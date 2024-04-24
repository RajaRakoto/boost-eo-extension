export const js_cast = {
	"[cast]: method 1 - Convert any object to string -> string": {
		prefix: "bbeo-cast-objToString1",
		body: ["${1:object}.toString()"],
		description: "[cast]: method 1 - Convert any object to string -> string",
	},
	"[cast]: method 2 - Convert any object to string -> string": {
		prefix: "bbeo-cast-objToString2",
		body: ["String(${1:object})"],
		description: "[cast]: method 2 - Convert any object to string -> string",
	},
	"[cast]: method 1 - convert string to array -> array": {
		prefix: "bbeo-cast-stringToArray1",
		body: ["Array.from(${1:string_var})"],
		description: "[cast]: method 1 - convert string to array -> array",
	},
	"[cast]: method 2 - convert string to array -> array": {
		prefix: "bbeo-cast-stringToArray2",
		body: ["[... ${1:string_var}]"],
		description: "[cast]: method 2 - convert string to array -> array",
	},
	"[cast]: method 3 - convert string to array -> array": {
		prefix: "bbeo-cast-stringToArray3",
		body: ["${1:string_var}.split``"],
		description: "[cast]: method 3 - convert string to array -> array",
	},
	"[cast]: method 1 - convert string to number -> number": {
		prefix: "bbeo-cast-stringToNumber1",
		body: ["Number(${1:string_var})"],
		description: "[cast]: method 1 - convert string to number -> number",
	},
	"[cast]: method 2 - convert string to number -> number": {
		prefix: "bbeo-cast-stringToNumber2",
		body: ["parseInt(${1:string_var})"],
		description: "[cast]: method 2 - convert string to number -> number",
	},
	"[cast]: hex -> dec": {
		prefix: "bbeo-cast-hex2dec",
		body: ["+('0x'+ ${1:hex_var})"],
		description: "[cast]: hex -> dec",
	},
	"[cast]: dec -> hex": {
		prefix: "bbeo-cast-dec2hex",
		body: ["${1:dec_var}.toString(16)"],
		description: "[cast]: dec -> hex",
	},
	"[cast]: oct -> dec": {
		prefix: "bbeo-cast-oct2dec",
		body: ["parseInt(${1:oct_var}, 8)"],
		description: "[cast]: oct -> dec",
	},
	"[cast]: dec -> oct": {
		prefix: "bbeo-cast-dec2oct",
		body: ["${1:dec_var}.toString(8)"],
		description: "[cast]: dec -> oct",
	},
	"[cast]: bin -> dec": {
		prefix: "bbeo-cast-bin2dec",
		body: ["parseInt(${bin_var}, 2)"],
		description: "[cast]: bin -> dec",
	},
	"[cast]: dec -> bin": {
		prefix: "bbeo-cast-dec2bin",
		body: ["${1:dec_var}.toString(2)"],
		description: "[cast]: dec -> bin",
	},
};
