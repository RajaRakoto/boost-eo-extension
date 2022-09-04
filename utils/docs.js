import { stats } from "./stats.js";

export const header = `
<div align="center">

<img src="https://github.com/RajaRakoto/boost-eo/blob/master/assets/boost-eo-ico.png?raw=true" width=128>

# BOOST-EO

<img src="https://github.com/RajaRakoto/github-docs/blob/master/dago.gif?raw=true" width=40>

![JSON](https://img.shields.io/badge/-JSON-777?style=flat&logo=JSON&logoColor=777&labelColor=ffffff) ![JavaScript](https://img.shields.io/badge/-JavaScript-777?style=flat&logo=javascript&logoColor=dbb332&labelColor=ffffff)![Typescript](https://img.shields.io/badge/-Typescript-777?style=flat&logo=typescript&logoColor=dodgerblue&labelColor=ffffff)
![Python](https://img.shields.io/badge/-Python-777?style=flat&logo=python&labelColor=ffffff) ![Shell](https://img.shields.io/badge/-Shell-777?style=flat&logo=shell&labelColor=333) ![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff) ![NPM](https://img.shields.io/badge/-NPM-777?style=flat&logo=npm&labelColor=ffffff)<br>


[BOOST-EO -> Github](https://github.com/RajaRakoto/boost-eo)

</div>

<br>

### 📌 Description

**BOOST-EO** is a set of custom code snippets & pattern available for VScode IDE to help you be more productive by providing helper methods 🚀.

---

### 📌 Installation

You can install it by typing \`boost-eo\` in the extension tab of your IDE

---

### 📌 Features

- [x] Javascript snippets collection
- [x] Javascript patterns collection
- [x] Some snippets on frequently used javascript libraries
- [ ] Typescript snippets collection
- [ ] React snippets collection
- [ ] React patterns collection
- [ ] Python snippets collection
- [ ] Python patterns collection
- [ ] Shell script snippets collection
- [ ] Shell script patterns collection

---

### 📌 Stats

${stats}

---

### 📌 Usage

<div align="center">

| Snippets & Patterns Index |
| :-- |
| [🔎 Javascript snippets](#-javascript-snippets) |
| [🔎 Javascript patterns](#-javascript-patterns) |
</div>

> **Notation**: hybrid = string | array -- mixte = array | object

`;

export const footer = `
---

### 📌 Contribution
  
- If you want to contribute to this project, here is a tool that will help you to generate snippets -> https://snippet-generator.app/
- With each new code snippet added, you need to update \`all snippets\` file and regenerate the documentation, all in one command:
\`\`\`bash
node boost-eo-engine.js > README.md
\`\`\`
- Then you can make a PR.

<div align="center">

#### Enjoy it 😉
</div>
`;
