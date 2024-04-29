<table>
  <thead>
    <tr>
      <th>Prefix</th>
      <th>Body</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>bbeo-string-replace</td>
      <td><code>${1:string}.replace(${2:'input'}, ${3:'output'})</code></td>
      <td>[string]: Replace single occurrence of value -> string</td>
    </tr>
    <tr>
      <td>bbeo-string-replaceAll</td>
      <td><code>${1:string}.replaceAll(${2:'input'}, ${3:'output'})</code></td>
      <td>[string]: Replace all occurrences of value -> string</td>
    </tr>
    <tr>
      <td>bbeo-string-split</td>
      <td><code>${1:string}.split(${2:'delimiter'})</code></td>
      <td>[string]: Split string into array -> array</td>
    </tr>
    <tr>
      <td>bbeo-string-sub</td>
      <td><code>${1:string}.substr(${2:start}, ${3:end+1})</code></td>
      <td>[string]: Split a string [start, end+1] -> string</td>
    </tr>
    <tr>
      <td>bbeo-pattern-gen-128-getES6moduleSyntaxBySource</td>
      <td>
        <code
          >export function getES6moduleSyntaxBySource(source, extension) {<br />
          const fixVarName = varName => varName.replace(/-/g, '_');<br />
          const dropRight = (arr, n = 1) => arr.slice(0, -n); <br />
          let sourceList = fsReadDir(source);<br />
          let sourceES6 = [];<br />
          sourceList.forEach(source => {<br />
          if (source.endsWith(extension)) {<br />
          sourceES6.push(dropRight(source, 3));<br />
          }<br />
          });<br />
          return sourceES6.map(<br />
          source => `import { ${fixVarName(source)} } from
          './${source}.js';`,<br />
          );<br />}</code
        >
      </td>
      <td>[pattern]: Get all ES6 modules syntax from the source directory</td>
    </tr>
    <tr>
      <td>bbeo-pattern-test-131-validateEmail</td>
      <td>
        <code
          >const validateEmail = email => { <br />
          var emailPattern =
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;<br />
          return emailPattern.test(email); <br />};</code
        >
      </td>
      <td>[pattern]: Email validator with regex</td>
    </tr>
  </tbody>
</table>

