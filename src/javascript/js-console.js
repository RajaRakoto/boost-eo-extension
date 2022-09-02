export const js_console = {
	'[console]: console log': {
		prefix: 'bbeo-js-clg',
		body: ['console.log(${1:object})'],
		description: '[console]: console log',
	},
	'[console]: console error': {
		prefix: 'bbeo-js-clr',
		body: ['console.error(${1:object})'],
		description: '[console]: console error',
	},
	'[console]: console table': {
		prefix: 'bbeo-js-clt',
		body: ['console.table(${1:object})'],
		description: '[console]: console table',
	},
	'[console]: console info': {
		prefix: 'bbeo-js-cli',
		body: ['console.info(${1:object})'],
		description: '[console]: console info',
	},
	'[console]: console warn': {
		prefix: 'bbeo-js-clw',
		body: ['console.warn(${1:object})'],
		description: '[console]: console warn',
	},
};

