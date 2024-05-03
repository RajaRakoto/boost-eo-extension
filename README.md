<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/boost-eo-extension/boost-eo.png?raw=true" width=256>
</div>

# boost-eo-extension 💛

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

Explore a curated compilation of helpful code snippets and clever design techniques designed to improve JavaScript developer productivity, easily accessible right within the VSCode environment.

**Usage**: You can install it by typing "boost-eo" in the extension tab of your IDE
  
---

### 📌 Table of contents

| [array](#-array) | [basic](#-basic) | [cast](#-cast) | [class](#-class) | [console](#-console) | [date](#-date) | [destruct](#-destruct) | [dom](#-dom) | [function](#-function) | [math](#-math) | [object](#-object) | [pattern](#-pattern) | [regex](#-regex) | [spread](#-spread) | [string](#-string) |
|  :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :--  |

---

### 📌 Snippets

#### ⚫ array

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ basic

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ cast

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ class

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ console

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ date

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ destruct

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ dom

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ function

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ math

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ object

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ pattern

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ regex

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ spread

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ string

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all |  This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual |  This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual |  This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV |  This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList |  This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

```js
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();
  
arrayToHtmlList(['item 1', 'item 2'], 'myListID');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-6-attempt |  This snippet executes a function, returning either the result or the caught error object |

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-7-average |  This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy |  This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate |  This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy |  This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible |  This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize |  This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize |  This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord |  This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray |  This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact |  This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences |  This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists |  This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL |  This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear |  This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize |  This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten |  This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default |  This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer |  This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads |  This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference |  This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy |  This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-28-differenceWith |  This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize |  This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance |  This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft |  This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight |  This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile |  This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile |  This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains |  This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements |  This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey |  This snippet returns the first key that satisfies a given function |

```js
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

findKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'barney'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-38-findLast |  This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten |  This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight |  This snippet executes a function for each element of an array starting from the array’s last element |

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
    
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-41-forOwn |  This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName |  This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date |  This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates |  This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle |  This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType |  This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass |  This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head |  This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide |  This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect |  This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll |  This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial |  This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter |  This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore |  This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection |  This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy |  This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith |  This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is |  This snippet can be used to check if a value is of a particular type |

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-59-isAfterDate |  This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram |  This snippet can be used to check whether a particular string is an anagram with another string |

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};

isAnagram('iceman', 'cinema'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-61-isArrayLike |  This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate |  This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean |  This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser |  This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused |  This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase |  This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil |  This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull |  This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber |  This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject |  This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

```js
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-71-isObjectLike |  This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject |  This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike |  This snippet checks whether an object looks like a  |

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
  
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-74-isSameDate |  This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString |  This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol |  This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined |  This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase |  This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON |  This snippet can be used to check whether a string is a valid JSON |

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-80-last |  This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches |  This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate |  This snippet can be used to get the latest date |

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-83-maxN |  This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate |  This snippet can be used to get the earliest date |

```js
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));

const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-85-minN |  This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate |  This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray |  This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad |  This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees |  This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode |  This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange |  This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange |  This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange |  This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines |  This snippet can be used to read a file by getting an array of lines from a file |

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-95-redirect |  This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse |  This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round |  This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries |  This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample |  This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize |  This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

```js
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-101-scrollToTop |  This snippet can be used to do a smooth scroll to the top of the current page |

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-102-serializeCookie |  This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle |  This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone |  This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show |  This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle |  This snippet can be used to order the elements of an array randomly using the  |

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-107-similarity |  This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep |  This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-130-smoothScroll |  This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the fooBar id
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString |  This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines |  This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags |  This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum |  This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail |  This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take |  This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight |  This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken |  This snippet can be used to find out the time it takes to execute a function |

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-118-times |  This snippet can be used to iterate over a callback times |

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-119-toCurrency |  This snippet can be used to format a number like a currency |

```js
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);
  
toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local
toCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)
toCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi
toCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local
toCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-120-toDecimalMark |  This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass |  This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow |  This snippet can be used to get a string representation of tomorrow’s date |

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

tomorrow(); // 2019-09-08 (if current date is 2018-09-08)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-123-unfold |  This snippet can be used to build an array using an iterator function and an initial seed value |

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-124-union |  This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements |  This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber |  This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words |  This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-128-getES6moduleSyntaxBySource |  Get all ES6 modules syntax from the source directory |

```js
export function getES6moduleSyntaxBySource(source, extension) {
	const fixVarName = varName => varName.replace(/-/g, '_');
	const dropRight = (arr, n = 1) => arr.slice(0, -n); 
	let sourceList = fsReadDir(source);
	let sourceES6 = [];
	sourceList.forEach(source => {
		if (source.endsWith(extension)) {
			sourceES6.push(dropRight(source, 3));
		}
	});
	return sourceES6.map(
		source => `import { ${fixVarName(source)} } from './${source}.js';`,
	);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-129-concatJSONsourcesToOneFile |  Concat & export all external JSON sources to one JSON file |

```js
export function concatJSONsourcesToOneFile(sourcesList, distPath) {
	const refactorSourceList = sourceList => {
		let objRefactored = {};
		sourceList.forEach(source => {
			objRefactored = { ...objRefactored, ...source };
		});
		return objRefactored;
	};

	const JSONexportation = (sourceList, distPath) => {
		fs.writeFileSync(distPath, JSON.stringify(sourceList), 'utf8', err => {
			console.log(err ? err : 'The file was saved!');
		});
	};

	JSONexportation(refactorSourceList(sourcesList), distPath);
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-131-validateEmail |  Email validator with regex |

```js
const validateEmail = email => {      
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email); 
};
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>
