import fs from 'fs';

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

