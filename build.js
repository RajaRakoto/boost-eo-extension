/* libs */
import fs from "fs";
import path from "path";

/* constants */
// import { index } from "./src/constants/index.js";

/* utils */
// import { index } from "./src/utils/index.js";

/* snippets */
import { bbeo_array } from "./src/snippets/bbeo-array.js";
import { bbeo_object } from "./src/snippets/bbeo-object.js";
import { bbeo_destruct } from "./src/snippets/bbeo-destruct.js";
import { bbeo_dom } from "./src/snippets/bbeo-dom.js";
import { bbeo_cast } from "./src/snippets/bbeo-cast.js";
import { bbeo_spread } from "./src/snippets/bbeo-spread.js";
import { bbeo_class } from "./src/snippets/bbeo-class.js";
import { bbeo_function } from "./src/snippets/bbeo-function.js";
import { bbeo_basic } from "./src/snippets/bbeo-basic.js";
import { bbeo_regex } from "./src/snippets/bbeo-regex.js";
import { bbeo_console } from "./src/snippets/bbeo-console.js";
import { bbeo_string } from "./src/snippets/bbeo-string.js";
import { bbeo_date } from "./src/snippets/bbeo-date.js";
import { bbeo_math } from "./src/snippets/bbeo-math.js";
import { bbeo_pattern } from "./src/snippets/bbeo-pattern.js";

// ========================================

// to ensure that the directory exists, creating it if necessary
function ensureDirectoryExists(directory) {
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, { recursive: true });
	}
}

// all snippets list
const snippetsList = [
	bbeo_array,
	bbeo_object,
	bbeo_destruct,
	bbeo_dom,
	bbeo_cast,
	bbeo_spread,
	bbeo_class,
	bbeo_function,
	bbeo_basic,
	bbeo_regex,
	bbeo_console,
	bbeo_string,
	bbeo_date,
	bbeo_math,
	bbeo_pattern,
];

// merge all snippets
const concatenedSnippets = Object.assign(
	{},
	...snippetsList.map((snippet) => {
		return snippet;
	}),
);

// convert to JSON
const json = JSON.stringify(concatenedSnippets);

// write to file
const distDirectory = "./dist";
ensureDirectoryExists(distDirectory);
fs.writeFileSync(
	path.join(distDirectory, "boost-eo-extension.code-snippets"),
	json,
);
