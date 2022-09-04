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
