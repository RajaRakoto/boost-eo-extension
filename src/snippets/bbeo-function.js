export const bbeo_function = {
	"[function]: Create arrow function": {
		prefix: "bbeo-function-arrow",
		body: ["const ${1:func_name} = (${2:args}) => {", "  ${3:code...}", "}"],
		description: "[function]: Create arrow function",
	},
	"[function]: Create function": {
		prefix: "bbeo-function-function",
		body: ["function ${1:func_name} (${2:args}) {", "  ${3:code...}", "}"],
		description: "[function]: Create function",
	},
	"[function]: Create async arrow function": {
		prefix: "bbeo-function-asyncArrow",
		body: [
			"const ${1:func_name} = async (${2:args}) => {",
			"  ${3:code...}",
			"}",
		],
		description: "[function]: Create async arrow function",
	},
	"[function]: Create async function": {
		prefix: "bbeo-function-async",
		body: [
			"async function ${1:func_name} (${2:args}) {",
			"  ${3:code...}",
			"}",
		],
		description: "[function]: Create async function",
	},
	"[function]: Create anonymous function": {
		prefix: "bbeo-function-anon",
		body: ["(${1:args}) => {", "  ${2:code...}", "}"],
		description: "[function]: Create anonymous function",
	},
};
