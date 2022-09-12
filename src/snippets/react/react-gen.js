export const react_gen = {
	'[gen]: Generate react class component structure': {
		prefix: 'bbeo-react-gen-classComponent',
		body: [
			'export default class ${1:component_name} extends React.Component {',
			'	render() {',
			'		return (',
			'     // code JSX ...',
			'		);',
			'	}',
			'}',
		],
		description: '[gen]: Generate react class component structure',
	},
	'[gen]: Generate react function component structure': {
		prefix: 'bbeo-react-gen-functionComponent',
		body: [
			'export default function ${1:component_name}(${2{...props | ...children}}) {',
			'  return',
			'  (',
			'    // code JSX ...',
			'  )',
			'}',
		],
		description: '[gen]: Generate react function component structure',
	},
};
