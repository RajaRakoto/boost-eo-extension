import fs from 'fs';
import { getPatternModel, renderSnippets } from './_utils-engine_.js';

// read json output files
const bodies = JSON.parse(
	fs.readFileSync('./output/bodies-patterns.json', 'utf8'),
);
const descriptions = JSON.parse(
	fs.readFileSync('./output/descriptions-patterns.json', 'utf8'),
);
const titles = JSON.parse(
	fs.readFileSync('./output/titles-patterns.json', 'utf8'),
);

// generate patterns
console.log('{');
for (let i = 0; i < titles.length; i++) {
	console.log(
		getPatternModel(titles[i], descriptions[i], renderSnippets(bodies[i])),
	);
}
console.log('}');
