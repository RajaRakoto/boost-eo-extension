# boost-eo-extension 💛

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

Explore a curated compilation of helpful code snippets and clever design techniques designed to improve JavaScript developer productivity, easily accessible right within the VSCode environment.

<img src="https://github.com/RajaRakoto/github-docs/blob/master/boost-eo-extension/boost-eo-demo.gif?raw=true" width="800">

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
| bbeo-array-asc | [array]: (a0 -> b1) sort in ascending order -> array |

```js
${1:array}.sort((${2:a},${3:b}) => ${2:a} - ${3:b})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-desc | [array]: (b1 -> a0) sort in descending order -> array |

```js
${1:array}.sort((${2:a},${3:b}) => ${3:b} - ${2:a})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-slice | [array]: split an array [n, n+1] -> array |

```js
${1:array}.slice(${2:start}, ${3:end+1})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-join | [array]: join an array from a delimiter to get a string -> string |

```js
${1:array}.join(${2:delimiter})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-flat | [array]: Flatten the elements of a nested array to a specific depth -> array |

```js
${1:array}.flat(${2:depth})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-isEmpty | [array]: Check if an array is empty -> boolean |

```js
${1:array}.length === 0 ? true : false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-removeDuplicates | [array]: Remove duplicates from an array -> array |

```js
[...new Set(${1:array})]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-reverse | [array]: Reverse all element in an array -> array |

```js
${1:array}.reverse()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-find | [array]: Search a specific element -> array |

```js
${1:array}.find(${2:element} => ${2:element} ${3:===} ${4:foo})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-some | [array]: Check one or more specific element.s of an array (no size modification) -> boolean |

```js
${1:array}.some(${2:element} => ${2:element} ${3:===} ${4:foo})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-every | [array]: Check the integrity of the elements of an array (no size modification) -> boolean |

```js
${1:array}.every(${2:element} => ${2:element} ${3:===} ${4:foo})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-map | [array]: Processing of different element of the array (no modification of the size) -> array |

```js
${1:array}.map(${2:element} => {${3:expression}})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-filter | [array]: Filter the element of an array (size modification) -> array |

```js
${1:array}.filter(${2:element} => {${3:condition}})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-reduce | [array]: Processing each element of the array to obtain a single value -> number |

```js
${1:array}.reduce((${2:total, element}) => {${3:total + element}})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-fill | [array]: Fill an array with a static value -> array |

```js
${1:array}.fill(${2:start_index},${3:foo})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-foreach | [array]: Browse the elements of an array -> any |

```js
${1:array}.forEach((${2:element}) => {
    ${3:expression}
})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-indexOf | [array]: Find index of element |

```js
${1:array}.indexOf(${2:element})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-includes | [array]: Check the existence of an element |

```js
${1:array}.includes(${2:element})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-length | [array]: Length of array |

```js
${1:array}.length
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-concat | [array]: Concatenate with another array |

```js
${1:array}.concat(${2:array})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-addToQueue | [array]: Add to queue -> array |

```js
${1:array}.push(${2:element})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-addToHead | [array]: Add to head -> array |

```js
${1:array}.unshift(${2:element})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-deleteAtTail | [array]: Delete at tail -> array |

```js
${1:array}.pop(${2:element})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-deleteAtHead | [array]: Delete at head -> array |

```js
${1:array}.shift(${2:element})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-findIndex | [array]: Find element index using findIndex -> number |

```js
${1:array}.findIndex(${2:element} => ${3:condition})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-removeAtIndex | [array]: Remove element at specific index -> array |

```js
${1:array}.splice(${2:index}, 1)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-sliceToEnd | [array]: Slice array from specific index to end -> array |

```js
${1:array}.slice(${2:index})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-insertAtIndex | [array]: Insert element at specific index -> array |

```js
${1:array}.splice(${2:index}, 0, ${3:element})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-allOfType | [array]: Check if array contains only specified type of elements -> boolean |

```js
${1:array}.every(${2:element} => typeof ${2:element} === '${3:type}')
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-rotateRight | [array]: Rotate array elements to the right -> array |

```js
${1:array}.unshift(${1:array}.pop())
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-groupBy | [array]: Group array elements by a criterion -> object |

```js
${1:array}.reduce((result, ${2:element}) => { (result[${3:condition}] = result[${3:condition}] || []).push(${2:element}); return result; }, {})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-removeByValue | [array]: Remove element by value -> array |

```js
${1:array}.filter(${2:element} => ${2:element} !== ${3:value})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-array-partition | [array]: Partition array into two based on a condition -> [array1, array2] |

```js
${1:array}.reduce((result, ${2:element}) => { result[${3:condition} ? 0 : 1].push(${2:element}); return result; }, [[], []])
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ basic

| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-permut | [basic]: Swap 2 values ​​from 2 variables |

```js
[${1:a},${2:b}] = [${2:b},${1:a}]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-if | [basic]: Conditional statement |

```js
if (${1:condition}) {
    ${2:body}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-if2 | [basic]: Conditional statement 2 |

```js
if (${1:condition1}) {
    ${3:body1}
} else (${2:condition2}) {
    ${4:body2}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-if3 | [basic]: Conditional statement 3 |

```js
if (${1:condition1}) {
    ${3:body1}
} else if (${2:condition2}) {
    ${4:body2}
} else {
    ${5:body3}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-ternary | [basic]: Ternary condition |

```js
${1:condition} ? ${2:expr1} : ${3:expr2}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-ternary2 | [basic]: Ternary condition 2 |

```js
${1:condition} ? ${2:expr1} : ${3:condition2} ? ${4:expr2} : ${5:expr3}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-ternary3 | [basic]: Ternary condition 3 |

```js
${1:condition} ? ${2:expr1} : ${3:condition2} ? ${4:expr2} : ${5:condition3} ? ${6:expr3} : ${7:expr4}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-for | [basic]: For loop |

```js
for (let ${1:index} = 0; ${1:index} < ${2:array_length}; ${1:index}++) {
    ${3:body}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-forIn | [basic]: For in loop |

```js
for (let ${1:e} in ${2:array}) {
    ${3:body}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-forOf | [basic]: For of loop |

```js
for (let ${1:e} of ${2:array}) {
    ${3:body}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-forEach | [basic]: For each loop |

```js
${2:array}.forEach((${1:e}) => {
    ${3:body}
});
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-while | [basic]: While loop |

```js
while (${1:condition}) {
    ${2:body}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-doWhileLoop | [basic]: Do while loop |

```js
do {
    ${2:body}
} while (${1:condition});
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-switch | [basic]: Switch statement |

```js
switch (${1:condition}) {
    case ${2:condition}:
        ${3:body}
        break;
    default:
        ${4:body}
        break;
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-switch2 | [basic]: Switch statement 2 |

```js
switch (${1:condition}) {
    case ${2:condition}:
        ${4:body}
        break;
    case ${3:condition}:
        ${5:body}
        break;
    default:
        ${6:body}
        break;
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-switch3 | undefined |

```js
switch (${1:condition}) {
    case ${2:condition}:
        ${5:body}
        break;
    case ${3:condition}:
        ${6:body}
        break;
    case ${4:condition}:
        ${7:body}
        break;
    default:
        ${8:body}
        break;
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-tryCatch | [basic]: Try catch statement |

```js
try {
    ${1:body}
} catch (${2:error}) {
    ${3:body}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-tryCatchFinally | [basic]: Try catch finally statement |

```js
try {
    ${1:body}
} catch (${2:error}) {
    ${3:body}
} finally {
    ${4:body}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-tryMultipleCatchFinally | [basic]: Try catch finally statement with multiple catch blocks |

```js
try {
    ${1:body}
} catch (${2:error}) {
    ${3:body}
} catch (${4:error}) {
    ${5:body}
} finally {
    ${6:body}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-throw | [basic]: Throw an error |

```js
throw new Error(${1:message})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-setTimeout | [basic]: Create setTimeout |

```js
setTimeout(() => {
    ${1:body}
}, ${2:delay})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-basic-setInterval | [basic]: Create setInterval |

```js
setInterval(() => {
    ${1:body}
}, ${2:delay})
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ cast

| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-objectToString1 | [cast]: method 1 - Convert any object to string -> string |

```js
${1:object}.toString()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-objectToString2 | [cast]: method 2 - Convert any object to string -> string |

```js
String(${1:object})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-stringToArray1 | [cast]: method 1 - convert string to array -> array |

```js
Array.from(${1:string})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-stringToArray2 | [cast]: method 2 - convert string to array -> array |

```js
[... ${1:string}]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-stringToArray3 | [cast]: method 3 - convert string to array -> array |

```js
${1:string}.split()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-stringToNumber1 | [cast]: method 1 - convert string to number -> number |

```js
Number(${1:string})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-stringToNumber2 | [cast]: method 2 - convert string to number -> number |

```js
parseInt(${1:string})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-hex2dec | [cast]: hex -> dec |

```js
+('0x'+ ${1:var})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-dec2hex | [cast]: dec -> hex |

```js
${1:var}.toString(16)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-oct2dec | [cast]: oct -> dec |

```js
parseInt(${1:var}, 8)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-dec2oct | [cast]: dec -> oct |

```js
${1:var}.toString(8)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-bin2dec | [cast]: bin -> dec |

```js
parseInt(${var}, 2)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-dec2bin | [cast]: dec -> bin |

```js
${1:var}.toString(2)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-jsonToString | [cast]: JSON to String |

```js
JSON.stringify(${1:json})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-stringToJSON | [cast]: String to JSON |

```js
JSON.parse(${1:string})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-dateToString | [cast]: Date to String |

```js
${1:date}.toISOString()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-stringToDate | [cast]: String to Date |

```js
new Date(${1:string})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-arrayToString | [cast]: Array to String |

```js
${1:array}.join(',')
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-cast-stringToArray | [cast]: String to Array |

```js
${1:string}.split(',')
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ class

| Prefix | Description |
|  :-- | :--  |
| bbeo-class-getter | [class]: Create getter |

```js
get ${1:property} () { return this.${1:property}; }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-class-setter | [class]: Create setter |

```js
set ${1:property} (${2:value}) { this.${1:property} = ${2:value}; }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-class-staticGetter | [class]: Create static getter |

```js
static get ${1:property} () { return this.${1:property}; }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-class-staticSetter | [class]: Create static setter |

```js
static set ${1:property} (${2:value}) { this.${1:property} = ${2:value}; }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-class-method | [class]: Create method |

```js
${1:name} () { ${2:body} }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-class-staticMethod | [class]: Create static method |

```js
static ${1:name} () { ${2:body} }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-class-constructor | [class]: Create constructor |

```js
constructor () { ${1:body} }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-class-staticProperty | [class]: Create static property |

```js
static ${1:property} = ${2:value}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-class-genClass | [class]: Generate class |

```js
class Circle extends Shape {
  
  // constructor
  constructor (radius) {
    this.radius = radius
  }
  
  // methods
   getArea () {
    return Math.PI * 2 * this.radius
  }
  
  // superclass
   expand (n) {
    return super.expand(n) * Math.PI
  }
  
  //static method
   static createFromDiameter(diameter) {
    return new Circle(diameter / 2)
  }
}
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ console

| Prefix | Description |
|  :-- | :--  |
| bbeo-console-clg | [console]: Display a message with console.log() |

```js
console.log(${1:object})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-console-clr | [console]: Display an error with console.error() |

```js
console.error(${1:object})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-console-clt | [console]: Display a table with console.table() |

```js
console.table(${1:object})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-console-cli | [console]: Display information with console.info() |

```js
console.info(${1:object})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-console-clw | [console]: Display a warning with console.warn() |

```js
console.warn(${1:object})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-console-cld | [console]: Display an object's properties with console.dir() |

```js
console.dir(${1:object})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-console-clc | [console]: Clear all messages with console.clear() |

```js
console.clear()
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ date

| Prefix | Description |
|  :-- | :--  |
| bbeo-date-createNullDate | [date]: Create a date object (null args) |

```js
const ${1:date} = new Date()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-createFullDate | [date]: Create a date object (full args) |

```js
const ${1:date} = new Date(${2:year}, ${3:month}, ${4:day}, ${5:hour}, ${6:minute}, ${7:second}, ${8:millisecond})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-createStringDate | [date]: Create a date object (date string) |

```js
const ${1:date} = new Date(${2:date})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-now | [date]: Get current date |

```js
${1:date}.now()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-day | [date]: Get current day |

```js
${1:date}.getDay()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-month | [date]: Get current month |

```js
${1:date}.getMonth()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-year | [date]: Get current year |

```js
${1:date}.getFullYear()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-hour | [date]: Get current hour |

```js
${1:date}.getHours()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-minute | [date]: Get current minute |

```js
${1:date}.getMinutes()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-second | [date]: Get current second |

```js
${1:date}.getSeconds()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-millisecond | [date]: Get current millisecond |

```js
${1:date}.getMilliseconds()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-time | [date]: Get current time |

```js
${1:date}.getTime()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-toString | [date]: Get current date as string |

```js
${1:date}.toString()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-setDate | [date]: Set date |

```js
${1:date}.setDate(${2:date})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-setMonth | [date]: Set month |

```js
${1:date}.setMonth(${2:month})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-setYear | [date]: Set year |

```js
${1:date}.setFullYear(${2:year})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-setHour | [date]: Set hour |

```js
${1:date}.setHours(${2:hour})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-setMinute | [date]: Set minute |

```js
${1:date}.setMinutes(${2:minute})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-setSecond | [date]: Set second |

```js
${1:date}.setSeconds(${2:second})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-setMillisecond | [date]: Set millisecond |

```js
${1:date}.setMilliseconds(${2:millisecond})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-date-setTime | [date]: Set time |

```js
${1:date}.setTime(${2:time})
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ destruct

| Prefix | Description |
|  :-- | :--  |
| bbeo-destruct-array | [destruct]: Destructuring assignment -> array |

```js
const [${1:var1}, ${2:var2}] = [${3:value1}, ${4:value2}]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-destruct-object | [destruct]: Object destructuring assignment -> object |

```js
const {${1:attrib1}, ${2:attrib2}} = ${3:object}
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ dom

| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id | [dom]: Get element by id |

```js
document.getElementById(${1:id})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-class | [dom]: Get element by class |

```js
document.getElementsByClassName(${1:class})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-tag | [dom]: Get element by tag |

```js
document.getElementsByTagName(${1:tag})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-query | [dom]: Get element by query |

```js
document.querySelector(${1:query})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-queryAll | [dom]: Get element by query all |

```js
document.querySelectorAll(${1:query})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-name | [dom]: Get element by name |

```js
document.getElementsByName(${1:name})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-createHTMLElement | [dom]: Create html element of tag |

```js
document.createElement(${1:tag})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-createTextNode | [dom]: Create text node |

```js
document.createTextNode(${1:text})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-innerHTML | [dom]: Get element by id and set innerHTML |

```js
document.getElementById(${1:id}).innerHTML = ${2:html}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-textContent | [dom]: Get element by id and set textContent |

```js
document.getElementById(${1:id}).textContent = ${2:text}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-value | [dom]: Get element by id and set value |

```js
document.getElementById(${1:id}).value = ${2:value}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-attribute | [dom]: Get element by id and set attribute |

```js
document.getElementById(${1:id}).setAttribute(${2:attribute}, ${3:value})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-getAttribute | [dom]: Get element by id and get attribute |

```js
document.getElementById(${1:id}).getAttribute(${2:attribute})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-removeAttribute | [dom]: Get element by id and remove attribute |

```js
document.getElementById(${1:id}).removeAttribute(${2:attribute})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-addClass | [dom]: Get element by id and add class |

```js
document.getElementById(${1:id}).classList.add(${2:class})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-removeClass | [dom]: Get element by id and remove class |

```js
document.getElementById(${1:id}).classList.remove(${2:class})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-toggleClass | [dom]: Get element by id and toggle class |

```js
document.getElementById(${1:id}).classList.toggle(${2:class})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-hasClass | [dom]: Get element by id and check class |

```js
document.getElementById(${1:id}).classList.contains(${2:class})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-appendChild | [dom]: Get element by id and append child |

```js
document.getElementById(${1:id}).appendChild(${2:child})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-removeChild | [dom]: Get element by id and remove child |

```js
document.getElementById(${1:id}).removeChild(${2:child})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-insertBefore | [dom]: Get element by id and insert before |

```js
document.getElementById(${1:id}).insertBefore(${2:child}, ${3:reference})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-insertAfter | [dom]: Get element by id and insert after |

```js
document.getElementById(${1:id}).insertBefore(${2:child}, ${3:reference}.nextSibling)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-replaceChild | [dom]: Get element by id and replace child |

```js
document.getElementById(${1:id}).replaceChild(${2:child}, ${3:reference})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-childNodes | [dom]: Get element by id and retrieve all child nodes |

```js
document.getElementById(${1:id}).childNodes
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-firstChild | [dom]: Get element by id and retrieve first child node |

```js
document.getElementById(${1:id}).firstChild
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-lastChild | [dom]: Get element by id and retrieve last child node |

```js
document.getElementById(${1:id}).lastChild
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-parentNode | [dom]: Get element by id and retrieve parent node |

```js
document.getElementById(${1:id}).parentNode
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-addEventListener | [dom]: Get element by id and add event listener |

```js
document.getElementById(${1:id}).addEventListener(${2:click, 'keypress, scroll, mouseenter, mouseout, input, submit, load'}, ${3:callback})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-eventTargetValue | [dom]: Get target value from event |

```js
${1:e}.target.value
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-addEventListenerWithpreventDefault | [dom]: Get element by id and add event listener with prevent default |

```js
document.getElementById(${1:id}).addEventListener(${2:'submit'}, ${3:e} => {
    ${3:e}.preventDefault()
})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-dom-id-addEventListenerWithstopPropagation | [dom]: Get element by id and add event listener with stop propagation |

```js
document.getElementById(${1:id}).addEventListener(${2:click, 'keypress, scroll, mouseenter, mouseout, input, submit, load'}, ${3:e} => {
    ${3:e}.stopPropagation()
})
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ function

| Prefix | Description |
|  :-- | :--  |
| bbeo-function-arrow | [function]: Create arrow function |

```js
const ${1:func_name} = (${2:args}) => {
  ${3:code...}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-function-function | [function]: Create function |

```js
function ${1:func_name} (${2:args}) {
  ${3:code...}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-function-asyncArrow | [function]: Create async arrow function |

```js
const ${1:func_name} = async (${2:args}) => {
  ${3:code...}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-function-async | [function]: Create async function |

```js
async function ${1:func_name} (${2:args}) {
  ${3:code...}
}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-function-anon | [function]: Create anonymous function |

```js
(${1:args}) => {
  ${2:code...}
}
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ math

| Prefix | Description |
|  :-- | :--  |
| bbeo-math-fixedDot | [math]: Format a number in fixed-dot notation -> number |

```js
${1:number}.toFixed(${2:decal})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-pow | [math]: Power of number |

```js
${1:number} ** ${2:exp}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-max | [math]: Get MAX element |

```js
Math.max(... ${1: element})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-min | [math]: Get MIN element |

```js
Math.min(... ${1: element})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-expOfNumber | [math]: Get exponent of a number |

```js
Math.log(${1:number})/Math.log(${2:base})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-sqrt | [math]: Get square of a number |

```js
Math.sqrt(${1:number})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-abs | [math]: Get absolute value of a number |

```js
Math.abs(${1:number})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-round | [math]: Get round value of a number |

```js
Math.round(${1:number})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-ceil | [math]: Get ceil value of a number |

```js
Math.ceil(${1:number})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-floor | [math]: Get floor value of a number |

```js
Math.floor(${1:number})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-random | [math]: Get random value between 0 and 1 |

```js
Math.random()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-random-max | [math]: Get random value between 0 and max |

```js
Math.floor(Math.random() * ${1:max})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-random-minMax | [math]: Get random value between min and max |

```js
Math.floor(Math.random() * (${1:max} - ${2:min}) + ${2:min})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-pi | [math]: Get PI value |

```js
Math.PI
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-e | [math]: Get E value |

```js
Math.E
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-ln2 | [math]: Get LN2 value |

```js
Math.LN2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-math-ln10 | [math]: Get LN10 value |

```js
Math.LN10
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ object

| Prefix | Description |
|  :-- | :--  |
| bbeo-object-extractValues | [object]: Extract objecy values |

```js
Object.values(${1:object})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-object-extractEntries | [object]: Extract object entries |

```js
Object.entries(${1:object})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-object-length | [object]: Get object length |

```js
Object.keys(${1:object}).length
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ pattern

| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-1-all | [pattern]: This snippet returns  if the predicate function returns  for all elements in a collection and  otherwise. You can omit the second argument if you want to use as a default value |

```js
const all = (arr, fn = Boolean) => arr.every(fn);

all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-2-allEqual | [pattern]: This snippet checks whether all elements of the array are equal |

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-3-approximatelyEqual | [pattern]: This snippet checks whether two numbers are approximately equal to each other, with a small difference |

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-4-arrayToCSV | [pattern]: This snippet converts the elements to strings with comma-separated values |

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
  
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'```
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-5-arrayToHtmlList | [pattern]: This snippet converts the elements of an array into  tags and appends them to the list of the given ID |

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
| bbeo-pattern-func-6-attempt | [pattern]: This snippet executes a function, returning either the result or the caught error object |

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
| bbeo-pattern-array-7-average | [pattern]: This snippet returns the average of two or more numerical values |

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-8-averageBy | [pattern]: This snippet returns the average of an array after initially doing the mapping of each element to a value using a given function |

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-9-bifurcate | [pattern]: This snippet splits values into two groups and then puts a truthy element of in the first group, and in the second group otherwise |

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-10-bifurcateBy | [pattern]: This snippet splits values into two groups, based on a predicate function. If the predicate function returns a truthy value, the element will be placed in the first group. Otherwise, it will be placed in the second group |

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); 
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-11-bottomVisible | [pattern]: This snippet checks whether the bottom of a page is visible |

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

bottomVisible(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-12-byteSize | [pattern]: This snippet returns the length of a string in bytes |

```js
const byteSize = str => new Blob([str]).size;

byteSize('😀'); // 4
byteSize('Hello World'); // 11
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-13-capitalize | [pattern]: This snippet capitalizes the first letter of a string |

```js
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');
  
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-14-capitalizeEveryWord | [pattern]: This snippet capitalizes the first letter of every word in a given string |

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

capitalizeEveryWord('hello world!'); // 'Hello World!'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-15-castArray | [pattern]: This snippet converts a non-array value into array |

```js
const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-16-compact | [pattern]: This snippet removes false values from an array |

```js
const compact = arr => arr.filter(Boolean);

compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); 
// [ 1, 2, 3, 'a', 's', 34 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-17-countOccurrences | [pattern]: This snippet counts the occurrences of a value in an array |

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-18-createDirIfNotExists | [pattern]: This snippet uses  to check whether a directory exists and then  to create it if it doesn’t |

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
createDirIfNotExists('test'); 
// creates the directory 'test', if it doesn't exist
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-19-currentURL | [pattern]: This snippet returns the current URL |

```js
const currentURL = () => window.location.href;

currentURL(); // 'https://medium.com/@fatosmorina'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-20-dayOfYear | [pattern]: This snippet gets the day of the year from a object |

```js
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date()); // 272
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-21-decapitalize | [pattern]: This snippet turns the first letter of a string into lowercase |

```js
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

decapitalize('FooBar'); // 'fooBar'
decapitalize('FooBar'); // 'fooBar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-22-deepFlatten | [pattern]: This snippet flattens an array recursively |

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-23-default | [pattern]: This snippet assigns default values for all properties in an object that are  |

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-24-defer | [pattern]: This snippet delays the execution of a function until the current call stack is cleared |

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-25-degreesToRads | [pattern]: This snippet can be used to convert a value from degrees to radians |

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-26-difference | [pattern]: This snippet finds the difference between two arrays |

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

difference([1, 2, 3], [1, 2, 4]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-mixte-27-differenceBy | [pattern]: This snippet returns the difference between two arrays, after applying a given function to each element of both lists |

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
| bbeo-pattern-array-28-differenceWith | [pattern]: This snippet removes the values for which the comparator function returns  |

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);

differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); 
// [1, 1.2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-29-digitize | [pattern]: This snippet gets a number as input and returns an array of its digits |

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));

digitize(431); // [4, 3, 1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-30-distance | [pattern]: This snippet returns the distance between two points by calculating the Euclidean distance |

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-31-DropLeft | [pattern]: This snippet returns a new array with  elements removed from the left |

```js
const dropLeft = (arr, n = 1) => arr.slice(n);

dropLeft([1, 2, 3]); // [2,3]
dropLeft([1, 2, 3], 2); // [3]
dropLeft([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-32-dropRight | [pattern]: This snippet returns a new array with  elements removed from the right |

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);

dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-33-dropRightWhile | [pattern]: This snippet removes elements from the right side of an array until the passed function returns  |

```js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-34-dropWhile | [pattern]: This snippet removes elements from an array until the passed function returns  |

```js
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-35-elementContains | [pattern]: This snippet checks whether the parent element contains the child |

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);

elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-36-Filter Duplicate Elements | [pattern]: This snippet removes duplicate values in an array |

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-37-findKey | [pattern]: This snippet returns the first key that satisfies a given function |

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
| bbeo-pattern-array-38-findLast | [pattern]: This snippet returns the last element for which a given function returns a truthy value |

```js
const findLast = (arr, fn) => arr.filter(fn).pop();

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-39-flatten | [pattern]: This snippet flattens an array up to a specified depth using recursion |

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-40-forEachRight | [pattern]: This snippet executes a function for each element of an array starting from the array’s last element |

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
| bbeo-pattern-object-41-forOwn | [pattern]: This snippet iterates on each property of an object and iterates a callback for each one respectively |

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-42-functionName | [pattern]: This snippet prints the name of a function into the console |

```js
const functionName = fn => (console.debug(fn.name), fn);

functionName(Math.max); // max (logged in debug channel of console)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-43-Get Time From Date | [pattern]: This snippet can be used to get the time from a object as a string |

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-44-Get Days Between Dates | [pattern]: This snippet can be used to find the difference in days between two dates |

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates(new Date('2019-01-13'), new Date('2019-01-15')); // 2
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-45-getStyle | [pattern]: This snippet can be used to get the value of a CSS rule for a particular element |

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-46-getType | [pattern]: This snippet can be used to get the type of a value |

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-47-hasClass | [pattern]: This snippet checks whether an element has a particular class |

```js
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector('p.special'), 'special'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-48-head | [pattern]: This snippet returns the  of a list |

```js
const head = arr => arr[0];

head([1, 2, 3]); // 1
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-49-hide | [pattern]: This snippet can be used to hide all elements specified |

```js
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-bom-50-httpsRedirect | [pattern]: This snippet can be used to redirect from HTTP to HTTPS in a particular domain |

```js
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-51-indexOfAll | [pattern]: This snippet can be used to get all indexes of a value in an array, which returns an empty array, in case this value is not included in it |

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-52-initial | [pattern]: This snippet returns all elements of an array except the last one |

```js
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-53-insertAfter | [pattern]: This snippet can be used to insert an HTML string after the end of a particular element |

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

insertAfter(document.getElementById('myId'), '<p>after</p>'); // <div id="myId">...</div> <p>after</p>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-54-insertBefore | [pattern]: This snippet can be used to insert an HTML string before a particular element |

```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

insertBefore(document.getElementById('myId'), '<p>before</p>'); // <p>before</p> <div id="myId">...</div>
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-55-intersection | [pattern]: This snippet can be used to get an array with elements that are included in two other arrays |

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-56-intersectionBy | [pattern]: This snippet can be used to return a list of elements that exist in both arrays, after a particular function has been executed to each element of both arrays |

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-57-intersectionWith | [pattern]: This snippet can be used to return a list of elements that exist in both arrays by using a comparator function |

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-58-is | [pattern]: This snippet can be used to check if a value is of a particular type |

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
| bbeo-pattern-test-59-isAfterDate | [pattern]: This snippet can be used to check whether a date is after another date |

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;

isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-60-isAnagram | [pattern]: This snippet can be used to check whether a particular string is an anagram with another string |

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
| bbeo-pattern-test-61-isArrayLike | [pattern]: This snippet can be used to check if a provided argument is iterable like an array |

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';

isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-62-isBeforeDate | [pattern]: This snippet can be used to check whether a date is before another date |

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-63-isBoolean | [pattern]: This snippet can be used to check whether an argument is a boolean |

```js
const isBoolean = val => typeof val === 'boolean';

isBoolean(null); // false
isBoolean(false); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-64-isBrowser | [pattern]: This snippet can be used to determine whether the current runtime environment is a browser. This is helpful for avoiding errors when running front-end modules on the server (Node) |

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-65-isBrowserTabFocused | [pattern]: This snippet can be used to determine whether the browser tab is focused |

```js
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-66-isLowerCase | [pattern]: This snippet can be used to determine whether a string is lower case |

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-67-isNil | [pattern]: This snippet can be used to check whether a value is  or  |

```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-68-isNull | [pattern]: This snippet can be used to check whether a value is  |

```js
const isNull = val => val === null;

isNull(null); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-69-isNumber | [pattern]: This snippet can be used to check whether a provided value is a number |

```js
const isNumber = val => typeof val === 'number';

isNumber('1'); // false
isNumber(1); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-70-isObject | [pattern]: This snippet can be used to check whether a provided value is an object. It uses the Object constructor to create an object wrapper for the given value |

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
| bbeo-pattern-test-71-isObjectLike | [pattern]: This snippet can be used to check if a value is not and that its  is “object” |

```js
const isObjectLike = val => val !== null && typeof val === 'object';

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-72-isPlainObject | [pattern]: This snippet checks whether a value is an object created by the Object constructor |

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-73-isPromiseLike | [pattern]: This snippet checks whether an object looks like a  |

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
| bbeo-pattern-test-74-isSameDate | [pattern]: This snippet can be used to check whether two dates are equal |

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-75-isString | [pattern]: This snippet can be used to check whether an argument is a string |

```js
const isString = val => typeof val === 'string';

isString('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-76-isSymbol | [pattern]: This snippet can be used to check whether an argument is a symbol |

```js
const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-77-isUndefined | [pattern]: This snippet can be used to check whether a value is undefined |

```js
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-78-isUpperCase | [pattern]: This snippet can be used to check whether a string is upper case |

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('ABC'); // true
isLowerCase('A3@$'); // true
isLowerCase('aB4'); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-79-isValidJSON | [pattern]: This snippet can be used to check whether a string is a valid JSON |

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
| bbeo-pattern-array-80-last | [pattern]: This snippet returns the last element of an array |

```js
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-object-81-matches | [pattern]: This snippet compares two objects to determine if the first one contains the same property values as the second one |

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-82-maxDate | [pattern]: This snippet can be used to get the latest date |

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
| bbeo-pattern-array-83-maxN | [pattern]: This snippet returns the  largest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in descending order) |

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-84-minDate | [pattern]: This snippet can be used to get the earliest date |

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
| bbeo-pattern-array-85-minN | [pattern]: This snippet returns the  smallest elements from a list. If is greater than or equal to the list’s length, then it will return the original list (sorted in ascending order) |

```js
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-86-negate | [pattern]: This snippet can be used to apply the not operator () to a predicate function with its arguments |

```js
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-87-nodeListToArray | [pattern]: This snippet can be used to convert a  to an array |

```js
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-88-pad | [pattern]: This snippet can be used to  a string on both sides with a specified character if it is shorter than the specified length |

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
  
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-89-radsToDegrees | [pattern]: This snippet can be used to convert an angle from radians to degrees |

```js
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-90-randomHexColorCode | [pattern]: This snippet can be used to generate a random hexadecimal color code |

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-91-randomIntArrayInRange | [pattern]: This snippet can be used to generate an array with  random integers in a specified range |

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-92-randomIntegerInRange | [pattern]: This snippet can be used to generate a random integer in a specified range |

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-93-randomNumberInRange | [pattern]: This snippet can be used to return a random number in a specified range |

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-lib-94-readFileLines | [pattern]: This snippet can be used to read a file by getting an array of lines from a file |

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
| bbeo-pattern-bom-95-redirect | [pattern]: This snippet can be used to do a redirect to a specified URL |

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
  
redirect('https://google.com');
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-96-reverse | [pattern]: This snippet can be used to reverse a string |

```js
const reverseString = str => [...str].reverse().join('');

reverseString('foobar'); // 'raboof'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-math-97-round | [pattern]: This snippet can be used to round a number to a specified number of digits |

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-98-runPromisesInSeries | [pattern]: This snippet can be used to run an array of promises in series |

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]); 
// Executes each promise sequentially, taking a total of 3 seconds to complete
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-99-sample | [pattern]: This snippet can be used to get a random number from an array |

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-100-sampleSize | [pattern]: This snippet can be used to get random elements from unique positions from an array up to the size of the array. Elements in the array are shuffled using the  |

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
| bbeo-pattern-dom-101-scrollToTop | [pattern]: This snippet can be used to do a smooth scroll to the top of the current page |

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
| bbeo-pattern-string-102-serializeCookie | [pattern]: This snippet can be used to serialize a cookie name-value pair into a Set-Cookie header string |

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie('foo', 'bar'); // 'foo=bar'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-103-setStyle | [pattern]: This snippet can be used to set the value of a CSS rule for a particular element |

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-gen-104-shallowClone | [pattern]: This snippet can be used to create a shallow clone of an object |

```js
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-105-show | [pattern]: This snippet can be used to show all the elements specified |

```js
const show = (...el) => [...el].forEach(e => (e.style.display = ''));

show(...document.querySelectorAll('img')); // Shows all <img> elements on the page
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-106-shuffle | [pattern]: This snippet can be used to order the elements of an array randomly using the  |

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
| bbeo-pattern-array-107-similarity | [pattern]: This snippet can be used to return an array of elements that appear in two arrays |

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v))

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-promise-108-sleep | [pattern]: This snippet can be used to delay the execution of an asynchronous function by putting it into sleep |

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
| bbeo-pattern-dom-109-smoothScroll | [pattern]: This snippet can be used to smoothly scroll the element on which it is called into the visible area of the browser window |

```js
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-string-110-sortCharactersInString | [pattern]: This snippet can be used to alphabetically sort the characters in a string |

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

sortCharactersInString('cabbage'); // 'aabbceg'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-111-splitLines | [pattern]: This snippet can be used to split a multi-line string into an array of lines |

```js
const splitLines = str => str.split(/\r?\n/);

splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-112-stripHTMLTags | [pattern]: This snippet can be used to remove HTML/XML tags from a string |

```js
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-113-sum | [pattern]: This snippet can be used to find the sum of two or more numbers or arrays |

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-114-tail | [pattern]: This snippet can be used to get an array with all the elements of an array except for the first one. If the array has only one element, then that an array with that element will be returned instead |

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-115-take | [pattern]: This snippet can be used to get an array with elements removed from the beginning |

```js
const take = (arr, n = 1) => arr.slice(0, n);

take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-116-takeRight | [pattern]: This snippet can be used to get an array with elements removed from the end |

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-func-117-timeTaken | [pattern]: This snippet can be used to find out the time it takes to execute a function |

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
| bbeo-pattern-func-118-times | [pattern]: This snippet can be used to iterate over a callback times |

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
| bbeo-pattern-cast-119-toCurrency | [pattern]: This snippet can be used to format a number like a currency |

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
| bbeo-pattern-cast-120-toDecimalMark | [pattern]: This snippet uses the function to convert float-point arithmetic to the decimal mark form by using a number to make a comma-separated string |

```js
const toDecimalMark = num => num.toLocaleString('en-US');

toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-dom-121-toggleClass | [pattern]: This snippet can be used to toggle a class for an element |

```js
const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector('p.special'), 'special'); // The paragraph will not have the 'special' class anymore
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-date-122-tomorrow | [pattern]: This snippet can be used to get a string representation of tomorrow’s date |

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
| bbeo-pattern-func-123-unfold | [pattern]: This snippet can be used to build an array using an iterator function and an initial seed value |

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
| bbeo-pattern-array-124-union | [pattern]: This snippet can be used to find the  of two arrays, resulting in an array that has elements that come from both arrays but that do not repeat |

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));

union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-array-125-uniqueElements | [pattern]: This snippet uses ES6 andtheoperator to get every element only once |

```js
const uniqueElements = arr => [...new Set(arr)];

uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-test-126-validateNumber | [pattern]: This snippet can be used to check whether a value is a number |

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

validateNumber('10'); // true
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-pattern-cast-127-words | [pattern]: This snippet converts a string into an array of words |

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);

words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ regex

| Prefix | Description |
|  :-- | :--  |
| bbeo-regex-numExtract | [regex]: Extract number in string |

```js
${1:string}.match(/\d/g);
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-regex-occTotal | [regex]: Get total occurrence of argument in string |

```js
const ${1:string} = ${2:value};
const ${3:occ_name} = (${1:string}.match(/${4:arg}/g) || []).length;
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-regex-ifExist | [regex]: {arg} must be present from {string} |

```js
${1:string}.match(/${2:arg}/);
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-regex-startOf | [regex]: Start of {arg} |

```js
${1:string}.match(/^${2:arg}/);
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-regex-endOf | [regex]: End of {arg} |

```js
${1:string}.match(/${2:arg}$/);
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-regex-ifExistOR | [regex]: {a} OR {b} must be present from {string} |

```js
${1:string}.match(/${2:a}|${3:b}/);
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ spread

| Prefix | Description |
|  :-- | :--  |
| bbeo-spread-mergeArrays | [spread]: Merge several arrays (concat() alternative) -> array |

```js
[...${1:array1}, ...${2:array2}]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-spread-mergeObjects | [spread]: Merge several objects (Object.assign() alternative) -> object |

```js
{...${1:object1}, ...${2:object2}}
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-spread-removeDuplicates | [spread]: Remove duplicates from an array -> array |

```js
[...new Set(${1:array})]
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-spread-addProp | [spread]: Add a new prop/value to an existing object -> object |

```js
{...${1:object}, ${2:newProp}: ${3:foo}}
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>

#### ⚫ string

| Prefix | Description |
|  :-- | :--  |
| bbeo-string-replace | [string]: Replace single occurrence of value -> string |

```js
${1:string}.replace(${2:'input'}, ${3:'output'})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-replaceAll | [string]: Replace all occurrences of value -> string |

```js
${1:string}.replaceAll(${2:'input'}, ${3:'output'})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-split | [string]: Split string into array -> array |

```js
${1:string}.split(${2:'delimiter'})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-sub | [string]: Split a string [start, end+1] -> string |

```js
${1:string}.substr(${2:start}, ${3:end+1})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-repeat | [string]: Repeat a string N times -> string |

```js
${1:string}.repeat(${2:N})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-trim | [string]: Remove the white space at the beginning and at the end of a string -> string |

```js
${1:string}.trim()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-charAt | [string]: Get charAt index -> string |

```js
${1:string}.charAt(${2:index})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-startsWith | [string]: Check start of a string -> boolean |

```js
${1:string}.startsWith(${2:input}, ${3:start_index})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-endsWith | [string]: Check end of a string -> boolean |

```js
${1:string}.endsWith(${2:input}, ${3:end_index})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-toLowerCase | [string]: String to lower case -> string |

```js
${1:string}.toLowerCase()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-toUpperCase | [string]: String to upper case -> string |

```js
${1:string}.toUpperCase()
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-indexOfElement | [string]: Find index of element -> number |

```js
${1:string}.indexOf(${2:e})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-includesElement | [string]: Check the existence of an element |

```js
${1:string}.includes(${2:e})
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-length | [string]: Length of string |

```js
${1:string}.length
```
        
| Prefix | Description |
|  :-- | :--  |
| bbeo-string-concat | [string]: Concatenate with another string |

```js
${1:string}.concat(${2:string})
```
        
<div align="left">
    <b><a href="#-table-of-contents">↥ Back To Top</a></b>
</div>
