export const js_regex = {
	'[regex]: Extract number in string ': {
		prefix: 'bbeo-js-regex-numExtract',
		body: ['${1:string_var}.match(/\\d/g);'],
		description: '[regex]: Extract number in string ',
	},
	'[regex]: Get total occurrence of argument in string': {
		prefix: 'bbeo-js-regex-occTotal',
		body: [
			'const ${1:string_var} = ${2:string_value}',
			'${3:occ_name}=(${1:string_var}.match(/${4:arg}/g)||[]).length ',
		],
		description: '[regex]: Get total occurrence of argument in string',
	},
	'[regex]: {arg} must be present from {string_var}': {
		prefix: 'bbeo-js-regex-ifExist',
		body: ['${1:string_var}.match(/${2:arg}/)'],
		description: '[regex]: {arg} must be present from {string_var}',
	},
	'[regex]: Start of {arg} ': {
		prefix: 'bbeo-js-regex-startof',
		body: ['${1:string_var}.match(/^${2:arg}/)'],
		description: '[regex]: Start of {arg} ',
	},
	'[regex]: End of {arg} ': {
		prefix: 'bbeo-js-regex-endof',
		body: ['${1:string_var}.match(/^${2:arg}/)'],
		description: '[regex]: End of {arg} ',
	},
	'[regex]: {a} OR {b} must be present from {string_var}': {
		prefix: 'bbeo-js-regex-ifExistOR',
		body: ['${1:string_var}.match(/${2:a}|${3:b}/)'],
		description: '[regex]: {a} OR {b} must be present from {string_var}',
	},
};
