export const js_basic = {
	"[basic]: Swap 2 values ​​from 2 variables": {
		prefix: "bbeo-basic-permut",
		body: ["[${1:a},${2:b}] = [${2:b},${1:a}]"],
		description: "[basic]: Swap 2 values ​​from 2 variables",
	},
	"[basic]: Conditional statement": {
		prefix: "bbeo-basic-ifCondition",
		body: [
			"if (${1:condition}) {",
			"    ${3:condition_body}",
			"} else if (${2:condition}) {",
			"    ${4:condition_body}",
			"} else {",
			"    ${5:condition_body}",
			"}",
		],
		description: "[basic]: Conditional statement",
	},
	"[basic]: For loop": {
		prefix: "bbeo-basic-forLoop",
		body: [
			"for (let ${1:index} = 0; ${1:index} < ${2:array_length}; ${1:index}++) {",
			"    ${3:for_body}",
			"}",
		],
		description: "[basic]: For loop",
	},
	"[basic]: While loop": {
		prefix: "bbeo-basic-whileLoop",
		body: ["while (${1:condition}) {", "    ${2:while_body}", "}"],
		description: "[basic]: While loop",
	},
	"[basic]: Do while loop": {
		prefix: "bbeo-basic-doWhileLoop",
		body: ["do {", "    ${2:do_body}", "} while (${1:condition});"],
		description: "[basic]: Do while loop",
	},
	"[basic]: For in loop": {
		prefix: "bbeo-basic-forInLoop",
		body: ["for (let ${1:e} in ${2:array_var}) {", "    ${3:for_body}", "}"],
		description: "[basic]: For in loop",
	},
	"[basic]: For of loop": {
		prefix: "bbeo-basic-forOfLoop",
		body: ["for (let ${1:e} of ${2:array_var}) {", "    ${3:for_body}", "}"],
		description: "[basic]: For of loop",
	},
	"[basic]: For each loop": {
		prefix: "bbeo-basic-forEachLoop",
		body: ["${2:array_var}.forEach((${1:e}) => {", "    ${3:for_body}", "});"],
		description: "[basic]: For each loop",
	},
	"[basic]: Switch statement": {
		prefix: "bbeo-basic-switchStatement",
		body: [
			"switch (${1:condition}) {",
			"    case ${2:condition_value}:",
			"        ${3:switch_body}",
			"        break;",
			"    case ${4:condition_value}:",
			"        ${5:switch_body}",
			"        break;",
			"    default:",
			"        ${6:switch_body}",
			"        break;",
			"}",
		],
		description: "[basic]: Switch statement",
	},
	"[basic]: Try catch statement": {
		prefix: "bbeo-basic-tryCatchStatement",
		body: [
			"try {",
			"    ${1:try_body}",
			"} catch (${2:error}) {",
			"    ${3:catch_body}",
			"}",
		],
		description: "[basic]: Try catch statement",
	},
	"[basic]: Try catch finally statement": {
		prefix: "bbeo-basic-tryCatchFinallyStatement",
		body: [
			"try {",
			"    ${1:try_body}",
			"} catch (${2:error}) {",
			"    ${3:catch_body}",
			"} finally {",
			"    ${4:finally_body}",
			"}",
		],
		description: "[basic]: Try catch finally statement",
	},
	"[basic]: Try catch finally statement with multiple catch blocks": {
		prefix: "bbeo-basic-tryCatchFinallyStatementMultiple",
		body: [
			"try {",
			"    ${1:try_body}",
			"} catch (${2:error}) {",
			"    ${3:catch_body}",
			"} catch (${4:error}) {",
			"    ${5:catch_body}",
			"} finally {",
			"    ${6:finally_body}",
			"}",
		],
		description:
			"[basic]: Try catch finally statement with multiple catch blocks",
	},
};
