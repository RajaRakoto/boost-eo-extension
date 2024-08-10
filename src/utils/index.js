/* constants */
import { EMOJI } from "../constants";

/* libs */
import * as fs from "node:fs";
import * as path from "node:path";
import util from "node:util";

// ==========================

export const writeFileAsync = util.promisify(fs.writeFile);
export const readFileAsync = util.promisify(fs.readFile);
export const readDirAsync = util.promisify(fs.readdir);
export const fileExistsAsync = util.promisify(fs.exists);

/**
 * @description Write content to a file
 * @param {string} destination The path to the file to write
 * @param {string} content The content to write to the file
 * @param {string} successMessage The message to display if the file is written successfully
 */
export async function writeToFile(destination, content, successMessage) {
	try {
		const fileExists = await fileExistsAsync(destination);
		let finalContent = content;

		if (fileExists) {
			const existingContent = await readFileAsync(destination, "utf8");
			finalContent = existingContent + content;
		}

		await writeFileAsync(destination, finalContent);
		console.log(successMessage);
	} catch (error) {
		throw new Error(
			`[error]: an error occurred while writing the file: \n${error}`,
		);
	}
}

/**
 * @description Clear the content of a file without deleting it
 * @param {string} filePath The path to the file to clear
 */
export async function clearFile(filePath) {
	try {
		await writeFileAsync(filePath, "");
		console.log(`${EMOJI.done} ${filePath} has been cleared ... [done]`);
	} catch (error) {
		throw new Error(
			`[error]: an error occurred while clearing the file: \n${error}`,
		);
	}
}

/**
 * @description Create a table separator
 * @param {number} columns Number of columns
 */
export function getTableSeparator(columns) {
	if (columns <= 0) {
		throw new Error("[error]: columns must be greater than 0");
	}
	return `| ${Array.from({ length: columns }, () => " :-- ").join("|")} |`;
}

/**
 * @description Transform text to markdown tag
 * @param {string} text Input of text to transform
 */
export function getFormatedTag(text) {
	let transformedText = text.replace(/\(|\)/g, "-");
	transformedText = transformedText.replace(/\+|&/g, "--");
	transformedText = transformedText.replace(/ /g, "-");
	transformedText = `#-${transformedText.toLowerCase()}`;
	return transformedText;
}

/**
 * @description Extract all snippets by category
 * @param {Object} data Snippets data
 * @param {string} category Category to extract from the snippets
 */
export function getAllSnippetsByCategory(data, category) {
	return new Promise((resolve, reject) => {
		try {
			const snippets = [];

			for (const key in data) {
				if (Object.prototype.hasOwnProperty.call(data, key)) {
					const snippet = data[key];
					if (snippet.prefix.startsWith(`bbeo-${category}-`)) {
						snippets.push({
							prefix: snippet.prefix,
							body: snippet.body,
							description: snippet.description,
						});
					}
				}
			}

			resolve(snippets);
		} catch (error) {
			reject(
				`[error]: an error occurred while extracting snippets by category: \n${error}`,
			);
		}
	});
}

/**
 * @description Get the names of all categories in a directory
 * @param {string} source The path to the directory containing the JavaScript files
 */
export async function getAllCategoriesNamesFromDirectory(source) {
	try {
		const files = await readDirAsync(source);
		const jsFiles = files.filter((file) => path.extname(file) === ".js");
		const filteredJsFiles = jsFiles
			.map((file) => path.basename(file, ".js"))
			.sort();
		return filteredJsFiles.map((file) => file.split("-")[1]);
	} catch (error) {
		throw new Error(
			`[error]: an error occurred while getting the JavaScript files names: \n${error}`,
		);
	}
}
