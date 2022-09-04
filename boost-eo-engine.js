import traverse from 'traverse';
import fs from 'fs';
import { header, footer } from './utils/docs.js';
// javascript patterns importation
import { js_patterns } from './src/patterns/js-patterns.js';
// python snippets importation
import { py_basic } from './src/snippets/python/py-basic.js';
// shellscript snippets importation
import { sh_basic } from './src/snippets/shellscript/sh-basic.js';
// javascript snippets importation
import { js_console } from './src/snippets/javascript/js-console.js';
import { js_module } from './src/snippets/javascript/js-module.js';
import { js_func } from './src/snippets/javascript/js-func.js';
import { js_gen } from './src/snippets/javascript/js-gen.js';
import { js_regex } from './src/snippets/javascript/js-regex.js';
import { js_cast } from './src/snippets/javascript/js-cast.js';
import { js_math } from './src/snippets/javascript/js-math.js';
import { js_string } from './src/snippets/javascript/js-string.js';
import { js_hybrid } from './src/snippets/javascript/js-hybrid.js';
import { js_mixte } from './src/snippets/javascript/js-mixte.js';
import { js_array } from './src/snippets/javascript/js-array.js';
import { js_destruct } from './src/snippets/javascript/js-destruct.js';
import { js_spread } from './src/snippets/javascript/js-spread.js';
import { js_struct } from './src/snippets/javascript/js-struct.js';
import { js_class } from './src/snippets/javascript/js-class.js';
import { js_object } from './src/snippets/javascript/js-object.js';
import { js_basic } from './src/snippets/javascript/js-basic.js';
import { js_date } from './src/snippets/javascript/js-date.js';
import { js_dom } from './src/snippets/javascript/js-dom.js';
import { js_bom } from './src/snippets/javascript/js-bom.js';
import { js_fs } from './src/libs/javascript/js-fs.js';
import { js_traverse } from './src/libs/javascript/js-traverse.js';

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

// snippets exportation
function exportSnippets(distPath, sourceList) {
	fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
		console.log(err ? err : 'The file was saved!');
	});
}

// object value checker
function checkObjectValue(object) {
	return Object.keys(object).length === 0;
}

// output getter
function getOutput(sourceList, distPath, snippetsTitle, language) {
	if (!checkObjectValue(sourceList)) {
		exportSnippets(distPath, sourceList);
		console.log(snippetsTitle);
		console.log(getTable(distPath, language));
	}
}

// source list refactoring
function refactorSourceList(sourceList) {
	let objRefactored = {};
	sourceList.forEach(source => {
		objRefactored = { ...objRefactored, ...source };
	});
	return objRefactored;
}

// source list data
const javascriptSourceList = refactorSourceList([
	js_array,
	js_basic,
	js_bom,
	js_cast,
	js_class,
	js_console,
	js_date,
	js_destruct,
	js_dom,
	js_func,
	js_gen,
	js_hybrid,
	js_math,
	js_mixte,
	js_module,
	js_object,
	js_regex,
	js_spread,
	js_string,
	js_struct,
]);
const pythonSourceList = refactorSourceList([py_basic]);
const shellscriptSourceList = refactorSourceList([sh_basic]);
const javascriptPatternSourceList = refactorSourceList([js_patterns]);
const javascriptLibrariesSourceList = refactorSourceList([js_fs, js_traverse]);

// output
console.log(header);
getOutput(
	javascriptSourceList,
	'./dist/boosteo-js.code-snippets',
	'#### ◾ Javascript snippets',
	'javascript',
);
getOutput(
	pythonSourceList,
	'./dist/boosteo-py.code-snippets',
	'#### ◾ Python snippets',
	'python',
);
getOutput(
	shellscriptSourceList,
	'./dist/boosteo-sh.code-snippets',
	'#### ◾ Shellscript snippets',
	'shellscript',
);
getOutput(
	javascriptPatternSourceList,
	'./dist/boosteo-js-patterns.code-snippets',
	'#### ◾ Javascript patterns',
	'javascript',
);
getOutput(
	javascriptLibrariesSourceList,
	'./dist/boosteo-js-libs.code-snippets',
	'#### ◾ Javascript libraries',
	'javascript',
);

console.log(footer);
