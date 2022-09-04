import {
	fsReadDir,
	generatePatternsStatsData,
	generateListStatsData,
} from './_utils-engine_.js';
// patterns importation
import { js_patterns } from '../src/patterns/js-patterns.js';
import { py_patterns } from '../src/patterns/py-patterns.js';
import { react_patterns } from '../src/patterns/react-patterns.js';
import { sh_patterns } from '../src/patterns/sh-patterns.js';
import { ts_patterns } from '../src/patterns/ts-patterns.js';
// librairies importation
const javascriptLibsList = '../src/libs/javascript';
const pythonLibsList = '../src/libs/python';
// snippets importation
const javascriptSnippetsListSource = '../src/snippets/javascript';
const pythonSnippetsListSource = '../src/snippets/python';
const reactSnippetsListSource = '../src/snippets/react';
const shellscriptSnippetsListSource = '../src/snippets/shellscript';
const typescriptSnippetsListSource = '../src/snippets/typescript';

// patterns total stats data
const jsPatternsTotal =
	"<div align='center'>" + Object.keys(js_patterns).length + '</div>';
const pyPatternsTotal =
	"<div align='center'>" + Object.keys(py_patterns).length + '</div>';
const reactPatternsTotal =
	"<div align='center'>" + Object.keys(react_patterns).length + '</div>';
const shPatternsTotal =
	"<div align='center'>" + Object.keys(sh_patterns).length + '</div>';
const tsPatternsTotal =
	"<div align='center'>" + Object.keys(ts_patterns).length + '</div>';

// librairies total stats data
const jsLibsTotal =
	"<div align='center'>" + fsReadDir(javascriptLibsList).length + '</div>';
const pyLibsTotal =
	"<div align='center'>" + fsReadDir(pythonLibsList).length + '</div>';

// snippets total stats data
const jsSnippetsTotal =
	"<div align='center'>" +
	fsReadDir(javascriptSnippetsListSource).length +
	'</div>';
const pySnippetsTotal =
	"<div align='center'>" +
	fsReadDir(pythonSnippetsListSource).length +
	'</div>';
const reactSnippetsTotal =
	"<div align='center'>" + fsReadDir(reactSnippetsListSource).length + '</div>';
const shSnippetsTotal =
	"<div align='center'>" +
	fsReadDir(shellscriptSnippetsListSource).length +
	'</div>';
const tsSnippetsTotal =
	"<div align='center'>" +
	fsReadDir(typescriptSnippetsListSource).length +
	'</div>';

// patterns list stats data
const jsPatternsList = generatePatternsStatsData(
	js_patterns,
	'prefix',
	'bbeo-js-pattern-',
);
const pyPatternsList = generatePatternsStatsData(
	py_patterns,
	'prefix',
	'bbeo-py-pattern-',
);
const reactPatternsList = generatePatternsStatsData(
	react_patterns,
	'prefix',
	'bbeo-react-pattern-',
);
const shPatternsList = generatePatternsStatsData(
	sh_patterns,
	'prefix',
	'bbeo-sh-pattern-',
);
const tsPatternsList = generatePatternsStatsData(
	ts_patterns,
	'prefix',
	'bbeo-ts-pattern-',
);

// librairies list stats data
const jsLibsList = generateListStatsData(
	javascriptLibsList,
	'bbeo-js-lib-',
	'js-',
	'.js',
);
const pyLibsList = generateListStatsData(
	pythonLibsList,
	'bbeo-py-lib-',
	'py-',
	'.py',
);
const jsSnippetsList = generateListStatsData(
	javascriptSnippetsListSource,
	'bbeo-js-snippet-',
	'js-',
	'.js',
);
const pySnippetsList = generateListStatsData(
	pythonSnippetsListSource,
	'bbeo-py-snippet-',
	'py-',
	'.py',
);
const reactSnippetsList = generateListStatsData(
	reactSnippetsListSource,
	'bbeo-react-snippet-',
	'react-',
	'.js',
);
const shSnippetsList = generateListStatsData(
	shellscriptSnippetsListSource,
	'bbeo-sh-snippet-',
	'sh-',
	'.sh',
);
const tsSnippetsList = generateListStatsData(
	typescriptSnippetsListSource,
	'bbeo-ts-snippet-',
	'ts-',
	'.ts',
);

// extras data
const none = "<div align='center'>-</div>";

// generate HTML table for patterns, libraries and snippets total stats data
const totalStatsDataTable = `
| Languages | Patterns | Libraries | Snippets |
| --- | --- | --- | --- |
| JavaScript | ${jsPatternsTotal} | ${jsLibsTotal} | ${jsSnippetsTotal} |
| Python | ${pyPatternsTotal} | ${pyLibsTotal} | ${pySnippetsTotal} |
| React | ${reactPatternsTotal} | ${none} | ${reactSnippetsTotal} |
| Shell Script | ${shPatternsTotal} | ${none} | ${shSnippetsTotal} |
| TypeScript | ${tsPatternsTotal} | ${none} | ${tsSnippetsTotal} |
`;

// generate HTML table for patterns, libraries and snippets list stats data
const listStatsDataTable = `
| Languages | Patterns | Libraries | Snippets |
| --- | --- | --- | --- |
| JavaScript | ${jsPatternsList} | ${jsLibsList} | ${jsSnippetsList} |
| Python | ${pyPatternsList} | ${pyLibsList} | ${pySnippetsList} |
| React | ${reactPatternsList} | ${none} | ${reactSnippetsList} |
| Shell Script | ${shPatternsList} | ${none} | ${shSnippetsList} |
| TypeScript | ${tsPatternsList} | ${none} | ${tsSnippetsList} |
`;

// all stats exportation
export const stats = `
#### ◾ Total stats
${totalStatsDataTable}

#### ◾ List stats
${listStatsDataTable}
`;