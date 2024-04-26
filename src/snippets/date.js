export const js_date = {
	"[date]: Create a date object (null args)": {
		prefix: "bbeo-date-createNullDate",
		body: ["const ${1:date} = new Date()"],
		description: "[date]: Create a date object (null args)",
	},
	"[date]: Create a date object (full args)": {
		prefix: "bbeo-date-createFullDate",
		body: [
			"const ${1:date} = new Date(${2:year}, ${3:month}, ${4:day}, ${5:hour}, ${6:minute}, ${7:second}, ${8:millisecond})",
		],
		description: "[date]: Create a date object (full args)",
	},
	"[date]: Create a date object (string format)": {
		prefix: "bbeo-date-createStringDate",
		body: ["const ${1:date} = new Date(${2:date})"],
		description: "[date]: Create a date object (date string)",
	},
	"[date]: Get current date": {
		prefix: "bbeo-date-now",
		body: ["${1:date}.now()"],
		description: "[date]: Get current date",
	},
	"[date]: Get current day": {
		prefix: "bbeo-date-day",
		body: ["${1:date}.getDay()"],
		description: "[date]: Get current day",
	},
	"[date]: Get current month": {
		prefix: "bbeo-date-month",
		body: ["${1:date}.getMonth()"],
		description: "[date]: Get current month",
	},
	"[date]: Get current year": {
		prefix: "bbeo-date-year",
		body: ["${1:date}.getFullYear()"],
		description: "[date]: Get current year",
	},
	"[date]: Get current hour": {
		prefix: "bbeo-date-hour",
		body: ["${1:date}.getHours()"],
		description: "[date]: Get current hour",
	},
	"[date]: Get current minute": {
		prefix: "bbeo-date-minute",
		body: ["${1:date}.getMinutes()"],
		description: "[date]: Get current minute",
	},
	"[date]: Get current second": {
		prefix: "bbeo-date-second",
		body: ["${1:date}.getSeconds()"],
		description: "[date]: Get current second",
	},
	"[date]: Get current millisecond": {
		prefix: "bbeo-date-millisecond",
		body: ["${1:date}.getMilliseconds()"],
		description: "[date]: Get current millisecond",
	},
	"[date]: Get current time": {
		prefix: "bbeo-date-time",
		body: ["${1:date}.getTime()"],
		description: "[date]: Get current time",
	},
	"[date]: Get current date as string": {
		prefix: "bbeo-date-toString",
		body: ["${1:date}.toString()"],
		description: "[date]: Get current date as string",
	},
	"[date]: Set date": {
		prefix: "bbeo-date-setDate",
		body: ["${1:date}.setDate(${2:date})"],
		description: "[date]: Set date",
	},
	"[date]: Set month": {
		prefix: "bbeo-date-setMonth",
		body: ["${1:date}.setMonth(${2:month})"],
		description: "[date]: Set month",
	},
	"[date]: Set year": {
		prefix: "bbeo-date-setYear",
		body: ["${1:date}.setFullYear(${2:year})"],
		description: "[date]: Set year",
	},
	"[date]: Set hour": {
		prefix: "bbeo-date-setHour",
		body: ["${1:date}.setHours(${2:hour})"],
		description: "[date]: Set hour",
	},
	"[date]: Set minute": {
		prefix: "bbeo-date-setMinute",
		body: ["${1:date}.setMinutes(${2:minute})"],
		description: "[date]: Set minute",
	},
	"[date]: Set second": {
		prefix: "bbeo-date-setSecond",
		body: ["${1:date}.setSeconds(${2:second})"],
		description: "[date]: Set second",
	},
	"[date]: Set millisecond": {
		prefix: "bbeo-date-setMillisecond",
		body: ["${1:date}.setMilliseconds(${2:millisecond})"],
		description: "[date]: Set millisecond",
	},
	"[date]: Set time": {
		prefix: "bbeo-date-setTime",
		body: ["${1:date}.setTime(${2:time})"],
		description: "[date]: Set time",
	},
};
