export const js_object = {
	'[object]: Extract objecy values -> array': {
		prefix: 'bbeo-js-object-extractValues',
		body: ['Object.values(${1:object_var})'],
		description: '[object]: Extract objecy values',
	},
	'[object]: Extract object entries -> array': {
		prefix: 'bbeo-js-object-extractEntries',
		body: ['Object.entries(${1:object_var})'],
		description: '[object]: Extract object entries',
	},
	'[object]: Get object length': {
		prefix: 'bbeo-js-object-length',
		body: ['Object.keys(${1:object_var}).length'],
		description: '[object]: Get object length',
	},
};
