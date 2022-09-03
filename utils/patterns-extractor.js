import { patterns_data } from './patterns-data.js';
import { fsExport, titleRegex, descRegex } from './_utils-engine_.js';

// get all titles & bodies from pattern object
const titles = patterns_data
	.map(item => item.title)
	.filter(item => item !== undefined);
const bodies = patterns_data
	.map(item => item.body)
	.filter(item => item !== undefined);

// filter & extract all titles & descriptions
const titlesFiltered = titles.filter(item => titleRegex(item)).map(item => item.replace('. ', '-'));
const descriptionsFiltered = titles.filter(item => descRegex(item));

// all exportations
fsExport(titlesFiltered, './output/titles-patterns.json');
fsExport(descriptionsFiltered, './output/descriptions-patterns.json');
fsExport(bodies, './output/bodies-patterns.json');

// check output length
console.log('~ EXPORTATION LOGS ~');
console.log('titles length = ' + titlesFiltered.length);
console.log('descriptions length = ' + descriptionsFiltered.length);
console.log('bodies length = ' + bodies.length);
