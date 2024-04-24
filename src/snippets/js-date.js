export const js_date = {
	"[date]: Create a date object (null args)": {
		prefix: "bbeo-date-createNullDate",
		body: ["const ${1:date_objVar} = new Date()"],
		description: "[date]: Create a date object (null args)",
	},
	"[date]: Create a date object (full args)": {
		prefix: "bbeo-date-createFullDate",
		body: [
			"const ${1:date_objVar} = new Date(${2:year}, ${3:month}, ${4:day}, ${5:hour}, ${6:minute}, ${7:second}, ${8:millisecond})",
		],
		description: "[date]: Create a date object (full args)",
	},
	"[date]: Create a date object (string format)": {
		prefix: "bbeo-date-createStringDate",
		body: ["const ${1:date_objVar} = new Date(${2:date_string})"],
		description: "[date]: Create a date object (date string)",
	},
	"[date]: Get current date": {
		prefix: "bbeo-date-now",
		body: ["${1:date_objVar}.now()"],
		description: "[date]: Get current date",
	},
	"[date]: Get current day": {
		prefix: "bbeo-date-day",
		body: ["${1:date_objVar}.getDay()"],
		description: "[date]: Get current day",
	},
	"[date]: Get current month": {
		prefix: "bbeo-date-month",
		body: ["${1:date_objVar}.getMonth()"],
		description: "[date]: Get current month",
	},
	"[date]: Get current year": {
		prefix: "bbeo-date-year",
		body: ["${1:date_objVar}.getFullYear()"],
		description: "[date]: Get current year",
	},
	"[date]: Get current hour": {
		prefix: "bbeo-date-hour",
		body: ["${1:date_objVar}.getHours()"],
		description: "[date]: Get current hour",
	},
	"[date]: Get current minute": {
		prefix: "bbeo-date-minute",
		body: ["${1:date_objVar}.getMinutes()"],
		description: "[date]: Get current minute",
	},
	"[date]: Get current second": {
		prefix: "bbeo-date-second",
		body: ["${1:date_objVar}.getSeconds()"],
		description: "[date]: Get current second",
	},
	"[date]: Get current millisecond": {
		prefix: "bbeo-date-millisecond",
		body: ["${1:date_objVar}.getMilliseconds()"],
		description: "[date]: Get current millisecond",
	},
	"[date]: Get current time": {
		prefix: "bbeo-date-time",
		body: ["${1:date_objVar}.getTime()"],
		description: "[date]: Get current time",
	},
	"[date]: Get current date as string": {
		prefix: "bbeo-date-toString",
		body: ["${1:date_objVar}.toString()"],
		description: "[date]: Get current date as string",
	},
	"[date]: Set date": {
		prefix: "bbeo-date-setDate",
		body: ["${1:date_objVar}.setDate(${2:new_date})"],
		description: "[date]: Set date",
	},
	"[date]: Set month": {
		prefix: "bbeo-date-setMonth",
		body: ["${1:date_objVar}.setMonth(${2:new_month})"],
		description: "[date]: Set month",
	},
	"[date]: Set year": {
		prefix: "bbeo-date-setYear",
		body: ["${1:date_objVar}.setFullYear(${2:new_year})"],
		description: "[date]: Set year",
	},
	"[date]: Set hour": {
		prefix: "bbeo-date-setHour",
		body: ["${1:date_objVar}.setHours(${2:new_hour})"],
		description: "[date]: Set hour",
	},
	"[date]: Set minute": {
		prefix: "bbeo-date-setMinute",
		body: ["${1:date_objVar}.setMinutes(${2:new_minute})"],
		description: "[date]: Set minute",
	},
	"[date]: Set second": {
		prefix: "bbeo-date-setSecond",
		body: ["${1:date_objVar}.setSeconds(${2:new_second})"],
		description: "[date]: Set second",
	},
	"[date]: Set millisecond": {
		prefix: "bbeo-date-setMillisecond",
		body: ["${1:date_objVar}.setMilliseconds(${2:new_millisecond})"],
		description: "[date]: Set millisecond",
	},
	"[date]: Set time": {
		prefix: "bbeo-date-setTime",
		body: ["${1:date_objVar}.setTime(${2:new_time})"],
		description: "[date]: Set time",
	},
};
