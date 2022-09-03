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

