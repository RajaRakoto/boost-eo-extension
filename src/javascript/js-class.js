export const js_class = {
	'[class]: Create getter pattern': {
		prefix: 'bbeo-js-object-getter',
		body: ['get ${1:property_name} () { return this.${1:property_name}; }'],
		description: '[class]: Create getter pattern',
	},
	'[class]: Create setter pattern': {
		prefix: 'bbeo-js-object-setter',
		body: [
			'set ${1:property_name} (${2:value}) { this.${1:property_name} = ${2:value}; }',
		],
		description: '[class]: Create setter pattern',
	},
	'[class]: Create method pattern': {
		prefix: 'bbeo-js-object-method',
		body: ['${1:method_name} () { ${2:method_body} }'],
		description: '[class]: Create method pattern',
	},
	'[class]: Create constructor pattern': {
		prefix: 'bbeo-js-object-constructor',
		body: ['constructor () { ${1:constructor_body} }'],
		description: '[class]: Create constructor pattern',
	},
	'[class]: Create static method pattern': {
		prefix: 'bbeo-js-object-staticMethod',
		body: ['static ${1:method_name} () { ${2:method_body} }'],
		description: '[class]: Create static method pattern',
	},
	'[class]: Create static property pattern': {
		prefix: 'bbeo-js-object-staticProperty',
		body: ['static ${1:property_name} = ${2:property_value}'],
		description: '[class]: Create static property pattern',
	},
	'[class]: Create static getter pattern': {
		prefix: 'bbeo-js-object-staticGetter',
		body: [
			'static get ${1:property_name} () { return this.${1:property_name}; }',
		],
		description: '[class]: Create static getter pattern',
	},
	'[class]: Create static setter pattern': {
		prefix: 'bbeo-js-object-staticSetter',
		body: [
			'static set ${1:property_name} (${2:value}) { this.${1:property_name} = ${2:value}; }',
		],
		description: '[class]: Create static setter pattern',
	},
};
