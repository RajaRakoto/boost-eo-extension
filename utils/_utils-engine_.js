import fs from 'fs';
import traverse from 'traverse';

// title expression checker
export function titleRegex(input) {
	let regex = /\d\.\s+/i;
	return regex.test(input);
}

// description expression checker
export function descRegex(input) {
	let regex = /This\s+snippet\s/i;
	return regex.test(input);
}

// fs exportation
export function fsExport(data, filename) {
	fs.writeFile(filename, JSON.stringify(data), err => {
		if (err) {
			console.log(err);
		}
	});
}

// get file list in directory
export function fsReadDir(path) {
	return fs.readdirSync(path);
}

// pattern model getter
export function getPatternModel(title, description, body) {
	return `
	"[pattern]: ${description}": {
	  "prefix": "bbeo-js-pattern-${title}",
	  "body": [${body}],
	  "description": "[pattern]: ${description}"
	},
	`;
}

// snippet render method
export function renderSnippets(input) {
	const separatedSnippet = input
		.replace(/\\/g, '\\\\')
		.replace(/"/g, '\\"')
		.split('\n');
	const separatedSnippetLength = separatedSnippet.length;
	const newSnippet = separatedSnippet.map((line, index) => {
		return index === separatedSnippetLength - 1 ? `"${line}"` : `"${line}",`;
	});
	return newSnippet.join('\n');
}

// get all key value from an object
export function traverseKeyValueByObject(source, key) {
	let traverseResult = [];
	traverse(source).forEach(function (e) {
		if (this.key == key) {
			traverseResult.push(e);
		}
	});
	return traverseResult;
}

// list stat data generator
export function generateListStatsData(
	source,
	firstPrefix,
	secondPrefix,
	extension,
) {
	const listResult = fsReadDir(source)
		.map(e => (e.includes(firstPrefix) ? e.replace(firstPrefix, '') : e))
		.map(e => e.replace(extension, ''))
		.map(e => e.replace(secondPrefix, ''))
		.map(e => '`' + e + '`').join` `;
	return listResult == '' ? '<div align="center"> n/a </div>' : '<div align="center">' + listResult + '</div>';
}

// patterns stat data generator
export function generatePatternsStatsData(source, key, prefix) {
	const patternsResult = traverseKeyValueByObject(source, key)
		.map(e => (e.includes(prefix) ? e.replace(prefix, '') : e))
		.map(e => '`' + e + '`').join` `;
	return patternsResult == '' ? '<div align="center"> n/a </div>' : '<div align="center">' + patternsResult + '</div>';
}

// table generator
export function generateTable(data, language) {
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
export function getTable(distPath, language) {
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
export function exportSnippets(distPath, sourceList) {
	fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
		console.log(err ? err : 'The file was saved!');
	});
}

// object value checker
export function checkObjectValue(object) {
	return Object.keys(object).length === 0;
}

// output getter
export function getOutput(sourceList, distPath, snippetsTitle, language) {
	if (!checkObjectValue(sourceList)) {
		exportSnippets(distPath, sourceList);
		console.log(snippetsTitle);
		console.log(getTable(distPath, language));
	}
}

// source list refactoring
export function refactorSourceList(sourceList) {
	let objRefactored = {};
	sourceList.forEach(source => {
		objRefactored = { ...objRefactored, ...source };
	});
	return objRefactored;
}