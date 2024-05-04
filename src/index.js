/* constants */
import {
	emoji,
	banner,
	distFile,
	dataPath,
	sourcePath,
	tableHeader,
	backToTop,
} from "./constants";

/* utils */
import {
	readFileAsync,
	clearFile,
	writeToFile,
	getFormatedTag,
	getTableSeparator,
	getAllSnippetsByCategory,
	getAllCategoriesNamesFromDirectory,
} from "./utils";

// ==========================

function renderBanner() {
	return new Promise((resolve, reject) => {
		try {
			const result = [];

			result.push(banner.logo);
			result.push(banner.title);
			result.push(banner.badge);
			result.push(banner.description);
			result.push(banner.usage);
			result.push("---\n");

			resolve(result.join("\n"));
		} catch (error) {
			reject(
				`[error]: an error occurred while rendering the banner: \n${error}`,
			);
		}
	});
}

function renderTableOfContents(categories) {
	return new Promise((resolve, reject) => {
		try {
			let tableOfContents = categories
				.map((category) => `[${category}](${getFormatedTag(category)})`)
				.join(" | ");
			let result = "";
			result += `\n### ${emoji.title} Table of contents\n\n`;
			result += "| " + tableOfContents + " |\n";
			result += getTableSeparator(categories.length) + "\n";
			result += "\n---\n";
			resolve(result);
		} catch (error) {
			reject(
				`[error]: an error occurred while rendering the table of contents: \n${error}`,
			);
		}
	});
}

async function renderSnippets(data, categories) {
	try {
		const tableColumnNumber = tableHeader.split("|").length - 2;
		let result = "";
		result += `\n### ${emoji.title} Snippets\n`;

		for (const category of categories) {
			const snippets = await getAllSnippetsByCategory(data, category);
			result += `\n#### ${emoji.category} ${category}\n`;
			snippets.forEach((snippet) => {
				result += tableHeader + "\n";
				result += getTableSeparator(tableColumnNumber) + "\n";
				result += `| ${snippet.prefix} | ${snippet.description} |\n`;
				result += `
\`\`\`js
${snippet.body.join("\n")}
\`\`\`
        `;
			});
			result += backToTop;
		}

		return result;
	} catch (error) {
		throw new Error(
			`[error]: an error occurred while rendering the snippets: \n${error}`,
		);
	}
}

async function main() {
	try {
		const data = JSON.parse(await readFileAsync(dataPath, "utf8"));
		const categories = await getAllCategoriesNamesFromDirectory(sourcePath);
		await clearFile(distFile);

		const banner = await renderBanner();
		await writeToFile(
			distFile,
			banner,
			`${emoji.done} Banner generated ... [done]`,
		);

		const tableOfContents = await renderTableOfContents(categories);
		await writeToFile(
			distFile,
			tableOfContents,
			`${emoji.done} Table of contents generated ... [done]`,
		);

		const snippets = await renderSnippets(data, categories);
		await writeToFile(
			distFile,
			snippets,
			`${emoji.done} Snippets generated ... [done]`,
		);

		console.log(
			"> NOTE: Please execute `bun run prettier` to format all files before commiting",
		);
	} catch (error) {
		console.error(`\n${emoji.failed} An error occurred while generating ...`);
		console.error(error);
	}
}

main();
