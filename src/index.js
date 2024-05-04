/* constants */
import {
	EMOJI,
	BANNER,
	DIST_FILE,
	DATA_PATH,
	SOURCE_PATH,
	TABLE_HEADER,
	BACK_TO_TOP,
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

			result.push(BANNER.logo);
			result.push(BANNER.title);
			result.push(BANNER.badge);
			result.push(BANNER.description);
			result.push(BANNER.usage);
			result.push("---\n");

			resolve(result.join("\n"));
		} catch (error) {
			reject(
				`[error]: an error occurred while rendering the BANNER: \n${error}`,
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
			result += `\n### ${EMOJI.title} Table of contents\n\n`;
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
		const tableColumnNumber = TABLE_HEADER.split("|").length - 2;
		let result = "";
		result += `\n### ${EMOJI.title} Snippets\n`;

		for (const category of categories) {
			const snippets = await getAllSnippetsByCategory(data, category);
			result += `\n#### ${EMOJI.category} ${category}\n`;
			snippets.forEach((snippet) => {
				result += TABLE_HEADER + "\n";
				result += getTableSeparator(tableColumnNumber) + "\n";
				result += `| ${snippet.prefix} | ${snippet.description} |\n`;
				result += `
\`\`\`js
${snippet.body.join("\n")}
\`\`\`
        `;
			});
			result += BACK_TO_TOP;
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
		const data = JSON.parse(await readFileAsync(DATA_PATH, "utf8"));
		const categories = await getAllCategoriesNamesFromDirectory(SOURCE_PATH);
		await clearFile(DIST_FILE);

		const BANNER = await renderBanner();
		await writeToFile(
			DIST_FILE,
			BANNER,
			`${EMOJI.done} BANNER generated ... [done]`,
		);

		const tableOfContents = await renderTableOfContents(categories);
		await writeToFile(
			DIST_FILE,
			tableOfContents,
			`${EMOJI.done} Table of contents generated ... [done]`,
		);

		const snippets = await renderSnippets(data, categories);
		await writeToFile(
			DIST_FILE,
			snippets,
			`${EMOJI.done} Snippets generated ... [done]`,
		);

		console.log(
			"> NOTE: Please execute `bun run prettier` to format all files before commiting",
		);
	} catch (error) {
		console.error(`\n${EMOJI.failed} An error occurred while generating ...`);
		console.error(error);
	}
}

main();
