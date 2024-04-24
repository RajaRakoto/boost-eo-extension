export const js_console = {
	"[console]: console log": {
		prefix: "bbeo-console-clg",
		body: ["console.log(${1:object})"],
		description: "[console]: console log",
	},
	"[console]: console error": {
		prefix: "bbeo-console-clr",
		body: ["console.error(${1:object})"],
		description: "[console]: console error",
	},
	"[console]: console table": {
		prefix: "bbeo-console-clt",
		body: ["console.table(${1:object})"],
		description: "[console]: console table",
	},
	"[console]: console info": {
		prefix: "bbeo-console-cli",
		body: ["console.info(${1:object})"],
		description: "[console]: console info",
	},
	"[console]: console warn": {
		prefix: "bbeo-console-clw",
		body: ["console.warn(${1:object})"],
		description: "[console]: console warn",
	},
};
