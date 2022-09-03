
<div align="center">

<img src="https://github.com/RajaRakoto/boost-eo/blob/master/assets/boost-eo-ico.png?raw=true" width=128>

# BOOST-EO

<img src="https://github.com/RajaRakoto/github-docs/blob/master/dago.gif?raw=true" width=40>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/for-dago.svg?raw=true)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![JSON](https://img.shields.io/badge/-JSON-777?style=flat&logo=JSON&logoColor=777&labelColor=ffffff) ![JavaScript](https://img.shields.io/badge/-JavaScript-777?style=flat&logo=javascript&logoColor=dbb332&labelColor=ffffff)![Typescript](https://img.shields.io/badge/-Typescript-777?style=flat&logo=typescript&logoColor=dodgerblue&labelColor=ffffff)
![Python](https://img.shields.io/badge/-Python-777?style=flat&logo=python&labelColor=ffffff) ![Shell](https://img.shields.io/badge/-Shell-777?style=flat&logo=shell&labelColor=333) ![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff) ![NPM](https://img.shields.io/badge/-NPM-777?style=flat&logo=npm&labelColor=ffffff)<br>


[BOOST-EO -> Github](https://github.com/RajaRakoto/boost-eo)

</div>

<br>

### 📌 Extension

**BOOST-EO** is a set of custom code snippets available for VScode IDE to help you be more productive by providing helper methods.

---

### 📌 Installation

You can install it by typing `boost-eo` in the extension tab of your IDE

---

### 📌 Usage

> **Notation**
hybr = string | array
mixte = array | object


#### ◾ Javascript snippets

<table>
<th>prefix</th>
<th>body</th>
<th>description</th>

<tr>
<td>
<strong>bbeo-js-array-ascElement</strong>
</td>
<td>

```js
${1:array_var}.sort((${2:a},${3:b}) => ${2:a} - ${3:b})
```
</td>
<td>

>[array]: (a0 -> b1) sort in ascending order -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-array-descElement</strong>
</td>
<td>

```js
${1:array_var}.sort((${2:a},${3:b}) => ${3:b} - ${2:a})
```
</td>
<td>

>[array]: (b1 -> a0) sort in descending order -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-array-slice</strong>
</td>
<td>

```js
${1:array_var}.slice(${2:start}, ${3:end+1})
```
</td>
<td>

>[array]: split an array [n, n+1] -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-array-join</strong>
</td>
<td>

```js
${1:array_var}.join(${2:delimiter})
```
</td>
<td>

>[array]: join an array from a delimiter to get a string -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-array-flat</strong>
</td>
<td>

```js
${1:array_var}.flat(${2:depth})
```
</td>
<td>

>[array]: Flatten the elements of a nested array to a specific depth -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-array-isEmpty</strong>
</td>
<td>

```js
${1:array_var}.length === 0 ? true : false
```
</td>
<td>

>[array]: Check if an array is empty -> boolean
</td>
</tr>

<tr>
<td>
<strong>bbeo-array-removeDuplicates</strong>
</td>
<td>

```js
[...new Set(${1:array_var})]
```
</td>
<td>

>[array]: Remove duplicates from an array -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-ifCondition</strong>
</td>
<td>

```js
if (${1:condition}) {
    ${3:condition_body}
} else if (${2:condition}) {
    ${4:condition_body}
} else {
    ${5:condition_body}
}
```
</td>
<td>

>[basic]: Conditional statement
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-forLoop</strong>
</td>
<td>

```js
for (let ${1:index} = 0; ${1:index} < ${2:array_length}; ${1:index}++) {
    ${3:for_body}
}
```
</td>
<td>

>[basic]: For loop
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-whileLoop</strong>
</td>
<td>

```js
while (${1:condition}) {
    ${2:while_body}
}
```
</td>
<td>

>[basic]: While loop
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-doWhileLoop</strong>
</td>
<td>

```js
do {
    ${2:do_body}
} while (${1:condition});
```
</td>
<td>

>[basic]: Do while loop
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-forInLoop</strong>
</td>
<td>

```js
for (let ${1:e} in ${2:array_var}) {
    ${3:for_body}
}
```
</td>
<td>

>[basic]: For in loop
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-forOfLoop</strong>
</td>
<td>

```js
for (let ${1:e} of ${2:array_var}) {
    ${3:for_body}
}
```
</td>
<td>

>[basic]: For of loop
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-forEachLoop</strong>
</td>
<td>

```js
${2:array_var}.forEach((${1:e}) => {
    ${3:for_body}
});
```
</td>
<td>

>[basic]: For each loop
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-switchStatement</strong>
</td>
<td>

```js
switch (${1:condition}) {
    case ${2:condition_value}:
        ${3:switch_body}
        break;
    case ${4:condition_value}:
        ${5:switch_body}
        break;
    default:
        ${6:switch_body}
        break;
}
```
</td>
<td>

>[basic]: Switch statement
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-tryCatchStatement</strong>
</td>
<td>

```js
try {
    ${1:try_body}
} catch (${2:error}) {
    ${3:catch_body}
}
```
</td>
<td>

>[basic]: Try catch statement
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-tryCatchFinallyStatement</strong>
</td>
<td>

```js
try {
    ${1:try_body}
} catch (${2:error}) {
    ${3:catch_body}
} finally {
    ${4:finally_body}
}
```
</td>
<td>

>[basic]: Try catch finally statement
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-basic-tryCatchFinallyStatementMultiple</strong>
</td>
<td>

```js
try {
    ${1:try_body}
} catch (${2:error}) {
    ${3:catch_body}
} catch (${4:error}) {
    ${5:catch_body}
} finally {
    ${6:finally_body}
}
```
</td>
<td>

>[basic]: Try catch finally statement with multiple catch blocks
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-objToString1</strong>
</td>
<td>

```js
${1:object}.toString()
```
</td>
<td>

>[cast]: method 1 - Convert any object to string -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-objToString2</strong>
</td>
<td>

```js
String(${1:object})
```
</td>
<td>

>[cast]: method 2 - Convert any object to string -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-stringToArray1</strong>
</td>
<td>

```js
Array.from(${1:string_var})
```
</td>
<td>

>[cast]: method 1 - convert string to array -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-stringToArray2</strong>
</td>
<td>

```js
[... ${1:string_var}]
```
</td>
<td>

>[cast]: method 2 - convert string to array -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-stringToArray3</strong>
</td>
<td>

```js
${1:string_var}.split``
```
</td>
<td>

>[cast]: method 3 - convert string to array -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-stringToNumber1</strong>
</td>
<td>

```js
Number(${1:string_var})
```
</td>
<td>

>[cast]: method 1 - convert string to number -> number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-stringToNumber2</strong>
</td>
<td>

```js
parseInt(${1:string_var})
```
</td>
<td>

>[cast]: method 2 - convert string to number -> number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-hex2dec</strong>
</td>
<td>

```js
+('0x'+ ${1:hex_var})
```
</td>
<td>

>[cast]: hex -> dec
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-dec2hex</strong>
</td>
<td>

```js
${1:dec_var}.toString(16)
```
</td>
<td>

>[cast]: dec -> hex
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-oct2dec</strong>
</td>
<td>

```js
parseInt(${1:oct_var}, 8)
```
</td>
<td>

>[cast]: oct -> dec
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-dec2oct</strong>
</td>
<td>

```js
${1:dec_var}.toString(8)
```
</td>
<td>

>[cast]: dec -> oct
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-bin2dec</strong>
</td>
<td>

```js
parseInt(${bin_var}, 2)
```
</td>
<td>

>[cast]: bin -> dec
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-cast-dec2bin</strong>
</td>
<td>

```js
${1:dec_var}.toString(2)
```
</td>
<td>

>[cast]: dec -> bin
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-object-getter</strong>
</td>
<td>

```js
get ${1:property_name} () { return this.${1:property_name}; }
```
</td>
<td>

>[class]: Create getter pattern
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-object-setter</strong>
</td>
<td>

```js
set ${1:property_name} (${2:value}) { this.${1:property_name} = ${2:value}; }
```
</td>
<td>

>[class]: Create setter pattern
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-object-method</strong>
</td>
<td>

```js
${1:method_name} () { ${2:method_body} }
```
</td>
<td>

>[class]: Create method pattern
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-object-constructor</strong>
</td>
<td>

```js
constructor () { ${1:constructor_body} }
```
</td>
<td>

>[class]: Create constructor pattern
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-object-staticMethod</strong>
</td>
<td>

```js
static ${1:method_name} () { ${2:method_body} }
```
</td>
<td>

>[class]: Create static method pattern
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-object-staticProperty</strong>
</td>
<td>

```js
static ${1:property_name} = ${2:property_value}
```
</td>
<td>

>[class]: Create static property pattern
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-object-staticGetter</strong>
</td>
<td>

```js
static get ${1:property_name} () { return this.${1:property_name}; }
```
</td>
<td>

>[class]: Create static getter pattern
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-object-staticSetter</strong>
</td>
<td>

```js
static set ${1:property_name} (${2:value}) { this.${1:property_name} = ${2:value}; }
```
</td>
<td>

>[class]: Create static setter pattern
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-class-genClassPattern</strong>
</td>
<td>

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
</td>
<td>

>[class]: Generate class pattern
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-console-clg</strong>
</td>
<td>

```js
console.log(${1:object})
```
</td>
<td>

>[console]: console log
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-console-clr</strong>
</td>
<td>

```js
console.error(${1:object})
```
</td>
<td>

>[console]: console error
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-console-clt</strong>
</td>
<td>

```js
console.table(${1:object})
```
</td>
<td>

>[console]: console table
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-console-cli</strong>
</td>
<td>

```js
console.info(${1:object})
```
</td>
<td>

>[console]: console info
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-console-clw</strong>
</td>
<td>

```js
console.warn(${1:object})
```
</td>
<td>

>[console]: console warn
</td>
</tr>

<tr>
<td>
<strong>bbeo-date-createNullDate</strong>
</td>
<td>

```js
const ${1:date_objVar} = new Date()
```
</td>
<td>

>[date]: Create a date object (null args)
</td>
</tr>

<tr>
<td>
<strong>bbeo-date-createFullDate</strong>
</td>
<td>

```js
const ${1:date_objVar} = new Date(${2:year}, ${3:month}, ${4:day}, ${5:hour}, ${6:minute}, ${7:second}, ${8:millisecond})
```
</td>
<td>

>[date]: Create a date object (full args)
</td>
</tr>

<tr>
<td>
<strong>bbeo-date-createStringDate</strong>
</td>
<td>

```js
const ${1:date_objVar} = new Date(${2:date_string})
```
</td>
<td>

>[date]: Create a date object (date string)
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-date-now</strong>
</td>
<td>

```js
${1:date_objVar}.now()
```
</td>
<td>

>[date]: Get current date
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-date-day</strong>
</td>
<td>

```js
${1:date_objVar}.getDay()
```
</td>
<td>

>[date]: Get current day
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-date-month</strong>
</td>
<td>

```js
${1:date_objVar}.getMonth()
```
</td>
<td>

>[date]: Get current month
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-date-year</strong>
</td>
<td>

```js
${1:date_objVar}.getFullYear()
```
</td>
<td>

>[date]: Get current year
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-date-hour</strong>
</td>
<td>

```js
${1:date_objVar}.getHours()
```
</td>
<td>

>[date]: Get current hour
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-date-minute</strong>
</td>
<td>

```js
${1:date_objVar}.getMinutes()
```
</td>
<td>

>[date]: Get current minute
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-date-second</strong>
</td>
<td>

```js
${1:date_objVar}.getSeconds()
```
</td>
<td>

>[date]: Get current second
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-date-millisecond</strong>
</td>
<td>

```js
${1:date_objVar}.getMilliseconds()
```
</td>
<td>

>[date]: Get current millisecond
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-date-time</strong>
</td>
<td>

```js
${1:date_objVar}.getTime()
```
</td>
<td>

>[date]: Get current time
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-date-toString</strong>
</td>
<td>

```js
${1:date_objVar}.toString()
```
</td>
<td>

>[date]: Get current date as string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-destruct-assignArray</strong>
</td>
<td>

```js
const [${1:var1}, ${2:var2}] = [${3:value1}, ${4:value2}]
```
</td>
<td>

>[destruct]: Destructuring assignment -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-destruct-assignObject</strong>
</td>
<td>

```js
const {${1:attrib1}, ${2:attrib2}} = ${3:object_container}
```
</td>
<td>

>[destruct]: Object destructuring assignment -> object
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id</strong>
</td>
<td>

```js
document.getElementById(${1:id})
```
</td>
<td>

>[dom]: Get element by id
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-class</strong>
</td>
<td>

```js
document.getElementsByClassName(${1:class})
```
</td>
<td>

>[dom]: Get element by class
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-tag</strong>
</td>
<td>

```js
document.getElementsByTagName(${1:tag})
```
</td>
<td>

>[dom]: Get element by tag
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-query</strong>
</td>
<td>

```js
document.querySelector(${1:query})
```
</td>
<td>

>[dom]: Get element by query
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-queryAll</strong>
</td>
<td>

```js
document.querySelectorAll(${1:query})
```
</td>
<td>

>[dom]: Get element by query all
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-name</strong>
</td>
<td>

```js
document.getElementsByName(${1:name})
```
</td>
<td>

>[dom]: Get element by name
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-createHTMLElement</strong>
</td>
<td>

```js
document.createElement(${1:tag})
```
</td>
<td>

>[dom]: Create html element of tag
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-createTextNode</strong>
</td>
<td>

```js
document.createTextNode(${1:text})
```
</td>
<td>

>[dom]: Create text node
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-innerHTML</strong>
</td>
<td>

```js
document.getElementById(${1:id}).innerHTML = ${2:html}
```
</td>
<td>

>[dom]: Get element by id and set innerHTML
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-textContent</strong>
</td>
<td>

```js
document.getElementById(${1:id}).textContent = ${2:text}
```
</td>
<td>

>[dom]: Get element by id and set textContent
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-value</strong>
</td>
<td>

```js
document.getElementById(${1:id}).value = ${2:value}
```
</td>
<td>

>[dom]: Get element by id and set value
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-attribute</strong>
</td>
<td>

```js
document.getElementById(${1:id}).setAttribute(${2:attribute}, ${3:value})
```
</td>
<td>

>[dom]: Get element by id and set attribute
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-getAttribute</strong>
</td>
<td>

```js
document.getElementById(${1:id}).getAttribute(${2:attribute})
```
</td>
<td>

>[dom]: Get element by id and get attribute
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-removeAttribute</strong>
</td>
<td>

```js
document.getElementById(${1:id}).removeAttribute(${2:attribute})
```
</td>
<td>

>[dom]: Get element by id and remove attribute
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-addClass</strong>
</td>
<td>

```js
document.getElementById(${1:id}).classList.add(${2:class})
```
</td>
<td>

>[dom]: Get element by id and add class
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-removeClass</strong>
</td>
<td>

```js
document.getElementById(${1:id}).classList.remove(${2:class})
```
</td>
<td>

>[dom]: Get element by id and remove class
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-toggleClass</strong>
</td>
<td>

```js
document.getElementById(${1:id}).classList.toggle(${2:class})
```
</td>
<td>

>[dom]: Get element by id and toggle class
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-hasClass</strong>
</td>
<td>

```js
document.getElementById(${1:id}).classList.contains(${2:class})
```
</td>
<td>

>[dom]: Get element by id and check class
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-appendChild</strong>
</td>
<td>

```js
document.getElementById(${1:id}).appendChild(${2:child})
```
</td>
<td>

>[dom]: Get element by id and append child
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-removeChild</strong>
</td>
<td>

```js
document.getElementById(${1:id}).removeChild(${2:child})
```
</td>
<td>

>[dom]: Get element by id and remove child
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-insertBefore</strong>
</td>
<td>

```js
document.getElementById(${1:id}).insertBefore(${2:child}, ${3:reference})
```
</td>
<td>

>[dom]: Get element by id and insert before
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-insertAfter</strong>
</td>
<td>

```js
document.getElementById(${1:id}).insertBefore(${2:child}, ${3:reference}.nextSibling)
```
</td>
<td>

>[dom]: Get element by id and insert after
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-replaceChild</strong>
</td>
<td>

```js
document.getElementById(${1:id}).replaceChild(${2:child}, ${3:reference})
```
</td>
<td>

>[dom]: Get element by id and replace child
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-childNodes</strong>
</td>
<td>

```js
document.getElementById(${1:id}).childNodes
```
</td>
<td>

>[dom]: Get element by id and retrieve all child nodes]
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-firstChild</strong>
</td>
<td>

```js
document.getElementById(${1:id}).firstChild
```
</td>
<td>

>[dom]: Get element by id and retrieve first child node]
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-lastChild</strong>
</td>
<td>

```js
document.getElementById(${1:id}).lastChild
```
</td>
<td>

>[dom]: Get element by id and retrieve last child node]
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-parentNode</strong>
</td>
<td>

```js
document.getElementById(${1:id}).parentNode
```
</td>
<td>

>[dom]: Get element by id and retrieve parent node]
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-addEventListener</strong>
</td>
<td>

```js
document.getElementById(${1:id}).addEventListener(${2:click, 'keypress, scroll, mouseenter, mouseout, input, submit, load'}, ${3:callback})
```
</td>
<td>

>[dom]: Get element by id and add event listener]
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-eventTargetValue</strong>
</td>
<td>

```js
${1:e}.target.value
```
</td>
<td>

>[dom]: Get target value from event]
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-addEventListenerWithpreventDefault</strong>
</td>
<td>

```js
document.getElementById(${1:id}).addEventListener(${2:'submit'}, ${3:e} => {
    ${3:e}.preventDefault()
})
```
</td>
<td>

>[dom]: Get element by id and add event listener with prevent default]
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-dom-id-addEventListenerWithstopPropagation</strong>
</td>
<td>

```js
document.getElementById(${1:id}).addEventListener(${2:click, 'keypress, scroll, mouseenter, mouseout, input, submit, load'}, ${3:e} => {
    ${3:e}.stopPropagation()
})
```
</td>
<td>

>[dom]: Get element by id and add event listener with stop propagation]
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-func-arrowFunc</strong>
</td>
<td>

```js
const ${1:func_name} = (${2:args}) => {
  ${3:code...}
}
```
</td>
<td>

>[func]: Create arrow function
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-gen-permut</strong>
</td>
<td>

```js
[${1:a},${2:b}] = [${2:b},${1:a}]
```
</td>
<td>

>[gen]: Swap 2 values ​​from 2 variables
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-gen-idGen</strong>
</td>
<td>

```js
let ${1:id_name} = idMaker()
${1:id_name}.next().value  // → 0
${1:id_name}.next().value  // → 1
${1:id_name}.next().value  // → 2
```
</td>
<td>

>[gen]: Id generator
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-gen-alphaGen</strong>
</td>
<td>

```js
String.fromCharCode(...Array(123).keys()).slice(97)
```
</td>
<td>

>[gen]: Alphabet generator
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-gen-numGen</strong>
</td>
<td>

```js
[...Array(${1:min(0)~max(n+1)})].map((_, i) => i); 
```
</td>
<td>

>[gen]: Number generator
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-hybrid-indexOfElement</strong>
</td>
<td>

```js
${1:hybr_var}.indexOf(${2:e})
```
</td>
<td>

>[hybr]: Find index of element
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-hybrid-includesElement</strong>
</td>
<td>

```js
${1:hybr_var}.includes(${2:e})
```
</td>
<td>

>[hybr]: Check the existence of an element
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-dot</strong>
</td>
<td>

```js
${1:number_var}.toFixed(${2:decal})
```
</td>
<td>

>[math]: Format a number in fixed-dot notation -> number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-pow</strong>
</td>
<td>

```js
${1:number_var} ** ${2:exp}
```
</td>
<td>

>[math]: Power of number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-max</strong>
</td>
<td>

```js
Math.max(... ${1: element})
```
</td>
<td>

>[math]: Get MAX element
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-min</strong>
</td>
<td>

```js
Math.min(... ${1: element})
```
</td>
<td>

>[math]: Get MAX element
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-expOfNumber</strong>
</td>
<td>

```js
Math.log(${solution})/Math.log(${base})
```
</td>
<td>

>[math]: Get exponent of a number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-sqrt</strong>
</td>
<td>

```js
Math.sqrt(${1:number})
```
</td>
<td>

>[math]: Get square of a number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-abs</strong>
</td>
<td>

```js
Math.abs(${1:number})
```
</td>
<td>

>[math]: Get absolute value of a number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-round</strong>
</td>
<td>

```js
Math.round(${1:number})
```
</td>
<td>

>[math]: Get round value of a number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-ceil</strong>
</td>
<td>

```js
Math.ceil(${1:number})
```
</td>
<td>

>[math]: Get ceil value of a number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-floor</strong>
</td>
<td>

```js
Math.floor(${1:number})
```
</td>
<td>

>[math]: Get floor value of a number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-random</strong>
</td>
<td>

```js
Math.random()
```
</td>
<td>

>[math]: Get random value between 0 and 1
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-random-max</strong>
</td>
<td>

```js
Math.floor(Math.random() * ${1:max})
```
</td>
<td>

>[math]: Get random value between 0 and max
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-random-minMax</strong>
</td>
<td>

```js
Math.floor(Math.random() * (${1:max} - ${2:min}) + ${2:min})
```
</td>
<td>

>[math]: Get random value between min and max
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-pi</strong>
</td>
<td>

```js
Math.PI
```
</td>
<td>

>[math]: Get PI value
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-e</strong>
</td>
<td>

```js
Math.E
```
</td>
<td>

>[math]: Get E value
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-ln2</strong>
</td>
<td>

```js
Math.LN2
```
</td>
<td>

>[math]: Get LN2 value
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-math-ln10</strong>
</td>
<td>

```js
Math.LN10
```
</td>
<td>

>[math]: Get LN10 value
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-mixte-findElement</strong>
</td>
<td>

```js
${1:mixte_var}.find(${2:e} => ${2:e} ${3:===} ${4:foo})
```
</td>
<td>

>[mixte]: Search a specific element -> mixed
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-mixte-someElement</strong>
</td>
<td>

```js
${1:mixte_var}.some(${2:e} => ${2:e} ${3:===} ${4:foo})
```
</td>
<td>

>[mixte]: Check one or more specific element.s of an array/object (no size modification) -> boolean
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-mixte-everyElement</strong>
</td>
<td>

```js
${1:mixte_var}.every(${2:e} => ${2:e} ${3:===} ${4:foo})
```
</td>
<td>

>[mixte]: Check the integrity of the elements of an array/object (no size modification) -> boolean
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-mixte-mapElement</strong>
</td>
<td>

```js
${1:mixte_var}.map(${2:e} => {${3:expression}})
```
</td>
<td>

>[mixte]: Processing of different element of the array/object (no modification of the size) -> mixed
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-mixte-filterElement</strong>
</td>
<td>

```js
${1:mixte_var}.filter(${2:e} => {${3:condition}})
```
</td>
<td>

>[mixte]: Filter the element of an array/object (size modification) -> mixed
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-mixte-reduceElement</strong>
</td>
<td>

```js
${1:mixte_var}.reduce((${2:total, e}) => {${3:total + e}})
```
</td>
<td>

>[mixte]: Processing each element of the array/object to obtain a single value -> number
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-mixte-foreachElement</strong>
</td>
<td>

```js
${1:mixte_var}.forEach((${2:e}) => {
    ${3:expression}
})
```
</td>
<td>

>[mixte]: Browse the elements of an array/object -> any
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-module-imp</strong>
</td>
<td>

```js
import ${1:module_name} from ${2:module_source};
```
</td>
<td>

>[module]: Imports entire module statement in ES6 syntax
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-module-imd</strong>
</td>
<td>

```js
import { ${1:module_name} } from ${2:module_source};
```
</td>
<td>

>[module]: Imports only a portion of the module in ES6 syntax (destructuring assignment)
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-object-extractValues</strong>
</td>
<td>

```js
Object.values(${1:object_var})
```
</td>
<td>

>[object]: Extract objecy values
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-object-extractEntries</strong>
</td>
<td>

```js
Object.entries(${1:object_var})
```
</td>
<td>

>[object]: Extract object entries
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-regex-numExtract</strong>
</td>
<td>

```js
${1:string_var}.match(/\d/g);
```
</td>
<td>

>[regex]: Extract number in string 
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-regex-occTotal</strong>
</td>
<td>

```js
const ${1:string_var} = ${2:string_value}
${3:occ_name}=(${1:string_var}.match(/${4:arg}/g)||[]).length 
```
</td>
<td>

>[regex]: Get total occurrence of argument in string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-regex-ifExist</strong>
</td>
<td>

```js
${1:string_var}.match(/${2:arg}/)
```
</td>
<td>

>[regex]: {arg} must be present from {string_var}
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-regex-startOf</strong>
</td>
<td>

```js
${1:string_var}.match(/^${2:arg}/)
```
</td>
<td>

>[regex]: Start of {arg} 
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-regex-endOf</strong>
</td>
<td>

```js
${1:string_var}.match(/^${2:arg}/)
```
</td>
<td>

>[regex]: End of {arg} 
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-regex-ifExistOR</strong>
</td>
<td>

```js
${1:string_var}.match(/${2:a}|${3:b}/)
```
</td>
<td>

>[regex]: {a} OR {b} must be present from {string_var}
</td>
</tr>

<tr>
<td>
<strong>bbeo-spread-mergeArrays</strong>
</td>
<td>

```js
[...${1:arr1}, ...${2:arr2}]
```
</td>
<td>

>[spread]: Merge several arrays (concat() alternative) -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-spread-mergeObjects</strong>
</td>
<td>

```js
{...${1:obj1}, ...${2:obj2}}
```
</td>
<td>

>[spread]: Merge several objects (Object.assign() alternative) -> object
</td>
</tr>

<tr>
<td>
<strong>bbeo-spread-removeDuplicates</strong>
</td>
<td>

```js
[...new Set(${1:array_var})]
```
</td>
<td>

>[spread]: Remove duplicates from an array -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-spread-addProp</strong>
</td>
<td>

```js
{...${1:obj_var}, ${2:newProp}: ${3:foo}}
```
</td>
<td>

>[spread]: Add a new prop/value to an existing object -> object
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-replace</strong>
</td>
<td>

```js
${1:string_var}.replace(${2:'input'}, ${3:'output'})
```
</td>
<td>

>[string]: Replace single occurrence of value -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-replaceAll</strong>
</td>
<td>

```js
${1:string_var}.replaceAll(${2:'input'}, ${3:'output'})
```
</td>
<td>

>[string]: Replace all occurrences of value -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-split</strong>
</td>
<td>

```js
${1:string_var}.split(${2:'delimiter'})
```
</td>
<td>

>[string]: Split string into array -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-sub</strong>
</td>
<td>

```js
${1:string_var}.substr(${2:start}, ${3:end+1})
```
</td>
<td>

>[string]: Split a string [start, end+1] -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-repeat</strong>
</td>
<td>

```js
${1:string_var}.repeat(${2:N})
```
</td>
<td>

>[string]: Repeat a string N times -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-trim</strong>
</td>
<td>

```js
${1:string_var}.trim()
```
</td>
<td>

>[string]: Remove the white space at the beginning and at the end of a string -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-charAt</strong>
</td>
<td>

```js
${1:string_var}.charAt(${2:index})
```
</td>
<td>

>[string]: Get chatAt index -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-startsWith</strong>
</td>
<td>

```js
${1:string_var}.startsWith(${2:input}, ${3:start_index})
```
</td>
<td>

>[string]: Check start of a string -> boolean
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-endsWith</strong>
</td>
<td>

```js
${1:string_var}.endsWith(${2:input}, ${3:end_index})
```
</td>
<td>

>[string]: Check end of a string -> boolean
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-toLowerCase</strong>
</td>
<td>

```js
${1:string_var}.toLowerCase()
```
</td>
<td>

>[string]: String to lower case -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-string-toUpperCase</strong>
</td>
<td>

```js
${1:string_var}.toUpperCase()
```
</td>
<td>

>[string]: String to upper case -> string
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-struct-addToQueue</strong>
</td>
<td>

```js
${1:array_var}.push(${2:e})
```
</td>
<td>

>[struct]: Add to queue -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-struct-addToHead</strong>
</td>
<td>

```js
${1:array_var}.unshift(${2:e})
```
</td>
<td>

>[struct]: Add to head -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-struct-deleteAtTail</strong>
</td>
<td>

```js
${1:array_var}.pop(${2:e})
```
</td>
<td>

>[struct]: Delete at tail -> array
</td>
</tr>

<tr>
<td>
<strong>bbeo-js-struct-deleteAtHead</strong>
</td>
<td>

```js
${1:array_var}.shift(${2:e})
```
</td>
<td>

>[struct]: Delete at head -> array
</td>
</tr>

</table>


---

### 📌 Contribution
  
- If you want to contribute to this project, here is a tool that will help you to generate snippets -> https://snippet-generator.app/
- With each new code snippet added, you need to update `all snippets` file and regenerate the documentation, all in one command:
```bash
node boost-eo-snippets-engine.js > README.md
```
- Then you can make a PR.

<div align="center">

#### Enjoy it 😉
</div>

