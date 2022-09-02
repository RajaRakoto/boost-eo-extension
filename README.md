
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


#### ◾ Javascript snippets

<table>
<th>prefix</th>
<th>body</th>
<th>description</th>

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
<strong>bbeo-js-module-imp</strong>
</td>
<td>

```js
import ${1:module_name} from ${2:module_source};
```
</td>
<td>

>[import]: Imports entire module statement in ES6 syntax
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

>[import]: Imports only a portion of the module in ES6 syntax (destructuring assignment)
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

