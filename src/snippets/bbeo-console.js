export const bbeo_console = {
	"[console]: Display a message with console.log()": {
		prefix: "bbeo-console-clg",
		body: ["console.log(${1:object})"],
		description: "[console]: Display a message with console.log()",
	},
	"[console]: Display an error with console.error()": {
		prefix: "bbeo-console-clr",
		body: ["console.error(${1:object})"],
		description: "[console]: Display an error with console.error()",
	},
	"[console]: Display a table with console.table()": {
		prefix: "bbeo-console-clt",
		body: ["console.table(${1:object})"],
		description: "[console]: Display a table with console.table()",
	},
	"[console]: Display information with console.info()": {
		prefix: "bbeo-console-cli",
		body: ["console.info(${1:object})"],
		description: "[console]: Display information with console.info()",
	},
	"[console]: Display a warning with console.warn()": {
		prefix: "bbeo-console-clw",
		body: ["console.warn(${1:object})"],
		description: "[console]: Display a warning with console.warn()",
	},
	"[console]: Display an object's properties with console.dir()": {
		prefix: "bbeo-console-cld",
		body: ["console.dir(${1:object})"],
		description: "[console]: Display an object's properties with console.dir()",
	},
	"[console]: Clear all messages with console.clear()": {
		prefix: "bbeo-console-clc",
		body: ["console.clear()"],
		description: "[console]: Clear all messages with console.clear()",
	},
};
