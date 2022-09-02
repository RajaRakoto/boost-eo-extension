export const js_import = {
	'[import]: Imports entire module statement in ES6 syntax': {
		prefix: 'bbeo-js-imp',
		body: ['import ${1:moduleName} from ${2:module};'],
		description: '[import]: Imports entire module statement in ES6 syntax',
	},
	'[import]: [import]: Imports only a portion of the module in ES6 syntax (destructuring assignment)':
		{
			prefix: 'bbeo-js-imd',
			body: ['import { ${1:moduleName} } from ${2:module};'],
			description:
				'[import]: Imports only a portion of the module in ES6 syntax (destructuring assignment)',
		},
};
