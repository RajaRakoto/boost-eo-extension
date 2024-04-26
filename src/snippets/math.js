export const js_math = {
	"[math]: Format a number in fixed-dot notation -> number": {
		prefix: "bbeo-math-fixedDot",
		body: ["${1:number}.toFixed(${2:decal})"],
		description: "[math]: Format a number in fixed-dot notation -> number",
	},
	"[math]: Power of number": {
		prefix: "bbeo-math-pow",
		body: ["${1:number} ** ${2:exp}"],
		description: "[math]: Power of number",
	},
	"[math]: Get MAX element": {
		prefix: "bbeo-math-max",
		body: ["Math.max(... ${1: element})"],
		description: "[math]: Get MAX element",
	},
	"[math]: Get MIN element": {
		prefix: "bbeo-math-min",
		body: ["Math.min(... ${1: element})"],
		description: "[math]: Get MAX element",
	},
	"[math]: Get exponent of a number": {
		prefix: "bbeo-math-expOfNumber",
		body: ["Math.log(${solution})/Math.log(${base})"],
		description: "[math]: Get exponent of a number",
	},
	"[math]: Get square of a number": {
		prefix: "bbeo-math-sqrt",
		body: ["Math.sqrt(${1:number})"],
		description: "[math]: Get square of a number",
	},
	"[math]: Get absolute value of a number": {
		prefix: "bbeo-math-abs",
		body: ["Math.abs(${1:number})"],
		description: "[math]: Get absolute value of a number",
	},
	"[math]: Get round value of a number": {
		prefix: "bbeo-math-round",
		body: ["Math.round(${1:number})"],
		description: "[math]: Get round value of a number",
	},
	"[math]: Get ceil value of a number": {
		prefix: "bbeo-math-ceil",
		body: ["Math.ceil(${1:number})"],
		description: "[math]: Get ceil value of a number",
	},
	"[math]: Get floor value of a number": {
		prefix: "bbeo-math-floor",
		body: ["Math.floor(${1:number})"],
		description: "[math]: Get floor value of a number",
	},
	"[math]: Get random value between 0 and 1": {
		prefix: "bbeo-math-random",
		body: ["Math.random()"],
		description: "[math]: Get random value between 0 and 1",
	},
	"[math]: Get random value between 0 and max": {
		prefix: "bbeo-math-random-max",
		body: ["Math.floor(Math.random() * ${1:max})"],
		description: "[math]: Get random value between 0 and max",
	},
	"[math]: Get random value between min and max": {
		prefix: "bbeo-math-random-minMax",
		body: ["Math.floor(Math.random() * (${1:max} - ${2:min}) + ${2:min})"],
		description: "[math]: Get random value between min and max",
	},
	"[math]: Get PI value": {
		prefix: "bbeo-math-pi",
		body: ["Math.PI"],
		description: "[math]: Get PI value",
	},
	"[math]: Get E value": {
		prefix: "bbeo-math-e",
		body: ["Math.E"],
		description: "[math]: Get E value",
	},
	"[math]: Get LN2 value": {
		prefix: "bbeo-math-ln2",
		body: ["Math.LN2"],
		description: "[math]: Get LN2 value",
	},
	"[math]: Get LN10 value": {
		prefix: "bbeo-math-ln10",
		body: ["Math.LN10"],
		description: "[math]: Get LN10 value",
	},
};
