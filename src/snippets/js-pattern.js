export const js_patterns = {
	"[pattern]: This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value.":
		{
			prefix: "bbeo-pattern-array-1-all",
			body: [
				"const all = (arr, fn = Boolean) => arr.every(fn);",
				"",
				"all([4, 2, 3], x => x > 1); // true",
				"all([1, 2, 3]); // true",
			],
			description:
				"[pattern]: This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value.",
		},

	"[pattern]: This snippet checks whether all elements of the array are equal.":
		{
			prefix: "bbeo-pattern-array-2-allEqual",
			body: [
				"const allEqual = arr => arr.every(val => val === arr[0]);",
				"",
				"allEqual([1, 2, 3, 4, 5, 6]); // false",
				"allEqual([1, 1, 1, 1]); // true",
			],
			description:
				"[pattern]: This snippet checks whether all elements of the array are equal.",
		},

	"[pattern]: This snippet checks whether two numbers are approximately equal to each other, with a small difference.":
		{
			prefix: "bbeo-pattern-math-3-approximatelyEqual",
			body: [
				"const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;",
				"",
				"approximatelyEqual(Math.PI / 2.0, 1.5708); // true",
			],
			description:
				"[pattern]: This snippet checks whether two numbers are approximately equal to each other, with a small difference.",
		},

	"[pattern]: This snippet converts the elements to strings with comma-separated values.":
		{
			prefix: "bbeo-pattern-cast-4-arrayToCSV",
			body: [
				"const arrayToCSV = (arr, delimiter = ',') =>",
				"  arr.map(v => v.map(x => `\"${x}\"`).join(delimiter)).join('\\n');",
				"  ",
				"arrayToCSV([['a', 'b'], ['c', 'd']]); // '\"a\",\"b\"\\n\"c\",\"d\"'",
				"arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '\"a\";\"b\"\\n\"c\";\"d\"'```",
			],
			description:
				"[pattern]: This snippet converts the elements to strings with comma-separated values.",
		},

	"[pattern]: This snippet converts the elements of an array into  tags and appends them to the list of the given ID.":
		{
			prefix: "bbeo-pattern-cast-5-arrayToHtmlList",
			body: [
				"const arrayToHtmlList = (arr, listID) =>",
				"  (el => (",
				"    (el = document.querySelector('#' + listID)),",
				"    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))",
				"  ))();",
				"  ",
				"arrayToHtmlList(['item 1', 'item 2'], 'myListID');",
			],
			description:
				"[pattern]: This snippet converts the elements of an array into  tags and appends them to the list of the given ID.",
		},

	"[pattern]: This snippet executes a function, returning either the result or the caught error object.":
		{
			prefix: "bbeo-pattern-func-6-attempt",
			body: [
				"const attempt = (fn, ...args) => {",
				"  try {",
				"    return fn(...args);",
				"  } catch (e) {",
				"    return e instanceof Error ? e : new Error(e);",
				"  }",
				"};",
				"var elements = attempt(function(selector) {",
				"  return document.querySelectorAll(selector);",
				"}, '>_>');",
				"if (elements instanceof Error) elements = []; // elements = []",
			],
			description:
				"[pattern]: This snippet executes a function, returning either the result or the caught error object.",
		},

	"[pattern]: This snippet returns the average of two or more numerical values.":
		{
			prefix: "bbeo-pattern-array-7-average",
			body: [
				"const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;",
				"average(...[1, 2, 3]); // 2",
				"average(1, 2, 3); // 2",
			],
			description:
				"[pattern]: This snippet returns the average of two or more numerical values.",
		},

	"[pattern]: This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function.":
		{
			prefix: "bbeo-pattern-mixte-8-averageBy",
			body: [
				"const averageBy = (arr, fn) =>",
				"  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /",
				"  arr.length;",
				"  ",
				"averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5",
				"averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5",
			],
			description:
				"[pattern]: This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function.",
		},

	"[pattern]: This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise.":
		{
			prefix: "bbeo-pattern-array-9-bifurcate",
			body: [
				"const bifurcate = (arr, filter) =>",
				"  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);",
				"bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); ",
				"// [ ['beep', 'boop', 'bar'], ['foo'] ]",
			],
			description:
				"[pattern]: This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise.",
		},

	"[pattern]: This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group.":
		{
			prefix: "bbeo-pattern-array-10-bifurcateBy",
			body: [
				"const bifurcateBy = (arr, fn) =>",
				"  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);",
				"  ",
				"bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); ",
				"// [ ['beep', 'boop', 'bar'], ['foo'] ]",
			],
			description:
				"[pattern]: This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group.",
		},

	"[pattern]: This snippet checks whether the bottom of a page is visible.": {
		prefix: "bbeo-pattern-dom-11-bottomVisible",
		body: [
			"const bottomVisible = () =>",
			"  document.documentElement.clientHeight + window.scrollY >=",
			"  (document.documentElement.scrollHeight || document.documentElement.clientHeight);",
			"",
			"bottomVisible(); // true",
		],
		description:
			"[pattern]: This snippet checks whether the bottom of a page is visible.",
	},

	"[pattern]: This snippet returns the length of a string in bytes.": {
		prefix: "bbeo-pattern-cast-12-byteSize",
		body: [
			"const byteSize = str => new Blob([str]).size;",
			"",
			"byteSize('😀'); // 4",
			"byteSize('Hello World'); // 11",
		],
		description:
			"[pattern]: This snippet returns the length of a string in bytes.",
	},

	"[pattern]: This snippet capitalizes the first letter of a string.": {
		prefix: "bbeo-pattern-string-13-capitalize",
		body: [
			"const capitalize = ([first, ...rest]) =>",
			"  first.toUpperCase() + rest.join('');",
			"  ",
			"capitalize('fooBar'); // 'FooBar'",
			"capitalize('fooBar', true); // 'Foobar'",
		],
		description:
			"[pattern]: This snippet capitalizes the first letter of a string.",
	},

	"[pattern]: This snippet capitalizes the first letter of every word in a given string.":
		{
			prefix: "bbeo-pattern-string-14-capitalizeEveryWord",
			body: [
				"const capitalizeEveryWord = str => str.replace(/\\b[a-z]/g, char => char.toUpperCase());",
				"",
				"capitalizeEveryWord('hello world!'); // 'Hello World!'",
			],
			description:
				"[pattern]: This snippet capitalizes the first letter of every word in a given string.",
		},

	"[pattern]: This snippet converts a non-array value into array.": {
		prefix: "bbeo-pattern-cast-15-castArray",
		body: [
			"const castArray = val => (Array.isArray(val) ? val : [val]);",
			"",
			"castArray('foo'); // ['foo']",
			"castArray([1]); // [1]",
		],
		description:
			"[pattern]: This snippet converts a non-array value into array.",
	},

	"[pattern]: This snippet removes false values from an array.": {
		prefix: "bbeo-pattern-array-16-compact",
		body: [
			"const compact = arr => arr.filter(Boolean);",
			"",
			"compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); ",
			"// [ 1, 2, 3, 'a', 's', 34 ]",
		],
		description: "[pattern]: This snippet removes false values from an array.",
	},

	"[pattern]: This snippet counts the occurrences of a value in an array.": {
		prefix: "bbeo-pattern-array-17-countOccurrences",
		body: [
			"const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);",
			"countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3",
		],
		description:
			"[pattern]: This snippet counts the occurrences of a value in an array.",
	},

	"[pattern]: This snippet uses  to check whether a directory exists and then  to create it if it doesn’t.":
		{
			prefix: "bbeo-pattern-lib-18-createDirIfNotExists",
			body: [
				"const fs = require('fs');",
				"const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);",
				"createDirIfNotExists('test'); ",
				"// creates the directory 'test', if it doesn't exist",
			],
			description:
				"[pattern]: This snippet uses  to check whether a directory exists and then  to create it if it doesn’t.",
		},

	"[pattern]: This snippet returns the current URL.": {
		prefix: "bbeo-pattern-bom-19-currentURL",
		body: [
			"const currentURL = () => window.location.href;",
			"",
			"currentURL(); // 'https://medium.com/@fatosmorina'",
		],
		description: "[pattern]: This snippet returns the current URL.",
	},

	"[pattern]: This snippet gets the day of the year from a object.": {
		prefix: "bbeo-pattern-date-20-dayOfYear",
		body: [
			"const dayOfYear = date =>",
			"  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);",
			"",
			"dayOfYear(new Date()); // 272",
		],
		description:
			"[pattern]: This snippet gets the day of the year from a object.",
	},

	"[pattern]: This snippet turns the first letter of a string into lowercase.":
		{
			prefix: "bbeo-pattern-string-21-decapitalize",
			body: [
				"const decapitalize = ([first, ...rest]) =>",
				"  first.toLowerCase() + rest.join('')",
				"",
				"decapitalize('FooBar'); // 'fooBar'",
				"decapitalize('FooBar'); // 'fooBar'",
			],
			description:
				"[pattern]: This snippet turns the first letter of a string into lowercase.",
		},

	"[pattern]: This snippet flattens an array recursively.": {
		prefix: "bbeo-pattern-array-22-deepFlatten",
		body: [
			"const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));",
			"",
			"deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]",
		],
		description: "[pattern]: This snippet flattens an array recursively.",
	},

	"[pattern]: This snippet assigns default values for all properties in an object that are .":
		{
			prefix: "bbeo-pattern-object-23-default",
			body: [
				"const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);",
				"",
				"defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }",
			],
			description:
				"[pattern]: This snippet assigns default values for all properties in an object that are .",
		},

	"[pattern]: This snippet delays the execution of a function until the current call stack is cleared.":
		{
			prefix: "bbeo-pattern-func-24-defer",
			body: [
				"const defer = (fn, ...args) => setTimeout(fn, 1, ...args);",
				"",
				"defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'",
			],
			description:
				"[pattern]: This snippet delays the execution of a function until the current call stack is cleared.",
		},

	"[pattern]: This snippet can be used to convert a value from degrees to radians.":
		{
			prefix: "bbeo-pattern-cast-25-degreesToRads",
			body: [
				"const degreesToRads = deg => (deg * Math.PI) / 180.0;",
				"",
				"degreesToRads(90.0); // ~1.5708",
			],
			description:
				"[pattern]: This snippet can be used to convert a value from degrees to radians.",
		},

	"[pattern]: This snippet finds the difference between two arrays.": {
		prefix: "bbeo-pattern-array-26-difference",
		body: [
			"const difference = (a, b) => {",
			"  const s = new Set(b);",
			"  return a.filter(x => !s.has(x));",
			"};",
			"",
			"difference([1, 2, 3], [1, 2, 4]); // [3]",
		],
		description:
			"[pattern]: This snippet finds the difference between two arrays.",
	},

	"[pattern]: This snippet returns the difference between two arrays, after applying a given function to each element of both lists.":
		{
			prefix: "bbeo-pattern-mixte-27-differenceBy",
			body: [
				"const differenceBy = (a, b, fn) => {",
				"  const s = new Set(b.map(fn));",
				"  return a.filter(x => !s.has(fn(x)));",
				"};",
				"",
				"differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]",
				"differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]",
			],
			description:
				"[pattern]: This snippet returns the difference between two arrays, after applying a given function to each element of both lists.",
		},

	"[pattern]: This snippet removes the values for which the comparator function returns .":
		{
			prefix: "bbeo-pattern-array-28-differenceWith",
			body: [
				"const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);",
				"",
				"differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); ",
				"// [1, 1.2]",
			],
			description:
				"[pattern]: This snippet removes the values for which the comparator function returns .",
		},

	"[pattern]: This snippet gets a number as input and returns an array of its digits.":
		{
			prefix: "bbeo-pattern-cast-29-digitize",
			body: [
				"const digitize = n => [...`${n}`].map(i => parseInt(i));",
				"",
				"digitize(431); // [4, 3, 1]",
			],
			description:
				"[pattern]: This snippet gets a number as input and returns an array of its digits.",
		},

	"[pattern]: This snippet returns the distance between two points by calculating the Euclidean distance.":
		{
			prefix: "bbeo-pattern-math-30-distance",
			body: [
				"const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);",
				"",
				"distance(1, 1, 2, 3); // 2.23606797749979",
			],
			description:
				"[pattern]: This snippet returns the distance between two points by calculating the Euclidean distance.",
		},

	"[pattern]: This snippet returns a new array with  elements removed from the left.":
		{
			prefix: "bbeo-pattern-array-31-DropLeft",
			body: [
				"const dropLeft = (arr, n = 1) => arr.slice(n);",
				"",
				"dropLeft([1, 2, 3]); // [2,3]",
				"dropLeft([1, 2, 3], 2); // [3]",
				"dropLeft([1, 2, 3], 42); // []",
			],
			description:
				"[pattern]: This snippet returns a new array with  elements removed from the left.",
		},

	"[pattern]: This snippet returns a new array with  elements removed from the right.":
		{
			prefix: "bbeo-pattern-array-32-dropRight",
			body: [
				"const dropRight = (arr, n = 1) => arr.slice(0, -n);",
				"",
				"dropRight([1, 2, 3]); // [1,2]",
				"dropRight([1, 2, 3], 2); // [1]",
				"dropRight([1, 2, 3], 42); // []",
			],
			description:
				"[pattern]: This snippet returns a new array with  elements removed from the right.",
		},

	"[pattern]: This snippet removes elements from the right side of an array until the passed function returns .":
		{
			prefix: "bbeo-pattern-array-33-dropRightWhile",
			body: [
				"const dropRightWhile = (arr, func) => {",
				"  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);",
				"  return arr;",
				"};",
				"",
				"dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]",
			],
			description:
				"[pattern]: This snippet removes elements from the right side of an array until the passed function returns .",
		},

	"[pattern]: This snippet removes elements from an array until the passed function returns .":
		{
			prefix: "bbeo-pattern-array-34-dropWhile",
			body: [
				"const dropWhile = (arr, func) => {",
				"  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);",
				"  return arr;",
				"};",
				"",
				"dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]",
			],
			description:
				"[pattern]: This snippet removes elements from an array until the passed function returns .",
		},

	"[pattern]: This snippet checks whether the parent element contains the child.":
		{
			prefix: "bbeo-pattern-dom-35-elementContains",
			body: [
				"const elementContains = (parent, child) => parent !== child && parent.contains(child);",
				"",
				"elementContains(document.querySelector('head'), document.querySelector('title')); // true",
				"elementContains(document.querySelector('body'), document.querySelector('body')); // false",
			],
			description:
				"[pattern]: This snippet checks whether the parent element contains the child.",
		},

	"[pattern]: This snippet removes duplicate values in an array.": {
		prefix: "bbeo-pattern-array-36-Filter Duplicate Elements",
		body: [
			"const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));",
			"",
			"filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]",
		],
		description:
			"[pattern]: This snippet removes duplicate values in an array.",
	},

	"[pattern]: This snippet returns the first key that satisfies a given function.":
		{
			prefix: "bbeo-pattern-object-37-findKey",
			body: [
				"const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));",
				"",
				"findKey(",
				"  {",
				"    barney: { age: 36, active: true },",
				"    fred: { age: 40, active: false },",
				"    pebbles: { age: 1, active: true }",
				"  },",
				"  o => o['active']",
				"); // 'barney'",
			],
			description:
				"[pattern]: This snippet returns the first key that satisfies a given function.",
		},

	"[pattern]: This snippet returns the last element for which a given function returns a truthy value.":
		{
			prefix: "bbeo-pattern-array-38-findLast",
			body: [
				"const findLast = (arr, fn) => arr.filter(fn).pop();",
				"",
				"findLast([1, 2, 3, 4], n => n % 2 === 1); // 3",
			],
			description:
				"[pattern]: This snippet returns the last element for which a given function returns a truthy value.",
		},

	"[pattern]: This snippet flattens an array up to a specified depth using recursion.":
		{
			prefix: "bbeo-pattern-array-39-flatten",
			body: [
				"const flatten = (arr, depth = 1) =>",
				"  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);",
				"",
				"flatten([1, [2], 3, 4]); // [1, 2, 3, 4]",
				"flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]",
			],
			description:
				"[pattern]: This snippet flattens an array up to a specified depth using recursion.",
		},

	"[pattern]: This snippet executes a function for each element of an array starting from the array’s last element.":
		{
			prefix: "bbeo-pattern-array-40-forEachRight",
			body: [
				"const forEachRight = (arr, callback) =>",
				"  arr",
				"    .slice(0)",
				"    .reverse()",
				"    .forEach(callback);",
				"    ",
				"forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'",
			],
			description:
				"[pattern]: This snippet executes a function for each element of an array starting from the array’s last element.",
		},

	"[pattern]: This snippet iterates on each property of an object and iterates a callback for each one respectively.":
		{
			prefix: "bbeo-pattern-object-41-forOwn",
			body: [
				"const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));",
				"forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1",
			],
			description:
				"[pattern]: This snippet iterates on each property of an object and iterates a callback for each one respectively.",
		},

	"[pattern]: This snippet prints the name of a function into the console.": {
		prefix: "bbeo-pattern-func-42-functionName",
		body: [
			"const functionName = fn => (console.debug(fn.name), fn);",
			"",
			"functionName(Math.max); // max (logged in debug channel of console)",
		],
		description:
			"[pattern]: This snippet prints the name of a function into the console.",
	},

	"[pattern]: This snippet can be used to get the time from a object as a string.":
		{
			prefix: "bbeo-pattern-date-43-Get Time From Date",
			body: [
				"const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);",
				"",
				'getColonTimeFromDate(new Date()); // "08:38:00"',
			],
			description:
				"[pattern]: This snippet can be used to get the time from a object as a string.",
		},

	"[pattern]: This snippet can be used to find the difference in days between two dates.":
		{
			prefix: "bbeo-pattern-date-44-Get Days Between Dates",
			body: [
				"const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>",
				"  (dateFinal - dateInitial) / (1000 * 3600 * 24);",
				"  ",
				"getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2",
			],
			description:
				"[pattern]: This snippet can be used to find the difference in days between two dates.",
		},

	"[pattern]: This snippet can be used to get the value of a CSS rule for a particular element.":
		{
			prefix: "bbeo-pattern-dom-45-getStyle",
			body: [
				"const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];",
				"",
				"getStyle(document.querySelector('p'), 'font-size'); // '16px'",
			],
			description:
				"[pattern]: This snippet can be used to get the value of a CSS rule for a particular element.",
		},

	"[pattern]: This snippet can be used to get the type of a value.": {
		prefix: "bbeo-pattern-test-46-getType",
		body: [
			"const getType = v =>",
			"  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();",
			"  ",
			"getType(new Set([1, 2, 3])); // 'set'",
		],
		description:
			"[pattern]: This snippet can be used to get the type of a value.",
	},

	"[pattern]: This snippet checks whether an element has a particular class.": {
		prefix: "bbeo-pattern-dom-47-hasClass",
		body: [
			"const hasClass = (el, className) => el.classList.contains(className);",
			"hasClass(document.querySelector('p.special'), 'special'); // true",
		],
		description:
			"[pattern]: This snippet checks whether an element has a particular class.",
	},

	"[pattern]: This snippet returns the  of a list.": {
		prefix: "bbeo-pattern-array-48-head",
		body: ["const head = arr => arr[0];", "", "head([1, 2, 3]); // 1"],
		description: "[pattern]: This snippet returns the  of a list.",
	},

	"[pattern]: This snippet can be used to hide all elements specified.": {
		prefix: "bbeo-pattern-dom-49-hide",
		body: [
			"const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));",
			"",
			"hide(document.querySelectorAll('img')); // Hides all <img> elements on the page",
		],
		description:
			"[pattern]: This snippet can be used to hide all elements specified.",
	},

	"[pattern]: This snippet can be used to redirect from HTTP to HTTPS in a particular domain.":
		{
			prefix: "bbeo-pattern-bom-50-httpsRedirect",
			body: [
				"const httpsRedirect = () => {",
				"  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);",
				"};",
				"",
				"httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com",
			],
			description:
				"[pattern]: This snippet can be used to redirect from HTTP to HTTPS in a particular domain.",
		},

	"[pattern]: This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it.":
		{
			prefix: "bbeo-pattern-array-51-indexOfAll",
			body: [
				"const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);",
				"",
				"indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]",
				"indexOfAll([1, 2, 3], 4); // []",
			],
			description:
				"[pattern]: This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it.",
		},

	"[pattern]: This snippet returns all elements of an array except the last one.":
		{
			prefix: "bbeo-pattern-array-52-initial",
			body: [
				"const initial = arr => arr.slice(0, -1);",
				"",
				"initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);",
				"initial([1, 2, 3]); // [1,2]",
			],
			description:
				"[pattern]: This snippet returns all elements of an array except the last one.",
		},

	"[pattern]: This snippet can be used to insert an HTML string after the end of a particular element.":
		{
			prefix: "bbeo-pattern-dom-53-insertAfter",
			body: [
				"const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);",
				"",
				"insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id=\"myId\">...</div> <p>after</p>",
			],
			description:
				"[pattern]: This snippet can be used to insert an HTML string after the end of a particular element.",
		},

	"[pattern]: This snippet can be used to insert an HTML string before a particular element.":
		{
			prefix: "bbeo-pattern-dom-54-insertBefore",
			body: [
				"const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);",
				"",
				"insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id=\"myId\">...</div>",
			],
			description:
				"[pattern]: This snippet can be used to insert an HTML string before a particular element.",
		},

	"[pattern]: This snippet can be used to get an array with elements that are included in two other arrays.":
		{
			prefix: "bbeo-pattern-array-55-intersection",
			body: [
				"const intersection = (a, b) => {",
				"  const s = new Set(b);",
				"  return a.filter(x => s.has(x));",
				"};",
				"",
				"intersection([1, 2, 3], [4, 3, 2]); // [2, 3]",
			],
			description:
				"[pattern]: This snippet can be used to get an array with elements that are included in two other arrays.",
		},

	"[pattern]: This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays.":
		{
			prefix: "bbeo-pattern-array-56-intersectionBy",
			body: [
				"const intersectionBy = (a, b, fn) => {",
				"  const s = new Set(b.map(fn));",
				"  return a.filter(x => s.has(fn(x)));",
				"};",
				"",
				"intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]",
			],
			description:
				"[pattern]: This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays.",
		},

	"[pattern]: This snippet can be used to return a list of elements that exist in both arrays by using a comparator function.":
		{
			prefix: "bbeo-pattern-array-57-intersectionWith",
			body: [
				"const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);",
				"",
				"intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]",
			],
			description:
				"[pattern]: This snippet can be used to return a list of elements that exist in both arrays by using a comparator function.",
		},

	"[pattern]: This snippet can be used to check if a value is of a particular type.":
		{
			prefix: "bbeo-pattern-test-58-is",
			body: [
				"const is = (type, val) => ![, null].includes(val) && val.constructor === type;",
				"",
				"is(Array, [1]); // true",
				"is(ArrayBuffer, new ArrayBuffer()); // true",
				"is(Map, new Map()); // true",
				"is(RegExp, /./g); // true",
				"is(Set, new Set()); // true",
				"is(WeakMap, new WeakMap()); // true",
				"is(WeakSet, new WeakSet()); // true",
				"is(String, ''); // true",
				"is(String, new String('')); // true",
				"is(Number, 1); // true",
				"is(Number, new Number(1)); // true",
				"is(Boolean, true); // true",
				"is(Boolean, new Boolean(true)); // true",
			],
			description:
				"[pattern]: This snippet can be used to check if a value is of a particular type.",
		},

	"[pattern]: This snippet can be used to check whether a date is after another date.":
		{
			prefix: "bbeo-pattern-test-59-isAfterDate",
			body: [
				"const isAfterDate = (dateA, dateB) => dateA > dateB;",
				"",
				"isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true",
			],
			description:
				"[pattern]: This snippet can be used to check whether a date is after another date.",
		},

	"[pattern]: This snippet can be used to check whether a particular string is an anagram with another string.":
		{
			prefix: "bbeo-pattern-test-60-isAnagram",
			body: [
				"const isAnagram = (str1, str2) => {",
				"  const normalize = str =>",
				"    str",
				"      .toLowerCase()",
				"      .replace(/[^a-z0-9]/gi, '')",
				"      .split('')",
				"      .sort()",
				"      .join('');",
				"  return normalize(str1) === normalize(str2);",
				"};",
				"",
				"isAnagram('iceman', 'cinema'); // true",
			],
			description:
				"[pattern]: This snippet can be used to check whether a particular string is an anagram with another string.",
		},

	"[pattern]: This snippet can be used to check if a provided argument is iterable like an array.":
		{
			prefix: "bbeo-pattern-test-61-isArrayLike",
			body: [
				"const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';",
				"",
				"isArrayLike(document.querySelectorAll('.className')); // true",
				"isArrayLike('abc'); // true",
				"isArrayLike(null); // false",
			],
			description:
				"[pattern]: This snippet can be used to check if a provided argument is iterable like an array.",
		},

	"[pattern]: This snippet can be used to check whether a date is before another date.":
		{
			prefix: "bbeo-pattern-test-62-isBeforeDate",
			body: [
				"const isBeforeDate = (dateA, dateB) => dateA < dateB;",
				"",
				"isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true",
			],
			description:
				"[pattern]: This snippet can be used to check whether a date is before another date.",
		},

	"[pattern]: This snippet can be used to check whether an argument is a boolean.":
		{
			prefix: "bbeo-pattern-test-63-isBoolean",
			body: [
				"const isBoolean = val => typeof val === 'boolean';",
				"",
				"isBoolean(null); // false",
				"isBoolean(false); // true",
			],
			description:
				"[pattern]: This snippet can be used to check whether an argument is a boolean.",
		},

	"[pattern]: This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node).":
		{
			prefix: "bbeo-pattern-test-64-isBrowser",
			body: [
				"const isBrowser = () => ![typeof window, typeof document].includes('undefined');",
				"",
				"isBrowser(); // true (browser)",
				"isBrowser(); // false (Node)",
			],
			description:
				"[pattern]: This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node).",
		},

	"[pattern]: This snippet can be used to determine whether the browser tab is focused.":
		{
			prefix: "bbeo-pattern-test-65-isBrowserTabFocused",
			body: [
				"const isBrowserTabFocused = () => !document.hidden;",
				"",
				"isBrowserTabFocused(); // true",
			],
			description:
				"[pattern]: This snippet can be used to determine whether the browser tab is focused.",
		},

	"[pattern]: This snippet can be used to determine whether a string is lower case.":
		{
			prefix: "bbeo-pattern-test-66-isLowerCase",
			body: [
				"const isLowerCase = str => str === str.toLowerCase();",
				"",
				"isLowerCase('abc'); // true",
				"isLowerCase('a3@$'); // true",
				"isLowerCase('Ab4'); // false",
			],
			description:
				"[pattern]: This snippet can be used to determine whether a string is lower case.",
		},

	"[pattern]: This snippet can be used to check whether a value is  or .": {
		prefix: "bbeo-pattern-test-67-isNil",
		body: [
			"const isNil = val => val === undefined || val === null;",
			"",
			"isNil(null); // true",
			"isNil(undefined); // true",
		],
		description:
			"[pattern]: This snippet can be used to check whether a value is  or .",
	},

	"[pattern]: This snippet can be used to check whether a value is .": {
		prefix: "bbeo-pattern-test-68-isNull",
		body: ["const isNull = val => val === null;", "", "isNull(null); // true"],
		description:
			"[pattern]: This snippet can be used to check whether a value is .",
	},

	"[pattern]: This snippet can be used to check whether a provided value is a number.":
		{
			prefix: "bbeo-pattern-test-69-isNumber",
			body: [
				"const isNumber = val => typeof val === 'number';",
				"",
				"isNumber('1'); // false",
				"isNumber(1); // true",
			],
			description:
				"[pattern]: This snippet can be used to check whether a provided value is a number.",
		},

	"[pattern]: This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value.":
		{
			prefix: "bbeo-pattern-test-70-isObject",
			body: [
				"const isObject = obj => obj === Object(obj);",
				"",
				"isObject([1, 2, 3, 4]); // true",
				"isObject([]); // true",
				"isObject(['Hello!']); // true",
				"isObject({ a: 1 }); // true",
				"isObject({}); // true",
				"isObject(true); // false",
			],
			description:
				"[pattern]: This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value.",
		},

	"[pattern]: This snippet can be used to check if a value is not and that its  is “object”.":
		{
			prefix: "bbeo-pattern-test-71-isObjectLike",
			body: [
				"const isObjectLike = val => val !== null && typeof val === 'object';",
				"",
				"isObjectLike({}); // true",
				"isObjectLike([1, 2, 3]); // true",
				"isObjectLike(x => x); // false",
				"isObjectLike(null); // false",
			],
			description:
				"[pattern]: This snippet can be used to check if a value is not and that its  is “object”.",
		},

	"[pattern]: This snippet checks whether a value is an object created by the Object constructor.":
		{
			prefix: "bbeo-pattern-test-72-isPlainObject",
			body: [
				"const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;",
				"",
				"isPlainObject({ a: 1 }); // true",
				"isPlainObject(new Map()); // false",
			],
			description:
				"[pattern]: This snippet checks whether a value is an object created by the Object constructor.",
		},

	"[pattern]: This snippet checks whether an object looks like a .": {
		prefix: "bbeo-pattern-test-73-isPromiseLike",
		body: [
			"const isPromiseLike = obj =>",
			"  obj !== null &&",
			"  (typeof obj === 'object' || typeof obj === 'function') &&",
			"  typeof obj.then === 'function';",
			"  ",
			"isPromiseLike({",
			"  then: function() {",
			"    return '';",
			"  }",
			"}); // true",
			"isPromiseLike(null); // false",
			"isPromiseLike({}); // false",
		],
		description:
			"[pattern]: This snippet checks whether an object looks like a .",
	},

	"[pattern]: This snippet can be used to check whether two dates are equal.": {
		prefix: "bbeo-pattern-test-74-isSameDate",
		body: [
			"const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();",
			"",
			"isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true",
		],
		description:
			"[pattern]: This snippet can be used to check whether two dates are equal.",
	},

	"[pattern]: This snippet can be used to check whether an argument is a string.":
		{
			prefix: "bbeo-pattern-test-75-isString",
			body: [
				"const isString = val => typeof val === 'string';",
				"",
				"isString('10'); // true",
			],
			description:
				"[pattern]: This snippet can be used to check whether an argument is a string.",
		},

	"[pattern]: This snippet can be used to check whether an argument is a symbol.":
		{
			prefix: "bbeo-pattern-test-76-isSymbol",
			body: [
				"const isSymbol = val => typeof val === 'symbol';",
				"",
				"isSymbol(Symbol('x')); // true",
			],
			description:
				"[pattern]: This snippet can be used to check whether an argument is a symbol.",
		},

	"[pattern]: This snippet can be used to check whether a value is undefined.":
		{
			prefix: "bbeo-pattern-test-77-isUndefined",
			body: [
				"const isUndefined = val => val === undefined;",
				"",
				"isUndefined(undefined); // true",
			],
			description:
				"[pattern]: This snippet can be used to check whether a value is undefined.",
		},

	"[pattern]: This snippet can be used to check whether a string is upper case.":
		{
			prefix: "bbeo-pattern-test-78-isUpperCase",
			body: [
				"const isUpperCase = str => str === str.toUpperCase();",
				"",
				"isUpperCase('ABC'); // true",
				"isLowerCase('A3@$'); // true",
				"isLowerCase('aB4'); // false",
			],
			description:
				"[pattern]: This snippet can be used to check whether a string is upper case.",
		},

	"[pattern]: This snippet can be used to check whether a string is a valid JSON.":
		{
			prefix: "bbeo-pattern-test-79-isValidJSON",
			body: [
				"const isValidJSON = str => {",
				"  try {",
				"    JSON.parse(str);",
				"    return true;",
				"  } catch (e) {",
				"    return false;",
				"  }",
				"};",
				"",
				'isValidJSON(\'{"name":"Adam","age":20}\'); // true',
				'isValidJSON(\'{"name":"Adam",age:"20"}\'); // false',
				"isValidJSON(null); // true",
			],
			description:
				"[pattern]: This snippet can be used to check whether a string is a valid JSON.",
		},

	"[pattern]: This snippet returns the last element of an array.": {
		prefix: "bbeo-pattern-array-80-last",
		body: [
			"const last = arr => arr[arr.length - 1];",
			"",
			"last([1, 2, 3]); // 3",
		],
		description:
			"[pattern]: This snippet returns the last element of an array.",
	},

	"[pattern]: This snippet compares two objects to determine if the first one contains the same property values as the second one.":
		{
			prefix: "bbeo-pattern-object-81-matches",
			body: [
				"const matches = (obj, source) =>",
				"  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);",
				"  ",
				"matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true",
				"matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false",
			],
			description:
				"[pattern]: This snippet compares two objects to determine if the first one contains the same property values as the second one.",
		},

	"[pattern]: This snippet can be used to get the latest date.": {
		prefix: "bbeo-pattern-date-82-maxDate",
		body: [
			"const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));",
			"",
			"const array = [",
			"  new Date(2017, 4, 13),",
			"  new Date(2018, 2, 12),",
			"  new Date(2016, 0, 10),",
			"  new Date(2016, 0, 9)",
			"];",
			"maxDate(array); // 2018-03-11T22:00:00.000Z",
		],
		description: "[pattern]: This snippet can be used to get the latest date.",
	},

	"[pattern]: This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order).":
		{
			prefix: "bbeo-pattern-array-83-maxN",
			body: [
				"const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);",
				"",
				"maxN([1, 2, 3]); // [3]",
				"maxN([1, 2, 3], 2); // [3,2]",
			],
			description:
				"[pattern]: This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order).",
		},

	"[pattern]: This snippet can be used to get the earliest date.": {
		prefix: "bbeo-pattern-date-84-minDate",
		body: [
			"const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));",
			"",
			"const array = [",
			"  new Date(2017, 4, 13),",
			"  new Date(2018, 2, 12),",
			"  new Date(2016, 0, 10),",
			"  new Date(2016, 0, 9)",
			"];",
			"minDate(array); // 2016-01-08T22:00:00.000Z",
		],
		description:
			"[pattern]: This snippet can be used to get the earliest date.",
	},

	"[pattern]: This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order).":
		{
			prefix: "bbeo-pattern-array-85-minN",
			body: [
				"const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);",
				"",
				"minN([1, 2, 3]); // [1]",
				"minN([1, 2, 3], 2); // [1,2]",
			],
			description:
				"[pattern]: This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order).",
		},

	"[pattern]: This snippet can be used to apply the not operator () to a predicate function with its arguments.":
		{
			prefix: "bbeo-pattern-func-86-negate",
			body: [
				"const negate = func => (...args) => !func(...args);",
				"",
				"[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]",
			],
			description:
				"[pattern]: This snippet can be used to apply the not operator () to a predicate function with its arguments.",
		},

	"[pattern]: This snippet can be used to convert a  to an array.": {
		prefix: "bbeo-pattern-dom-87-nodeListToArray",
		body: [
			"const nodeListToArray = nodeList => [...nodeList];",
			"",
			"nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]",
		],
		description:
			"[pattern]: This snippet can be used to convert a  to an array.",
	},

	"[pattern]: This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length.":
		{
			prefix: "bbeo-pattern-string-88-pad",
			body: [
				"const pad = (str, length, char = ' ') =>",
				"  str.padStart((str.length + length) / 2, char).padEnd(length, char);",
				"  ",
				"pad('cat', 8); // '  cat   '",
				"pad(String(42), 6, '0'); // '004200'",
				"pad('foobar', 3); // 'foobar'",
			],
			description:
				"[pattern]: This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length.",
		},

	"[pattern]: This snippet can be used to convert an angle from radians to degrees.":
		{
			prefix: "bbeo-pattern-cast-89-radsToDegrees",
			body: [
				"const radsToDegrees = rad => (rad * 180.0) / Math.PI;",
				"",
				"radsToDegrees(Math.PI / 2); // 90",
			],
			description:
				"[pattern]: This snippet can be used to convert an angle from radians to degrees.",
		},

	"[pattern]: This snippet can be used to generate a random hexadecimal color code.":
		{
			prefix: "bbeo-pattern-gen-90-randomHexColorCode",
			body: [
				"const randomHexColorCode = () => {",
				"  let n = (Math.random() * 0xfffff * 1000000).toString(16);",
				"  return '#' + n.slice(0, 6);",
				"};",
				"",
				'randomHexColorCode(); // "#e34155"',
			],
			description:
				"[pattern]: This snippet can be used to generate a random hexadecimal color code.",
		},

	"[pattern]: This snippet can be used to generate an array with  random integers in a specified range.":
		{
			prefix: "bbeo-pattern-gen-91-randomIntArrayInRange",
			body: [
				"const randomIntArrayInRange = (min, max, n = 1) =>",
				"  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);",
				"  ",
				"randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]",
			],
			description:
				"[pattern]: This snippet can be used to generate an array with  random integers in a specified range.",
		},

	"[pattern]: This snippet can be used to generate a random integer in a specified range.":
		{
			prefix: "bbeo-pattern-gen-92-randomIntegerInRange",
			body: [
				"const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;",
				"",
				"randomIntegerInRange(0, 5); // 3",
			],
			description:
				"[pattern]: This snippet can be used to generate a random integer in a specified range.",
		},

	"[pattern]: This snippet can be used to return a random number in a specified range.":
		{
			prefix: "bbeo-pattern-gen-93-randomNumberInRange",
			body: [
				"const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;",
				"",
				"randomNumberInRange(2, 10); // 6.0211363285087005",
			],
			description:
				"[pattern]: This snippet can be used to return a random number in a specified range.",
		},

	"[pattern]: This snippet can be used to read a file by getting an array of lines from a file.":
		{
			prefix: "bbeo-pattern-lib-94-readFileLines",
			body: [
				"const fs = require('fs');",
				"const readFileLines = filename =>",
				"  fs",
				"    .readFileSync(filename)",
				"    .toString('UTF8')",
				"    .split('\\n');",
				"",
				"let arr = readFileLines('test.txt');",
				"console.log(arr); // ['line1', 'line2', 'line3']",
			],
			description:
				"[pattern]: This snippet can be used to read a file by getting an array of lines from a file.",
		},

	"[pattern]: This snippet can be used to do a redirect to a specified URL.": {
		prefix: "bbeo-pattern-bom-95-redirect",
		body: [
			"const redirect = (url, asLink = true) =>",
			"  asLink ? (window.location.href = url) : window.location.replace(url);",
			"  ",
			"redirect('https://google.com');",
		],
		description:
			"[pattern]: This snippet can be used to do a redirect to a specified URL.",
	},

	"[pattern]: This snippet can be used to reverse a string.": {
		prefix: "bbeo-pattern-string-96-reverse",
		body: [
			"const reverseString = str => [...str].reverse().join('');",
			"",
			"reverseString('foobar'); // 'raboof'",
		],
		description: "[pattern]: This snippet can be used to reverse a string.",
	},

	"[pattern]: This snippet can be used to round a number to a specified number of digits.":
		{
			prefix: "bbeo-pattern-math-97-round",
			body: [
				"const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);",
				"",
				"round(1.005, 2); // 1.01",
			],
			description:
				"[pattern]: This snippet can be used to round a number to a specified number of digits.",
		},

	"[pattern]: This snippet can be used to run an array of promises in series.":
		{
			prefix: "bbeo-pattern-promise-98-runPromisesInSeries",
			body: [
				"const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());",
				"const delay = d => new Promise(r => setTimeout(r, d));",
				"",
				"runPromisesInSeries([() => delay(1000), () => delay(2000)]); ",
				"// Executes each promise sequentially, taking a total of 3 seconds to complete",
			],
			description:
				"[pattern]: This snippet can be used to run an array of promises in series.",
		},

	"[pattern]: This snippet can be used to get a random number from an array.": {
		prefix: "bbeo-pattern-array-99-sample",
		body: [
			"const sample = arr => arr[Math.floor(Math.random() * arr.length)];",
			"",
			"sample([3, 7, 9, 11]); // 9",
		],
		description:
			"[pattern]: This snippet can be used to get a random number from an array.",
	},

	"[pattern]: This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the .":
		{
			prefix: "bbeo-pattern-array-100-sampleSize",
			body: [
				"const sampleSize = ([...arr], n = 1) => {",
				"  let m = arr.length;",
				"  while (m) {",
				"    const i = Math.floor(Math.random() * m--);",
				"    [arr[m], arr[i]] = [arr[i], arr[m]];",
				"  }",
				"  return arr.slice(0, n);",
				"};",
				"",
				"sampleSize([1, 2, 3], 2); // [3,1]",
				"sampleSize([1, 2, 3], 4); // [2,3,1]",
			],
			description:
				"[pattern]: This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the .",
		},

	"[pattern]: This snippet can be used to do a smooth scroll to the top of the current page.":
		{
			prefix: "bbeo-pattern-dom-101-scrollToTop",
			body: [
				"const scrollToTop = () => {",
				"  const c = document.documentElement.scrollTop || document.body.scrollTop;",
				"  if (c > 0) {",
				"    window.requestAnimationFrame(scrollToTop);",
				"    window.scrollTo(0, c - c / 8);",
				"  }",
				"};",
				"",
				"scrollToTop();",
			],
			description:
				"[pattern]: This snippet can be used to do a smooth scroll to the top of the current page.",
		},

	"[pattern]: This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string.":
		{
			prefix: "bbeo-pattern-string-102-serializeCookie",
			body: [
				"const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;",
				"",
				"serializeCookie('foo', 'bar'); // 'foo=bar'",
			],
			description:
				"[pattern]: This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string.",
		},

	"[pattern]: This snippet can be used to set the value of a CSS rule for a particular element.":
		{
			prefix: "bbeo-pattern-dom-103-setStyle",
			body: [
				"const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);",
				"",
				"setStyle(document.querySelector('p'), 'font-size', '20px');",
				"// The first <p> element on the page will have a font-size of 20px",
			],
			description:
				"[pattern]: This snippet can be used to set the value of a CSS rule for a particular element.",
		},

	"[pattern]: This snippet can be used to create a shallow clone of an object.":
		{
			prefix: "bbeo-pattern-gen-104-shallowClone",
			body: [
				"const shallowClone = obj => Object.assign({}, obj);",
				"",
				"const a = { x: true, y: 1 };",
				"const b = shallowClone(a); // a !== b",
			],
			description:
				"[pattern]: This snippet can be used to create a shallow clone of an object.",
		},

	"[pattern]: This snippet can be used to show all the elements specified.": {
		prefix: "bbeo-pattern-dom-105-show",
		body: [
			"const show = (...el) => [...el].forEach(e => (e.style.display = ''));",
			"",
			"show(...document.querySelectorAll('img')); // Shows all <img> elements on the page",
		],
		description:
			"[pattern]: This snippet can be used to show all the elements specified.",
	},

	"[pattern]: This snippet can be used to order the elements of an array randomly":
		{
			prefix: "bbeo-pattern-array-106-shuffle",
			body: [
				"const shuffle = ([...arr]) => {",
				"  let m = arr.length;",
				"  while (m) {",
				"    const i = Math.floor(Math.random() * m--);",
				"    [arr[m], arr[i]] = [arr[i], arr[m]];",
				"  }",
				"  return arr;",
				"};",
				"",
				"const foo = [1, 2, 3];",
				"shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]",
			],
			description:
				"[pattern]: This snippet can be used to order the elements of an array randomly using the .",
		},

	"[pattern]: This snippet can be used to return an array of elements that appear in two arrays.":
		{
			prefix: "bbeo-pattern-array-107-similarity",
			body: [
				"const similarity = (arr, values) => arr.filter(v => values.includes(v))",
				"",
				"similarity([1, 2, 3], [1, 2, 4]); // [1, 2]",
			],
			description:
				"[pattern]: This snippet can be used to return an array of elements that appear in two arrays.",
		},

	"[pattern]: This snippet can be used to delay the execution of an asynchronous function by putting it into sleep.":
		{
			prefix: "bbeo-pattern-promise-108-sleep",
			body: [
				"const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));",
				"",
				"async function sleepyWork() {",
				'  console.log("I\'m going to sleep for 1 second.");',
				"  await sleep(1000);",
				"  console.log('I woke up after 1 second.');",
				"}",
			],
			description:
				"[pattern]: This snippet can be used to delay the execution of an asynchronous function by putting it into sleep.",
		},

	"[pattern]: This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window.":
		{
			prefix: "bbeo-pattern-dom-109-smoothScroll",
			body: [
				"const smoothScroll = element =>",
				"  document.querySelector(element).scrollIntoView({",
				"    behavior: 'smooth'",
				"  });",
				"  ",
				"smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar",
				"smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar",
			],
			description:
				"[pattern]: This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window.",
		},

	"[pattern]: This snippet can be used to alphabetically sort the characters in a string.":
		{
			prefix: "bbeo-pattern-string-110-sortCharactersInString",
			body: [
				"const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');",
				"",
				"sortCharactersInString('cabbage'); // 'aabbceg'",
			],
			description:
				"[pattern]: This snippet can be used to alphabetically sort the characters in a string.",
		},

	"[pattern]: This snippet can be used to split a multi-line string into an array of lines.":
		{
			prefix: "bbeo-pattern-cast-111-splitLines",
			body: [
				"const splitLines = str => str.split(/\\r?\\n/);",
				"",
				"splitLines('This\\nis a\\nmultiline\\nstring.\\n'); // ['This', 'is a', 'multiline', 'string.' , '']",
			],
			description:
				"[pattern]: This snippet can be used to split a multi-line string into an array of lines.",
		},

	"[pattern]: This snippet can be used to remove HTML/XML tags from a string.":
		{
			prefix: "bbeo-pattern-dom-112-stripHTMLTags",
			body: [
				"const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');",
				"",
				"stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'",
			],
			description:
				"[pattern]: This snippet can be used to remove HTML/XML tags from a string.",
		},

	"[pattern]: This snippet can be used to find the sum of two or more numbers or arrays.":
		{
			prefix: "bbeo-pattern-array-113-sum",
			body: [
				"const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);",
				"",
				"sum(1, 2, 3, 4); // 10",
				"sum(...[1, 2, 3, 4]); // 10",
			],
			description:
				"[pattern]: This snippet can be used to find the sum of two or more numbers or arrays.",
		},

	"[pattern]: This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead.":
		{
			prefix: "bbeo-pattern-array-114-tail",
			body: [
				"const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);",
				"",
				"tail([1, 2, 3]); // [2,3]",
				"tail([1]); // [1]",
			],
			description:
				"[pattern]: This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead.",
		},

	"[pattern]: This snippet can be used to get an array with elements removed from the beginning.":
		{
			prefix: "bbeo-pattern-array-115-take",
			body: [
				"const take = (arr, n = 1) => arr.slice(0, n);",
				"",
				"take([1, 2, 3], 5); // [1, 2, 3]",
				"take([1, 2, 3], 0); // []",
			],
			description:
				"[pattern]: This snippet can be used to get an array with elements removed from the beginning.",
		},

	"[pattern]: This snippet can be used to get an array with elements removed from the end.":
		{
			prefix: "bbeo-pattern-array-116-takeRight",
			body: [
				"const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);",
				"",
				"takeRight([1, 2, 3], 2); // [ 2, 3 ]",
				"takeRight([1, 2, 3]); // [3]",
			],
			description:
				"[pattern]: This snippet can be used to get an array with elements removed from the end.",
		},

	"[pattern]: This snippet can be used to find out the time it takes to execute a function.":
		{
			prefix: "bbeo-pattern-func-117-timeTaken",
			body: [
				"const timeTaken = callback => {",
				"  console.time('timeTaken');",
				"  const r = callback();",
				"  console.timeEnd('timeTaken');",
				"  return r;",
				"};",
				"",
				"timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms",
			],
			description:
				"[pattern]: This snippet can be used to find out the time it takes to execute a function.",
		},

	"[pattern]: This snippet can be used to iterate over a callback times.": {
		prefix: "bbeo-pattern-func-118-times",
		body: [
			"const times = (n, fn, context = undefined) => {",
			"  let i = 0;",
			"  while (fn.call(context, i) !== false && ++i < n) {}",
			"};",
			"",
			"var output = '';",
			"times(5, i => (output += i));",
			"console.log(output); // 01234",
		],
		description:
			"[pattern]: This snippet can be used to iterate over a callback times.",
	},

	"[pattern]: This snippet can be used to format a number like a currency.": {
		prefix: "bbeo-pattern-cast-119-toCurrency",
		body: [
			"const toCurrency = (n, curr, LanguageFormat = undefined) =>",
			"  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);",
			"  ",
			"toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local",
			"toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)",
			"toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi",
			"toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local",
			"toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish",
		],
		description:
			"[pattern]: This snippet can be used to format a number like a currency.",
	},

	"[pattern]: This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string.":
		{
			prefix: "bbeo-pattern-cast-120-toDecimalMark",
			body: [
				"const toDecimalMark = num => num.toLocaleString('en-US');",
				"",
				'toDecimalMark(12305030388.9087); // "12,305,030,388.909"',
			],
			description:
				"[pattern]: This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string.",
		},

	"[pattern]: This snippet can be used to toggle a class for an element.": {
		prefix: "bbeo-pattern-dom-121-toggleClass",
		body: [
			"const toggleClass = (el, className) => el.classList.toggle(className);",
			"",
			"toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore",
		],
		description:
			"[pattern]: This snippet can be used to toggle a class for an element.",
	},

	"[pattern]: This snippet can be used to get a string representation of tomorrow’s date.":
		{
			prefix: "bbeo-pattern-date-122-tomorrow",
			body: [
				"const tomorrow = () => {",
				"  let t = new Date();",
				"  t.setDate(t.getDate() + 1);",
				"  return t.toISOString().split('T')[0];",
				"};",
				"",
				"tomorrow(); // 2019-09-08 (if current date is 2018-09-08)",
			],
			description:
				"[pattern]: This snippet can be used to get a string representation of tomorrow’s date.",
		},

	"[pattern]: This snippet can be used to build an array using an iterator function and an initial seed value.":
		{
			prefix: "bbeo-pattern-func-123-unfold",
			body: [
				"const unfold = (fn, seed) => {",
				"  let result = [],",
				"    val = [null, seed];",
				"  while ((val = fn(val[1]))) result.push(val[0]);",
				"  return result;",
				"};",
				"",
				"var f = n => (n > 50 ? false : [-n, n + 10]);",
				"unfold(f, 10); // [-10, -20, -30, -40, -50]",
			],
			description:
				"[pattern]: This snippet can be used to build an array using an iterator function and an initial seed value.",
		},

	"[pattern]: This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat.":
		{
			prefix: "bbeo-pattern-array-124-union",
			body: [
				"const union = (a, b) => Array.from(new Set([...a, ...b]));",
				"",
				"union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]",
			],
			description:
				"[pattern]: This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat.",
		},

	"[pattern]: This snippet uses ES6 andtheoperator to get every element only once.":
		{
			prefix: "bbeo-pattern-array-125-uniqueElements",
			body: [
				"const uniqueElements = arr => [...new Set(arr)];",
				"",
				"uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]",
			],
			description:
				"[pattern]: This snippet uses ES6 andtheoperator to get every element only once.",
		},

	"[pattern]: This snippet can be used to check whether a value is a number.": {
		prefix: "bbeo-pattern-test-126-validateNumber",
		body: [
			"const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;",
			"",
			"validateNumber('10'); // true",
		],
		description:
			"[pattern]: This snippet can be used to check whether a value is a number.",
	},

	"[pattern]: This snippet converts a string into an array of words.": {
		prefix: "bbeo-pattern-cast-127-words",
		body: [
			"const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);",
			"",
			'words(\'I love javaScript!!\'); // ["I", "love", "javaScript"]',
			'words(\'python, javaScript & coffee\'); // ["python", "javaScript", "coffee"]',
		],
		description:
			"[pattern]: This snippet converts a string into an array of words.",
	},
	"[pattern]: Get all ES6 modules syntax from the source directory": {
		prefix: "bbeo-pattern-gen-128-getES6moduleSyntaxBySource",
		body: [
			"export function getES6moduleSyntaxBySource(source, extension) {",
			"	const fixVarName = varName => varName.replace(/-/g, '_');",
			"	const dropRight = (arr, n = 1) => arr.slice(0, -n); ",
			"	let sourceList = fsReadDir(source);",
			"	let sourceES6 = [];",
			"	sourceList.forEach(source => {",
			"		if (source.endsWith(extension)) {",
			"			sourceES6.push(dropRight(source, 3));",
			"		}",
			"	});",
			"	return sourceES6.map(",
			"		source => `import { ${fixVarName(source)} } from './${source}.js';`,",
			"	);",
			"}",
		],
		description:
			"[pattern]: Get all ES6 modules syntax from the source directory",
	},
	"[pattern]: Concat & export all external JSON sources to one JSON file": {
		prefix: "bbeo-pattern-gen-129-concatJSONsourcesToOneFile",
		body: [
			"export function concatJSONsourcesToOneFile(sourcesList, distPath) {",
			"	const refactorSourceList = sourceList => {",
			"		let objRefactored = {};",
			"		sourceList.forEach(source => {",
			"			objRefactored = { ...objRefactored, ...source };",
			"		});",
			"		return objRefactored;",
			"	};",
			"",
			"	const JSONexportation = (sourceList, distPath) => {",
			"		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {",
			"			console.log(err ? err : 'The file was saved!');",
			"		});",
			"	};",
			"",
			"	JSONexportation(refactorSourceList(sourcesList), distPath);",
			"}",
		],
		description:
			"[pattern]: Concat & export all external JSON sources to one JSON file",
	},
	"[pattern]: This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window.":
		{
			prefix: "bbeo-pattern-dom-130-smoothScroll",
			body: [
				"const smoothScroll = element =>",
				"  document.querySelector(element).scrollIntoView({",
				"    behavior: 'smooth'",
				"  });",
				"  ",
				"smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id",
				"smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar",
			],
			description:
				"[pattern]: This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window.",
		},
	"[pattern]: Email validator with regex.": {
		prefix: "bbeo-pattern-test-131-validateEmail",
		body: [
			"const validateEmail = email => {      ",
			"  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;",
			"  return emailPattern.test(email); ",
			"};",
		],
		description: "[pattern]: Email validator with regex.",
	},
};
