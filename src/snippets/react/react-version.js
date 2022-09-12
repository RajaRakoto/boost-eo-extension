export const react_version = {
	'[version]: Generate react 18 index.js version': {
		prefix: 'bbeo-react-version-18',
		body: [
			"import ReactDOM from 'react-dom/client';",
			'',
			"const root = ReactDOM.createRoot(document.getElementById('root'));",
			'root.render(<App />);',
		],
		description: '[version]: Generate react 18 index.js version',
	},
	'[version]: Generate react 17 index.js version': {
		prefix: 'bbeo-react-version-17',
		body: [
			"import ReactDOM from 'react-dom';",
			'',
			'ReactDOM.render(',
			'	<App />',
			"	document.getElementById('root'),",
			');',
		],
		description: '[version]: Generate react 17 index.js version',
	},
};
