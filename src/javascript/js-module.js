export const js_module = {
	'[import]: Imports entire module statement in ES6 syntax': {
		prefix: 'bbeo-js-module-imp',
		body: ['import ${1:module_name} from ${2:module_source};'],
		description: '[import]: Imports entire module statement in ES6 syntax',
	},
	'[import]: [import]: Imports only a portion of the module in ES6 syntax (destructuring assignment)':
		{
			prefix: 'bbeo-js-module-imd',
			body: ['import { ${1:module_name} } from ${2:module_source};'],
			description:
				'[import]: Imports only a portion of the module in ES6 syntax (destructuring assignment)',
		},
};
