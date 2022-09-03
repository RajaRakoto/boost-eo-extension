export const js_destruct = {
	'[destruct]: Destructuring assignment -> array': {
		prefix: 'bbeo-js-destruct-assignArray',
		body: ['const [${1:var1}, ${2:var2}] = [${3:value1}, ${4:value2}]'],
		description: '[destruct]: Destructuring assignment -> array',
	},
	'[destruct]: Object destructuring assignment -> object': {
		prefix: 'bbeo-js-destruct-assignObject',
		body: ['const {${1:attrib1}, ${2:attrib2}} = ${3:object_container}'],
		description: '[destruct]: Object destructuring assignment -> object',
	},
};
