export const js_date = {
	'[date]: Create a date object (null args)': {
		prefix: 'bbeo-date-createNullDate',
		body: ['const ${1:date_objVar} = new Date()'],
		description: '[date]: Create a date object (null args)',
	},
	'[date]: Create a date object (full args)': {
		prefix: 'bbeo-date-createFullDate',
		body: [
			'const ${1:date_objVar} = new Date(${2:year}, ${3:month}, ${4:day}, ${5:hour}, ${6:minute}, ${7:second}, ${8:millisecond})',
		],
		description: '[date]: Create a date object (full args)',
	},
	'[date]: Create a date object (string format)': {
		prefix: 'bbeo-date-createStringDate',
		body: ['const ${1:date_objVar} = new Date(${2:date_string})'],
		description: '[date]: Create a date object (date string)',
	},
	'[date]: Get current date': {
		prefix: 'bbeo-js-date-now',
		body: ['${1:date_objVar}.now()'],
		description: '[date]: Get current date',
	},
	'[date]: Get current day': {
		prefix: 'bbeo-js-date-day',
		body: ['${1:date_objVar}.getDay()'],
		description: '[date]: Get current day',
	},
	'[date]: Get current month': {
		prefix: 'bbeo-js-date-month',
		body: ['${1:date_objVar}.getMonth()'],
		description: '[date]: Get current month',
	},
	'[date]: Get current year': {
		prefix: 'bbeo-js-date-year',
		body: ['${1:date_objVar}.getFullYear()'],
		description: '[date]: Get current year',
	},
	'[date]: Get current hour': {
		prefix: 'bbeo-js-date-hour',
		body: ['${1:date_objVar}.getHours()'],
		description: '[date]: Get current hour',
	},
	'[date]: Get current minute': {
		prefix: 'bbeo-js-date-minute',
		body: ['${1:date_objVar}.getMinutes()'],
		description: '[date]: Get current minute',
	},
	'[date]: Get current second': {
		prefix: 'bbeo-js-date-second',
		body: ['${1:date_objVar}.getSeconds()'],
		description: '[date]: Get current second',
	},
	'[date]: Get current millisecond': {
		prefix: 'bbeo-js-date-millisecond',
		body: ['${1:date_objVar}.getMilliseconds()'],
		description: '[date]: Get current millisecond',
	},
	'[date]: Get current time': {
		prefix: 'bbeo-js-date-time',
		body: ['${1:date_objVar}.getTime()'],
		description: '[date]: Get current time',
	},
	'[date]: Get current date as string': {
		prefix: 'bbeo-js-date-toString',
		body: ['${1:date_objVar}.toString()'],
		description: '[date]: Get current date as string',
	},
};
