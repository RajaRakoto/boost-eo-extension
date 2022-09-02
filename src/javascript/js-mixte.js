export const js_mixte = {
	'[mixte]: Search a specific element -> mixed': {
		prefix: 'bbeo-js-mixte-findElement',
		body: ['${1:mixte_var}.find(${2:e} => ${2:e} ${3:===} ${4:foo})'],
		description: '[mixte]: Search a specific element -> mixed',
	},
	'[mixte]: Check one or more specific element.s of an array/object (no size modification) -> boolean':
		{
			prefix: 'bbeo-js-mixte-someElement',
			body: ['${1:mixte_var}.some(${2:e} => ${2:e} ${3:===} ${4:foo})'],
			description:
				'[mixte]: Check one or more specific element.s of an array/object (no size modification) -> boolean',
		},
	'[mixte]: Check the integrity of the elements of an array/object (no size modification) -> boolean':
		{
			prefix: 'bbeo-js-mixte-everyElement',
			body: ['${1:mixte_var}.every(${2:e} => ${2:e} ${3:===} ${4:foo})'],
			description:
				'[mixte]: Check the integrity of the elements of an array/object (no size modification) -> boolean',
		},
	'[mixte]: Processing of different element of the array/object (no modification of the size) -> mixed':
		{
			prefix: 'bbeo-js-mixte-mapElement',
			body: ['${1:mixte_var}.map(${2:e} => {${3:expression}})'],
			description:
				'[mixte]: Processing of different element of the array/object (no modification of the size) -> mixed',
		},
	'[mixte]: Filter the element of an array/object (size modification) -> mixed':
		{
			prefix: 'bbeo-js-mixte-filterElement',
			body: ['${1:mixte_var}.filter(${2:e} => {${3:condition}})'],
			description:
				'[mixte]: Filter the element of an array/object (size modification) -> mixed',
		},
	'[mixte]: Processing each element of the array/object to obtain a single value -> number':
		{
			prefix: 'bbeo-js-mixte-reduceElement',
			body: ['${1:mixte_var}.reduce((${2:total, e}) => {${3:total + e}})'],
			description:
				'[mixte]: Processing each element of the array/object to obtain a single value -> number',
		},
	'[mixte]: Browse the elements of an array/object -> any': {
		prefix: 'bbeo-js-mixte-foreachElement',
		body: ['${1:mixte_var}.forEach((${2:e}) => {', '    ${3:expression}', '})'],
		description: '[mixte]: Browse the elements of an array/object -> any',
	},
};
