export const js_fs = {
	'[libs]: Import fs module': {
		prefix: 'bbeo-js-libs-fs-deps',
		body: ["import fs from 'fs';"],
		description: '[libs]: Import fs module',
	},
	'[libs]: Import all data type into variable with fs lib': {
		prefix: 'bbeo-js-libs-fs-fsImport',
		body: [
			'export function fsImport(filepath) {',
			'  return JSON.parse(',
			"	fs.readFileSync(filepath, 'utf8'),",
			'  );',
			'} ',
			'',
			'',
		],
		description: '[libs]: Import all data type into variable with fs lib',
	},
	'[libs]: Export all data type into file with fs lib': {
		prefix: 'bbeo-js-libs-fs-fsExport',
		body: [
			'export function fsExport(data, filepath) {',
			'	fs.writeFile(filepath, JSON.stringify(data), err => {',
			'		if (err) {',
			'			console.log(err);',
			'		}',
			'	});',
			'}',
			'',
		],
		description: '[libs]: Export all data type into file with fs lib',
	},
};
