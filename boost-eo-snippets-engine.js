import traverse from 'traverse';
import fs from 'fs';
import { header, footer } from './utils/docs.js';
import { js_basic } from './src/javascript/js-basic.js';
import { py_basic } from './src/python/py-basic.js';
import { sh_basic } from './src/shellscript/sh-basic.js';

// table generator
function generateTable(data, language) {
	let languageSyntax = '';
	if (language == 'javascript') {
		languageSyntax = 'js';
	} else if (language == 'python') {
		languageSyntax = 'py';
	} else if (language == 'shellscript') {
		languageSyntax = 'sh';
	}
	let table = `
<table>
<th>prefix</th>
<th>body</th>
<th>description</th>
`;
	for (let i = 0; i < data[0].length; i++) {
		table += `
<tr>
<td>
<strong>${data[0][i]}</strong>
</td>
<td>

\`\`\`${languageSyntax}
${data[1][i]}
\`\`\`
</td>
<td>

>${data[2][i]}
</td>
</tr>
`;
	}
	table += `
</table>
`;
	return table;
}

// table getter
function getTable(distPath, language) {
	let prefixList = [];
	let bodyList = [];
	let descriptionList = [];

	traverse(JSON.parse(fs.readFileSync(distPath, 'utf8'))).forEach(function (e) {
		if (this.key == 'prefix') {
			prefixList.push(e);
		} else if (this.key == 'body') {
			bodyList.push(e);
		} else if (this.key == 'description') {
			descriptionList.push(e);
		}
	});

	return generateTable(
		[prefixList, bodyList.map(body => `${body.join('\n')}`), descriptionList],
		language,
	);
}

// concatenation getter
function getConcatResult(sourceListData) {
	let concatResult = '{';
	sourceListData.forEach(source => {
		source = JSON.stringify(source);
		source = source.slice(1, source.length - 1);
		concatResult += source + ',';
	});
	return concatResult.slice(0, concatResult.length - 2) + '}}';
}

// snippets exportation
function exportSnippets(distPath, concatResult) {
	fs.writeFileSync(distPath, concatResult, 'utf8', err => {
		console.log(err ? err : 'The file was saved!');
	});
}

// object value checker
function checkObjectValue(object) {
	return Object.keys(object).length === 0;
}

// source list data
const javascriptSourceList = [js_basic];
const pythonSourceList = [py_basic];
const shellscriptSourceList = [sh_basic];

// output
console.log(header);
if (!checkObjectValue(js_basic)) {
	exportSnippets(
		'./dist/boosteo-js.code-snippets',
		getConcatResult(javascriptSourceList),
	);
	console.log('#### ◾ Javascript snippets');
	console.log(getTable('./dist/boosteo-js.code-snippets', 'javascript'));
}
if (!checkObjectValue(py_basic)) {
	exportSnippets(
		'./dist/boosteo-py.code-snippets',
		getConcatResult(pythonSourceList),
	);
	console.log('#### ◾ Python snippets');
	console.log(getTable('./dist/boosteo-py.code-snippets', 'python'));
}
if (!checkObjectValue(sh_basic)) {
	exportSnippets(
		'./dist/boosteo-sh.code-snippets',
		getConcatResult(shellscriptSourceList),
	);
	console.log('#### ◾ Shellscript snippets');
	console.log(getTable('./dist/boosteo-sh.code-snippets', 'shellscript'));
}
console.log(footer);
