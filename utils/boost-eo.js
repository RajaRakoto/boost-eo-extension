// engine importation
import { getOutput, refactorSourceList } from './_utils-engine_.js';
// docs importation
import { banner } from '../docs/banner.js';
import { contrib } from '../docs/contrib.js';
import { desc } from '../docs/desc.js';
import { feats } from '../docs/feats.js';
import { install } from '../docs/install.js';
import { usage } from '../docs/usage.js';
import { stats } from './stats.js';
// javascript libraires importation
import { js_fs } from '../src/libs/javascript/js-fs.js';
import { js_traverse } from '../src/libs/javascript/js-traverse.js';
// javascript patterns importation
import { js_patterns } from '../src/patterns/js-patterns.js';
// javascript snippets importation
import { js_console } from '../src/snippets/javascript/js-console.js';
import { js_module } from '../src/snippets/javascript/js-module.js';
import { js_func } from '../src/snippets/javascript/js-func.js';
import { js_gen } from '../src/snippets/javascript/js-gen.js';
import { js_regex } from '../src/snippets/javascript/js-regex.js';
import { js_cast } from '../src/snippets/javascript/js-cast.js';
import { js_math } from '../src/snippets/javascript/js-math.js';
import { js_string } from '../src/snippets/javascript/js-string.js';
import { js_hybrid } from '../src/snippets/javascript/js-hybrid.js';
import { js_mixte } from '../src/snippets/javascript/js-mixte.js';
import { js_array } from '../src/snippets/javascript/js-array.js';
import { js_destruct } from '../src/snippets/javascript/js-destruct.js';
import { js_spread } from '../src/snippets/javascript/js-spread.js';
import { js_struct } from '../src/snippets/javascript/js-struct.js';
import { js_class } from '../src/snippets/javascript/js-class.js';
import { js_object } from '../src/snippets/javascript/js-object.js';
import { js_basic } from '../src/snippets/javascript/js-basic.js';
import { js_date } from '../src/snippets/javascript/js-date.js';
import { js_dom } from '../src/snippets/javascript/js-dom.js';
import { js_bom } from '../src/snippets/javascript/js-bom.js';

// source list data
const javascriptSourceList = refactorSourceList([
	js_array,
	js_basic,
	js_bom,
	js_cast,
	js_class,
	js_console,
	js_date,
	js_destruct,
	js_dom,
	js_func,
	js_gen,
	js_hybrid,
	js_math,
	js_mixte,
	js_module,
	js_object,
	js_regex,
	js_spread,
	js_string,
	js_struct,
]);
const javascriptPatternSourceList = refactorSourceList([js_patterns]);
const javascriptLibrariesSourceList = refactorSourceList([js_fs, js_traverse]);

// export docs & snippets & patterns
console.log(banner);
console.log(desc);
console.log(install);
console.log(feats);
console.log(contrib);
console.log(stats);
console.log(usage);
getOutput(
	javascriptSourceList,
	'../dist/boosteo-js-snippets.code-snippets',
	'#### ◾ Javascript snippets',
	'javascript',
);
getOutput(
	javascriptPatternSourceList,
	'../dist/boosteo-js-patterns.code-snippets',
	'#### ◾ Javascript patterns',
	'javascript',
);
getOutput(
	javascriptLibrariesSourceList,
	'../dist/boosteo-js-libs.code-snippets',
	'#### ◾ Javascript libraries',
	'javascript',
);
console.log(`
<div align="center">

#### Enjoy it 😉
</div>
`);
