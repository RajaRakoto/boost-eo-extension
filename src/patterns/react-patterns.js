export const react_patterns = {
	'[pattern]: Generate id with useId hook from react 18': {
		prefix: 'bbeo-react-pattern-gen-1-useId',
		body: [
			"import { useId } from 'react';",
			'',
			'export default function App() {',
			'	const Users = [',
			'		{',
			'			id: useId(),',
			"			name: 'Rakoto',",
			'		},',
			'		{',
			'			id: useId(),',
			"			name: 'Rasoa',",
			'		},',
			'	];',
			'',
			'	return (',
			'		<div className="app">',
			'			{Users.map(user => (',
			'				<p key={user.id}>{user.name}</p>',
			'			))}',
			'		</div>',
			'	);',
			'}',
		],
		description: '[pattern]: Generate id with useId hook from react 18',
	},
	'[pattern]: Set state pattern': {
		prefix: 'bbeo-react-pattern-state-2-setState',
		body: [
			'const myComponent = () => {',
			'	const [object, setObject] = useState({',
			"		name: 'MacGuffin',",
			'		click: 0,',
			'	});',
			'',
			'	const handleClick = () => {',
			'		setObject({ ...object, click: object.click + 1 });',
			'	};',
			'',
			'	return <div onClick={handleClick}>{object.click}</div>;',
			'};',
		],
		description: '[pattern]: Set state hook pattern',
	},
	'[pattern]: JSX conditionals pattern ': {
		prefix: 'bbeo-react-pattern-jsx-3-confitionals1',
		body: [
			'const sampleComponent = () => {',
			'	return isTrue && <p>True!</p>; // IDEM -> return isTrue ? <p>True!</p> : null;',
			'};',
		],
		description: '[pattern]: JSX conditionals pattern ',
	},
	'[pattern]: JSX conditionals pattern ': {
		prefix: 'bbeo-react-pattern-jsx-4-confitionals2',
		body: [
			'const sampleComponent = () => {',
			'  return (',
			'    <div>',
			'      {',
			'        do => {',
			'          if (flag && flag2 && !flag3) {',
			'            if (flag4) {',
			'              <p>Blah</p>',
			'            } else if (flag5) {',
			'              <p>Meh</p>',
			'            } else {',
			'              <p>Herp</p>',
			'            }',
			'          } else {',
			'            <p>Derp</p>',
			'          }',
			'        }',
			'      }',
			'    </div>',
			'  )',
			'};',
		],
		description: '[pattern]: JSX conditionals pattern ',
	},
	'[pattern]: Conditionally restore a list from a data': {
		prefix: 'bbeo-react-pattern-comp-5-dataList',
		body: [
			'function DataList({ isOrdered, data }) {',
			'  const list = data.map((val, i) => (',
			'    <li key={`${i}_${val}`}>{val}</li>',
			'  ));',
			'  return isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>;',
			'}',
			'',
			"const names = ['John', 'Paul', 'Mary'];",
			"ReactDOM.render(<DataList data={names}/>, document.getElementById('root'));",
			"ReactDOM.render(<DataList data={names} isOrdered/>, document.getElementById('root'));",
		],
		description: '[pattern]: Conditionally restore a list from a data',
	},
	'[pattern]: Renders a textarea component with a word limit.': {
		prefix: 'bbeo-react-pattern-comp-6-limitedWordTextarea',
		body: [
			'function LimitedWordTextarea({ rows, cols, value, limit }) {',
			'  const [content, setContent] = React.useState(value);',
			'  const [wordCount, setWordCount] = React.useState(0);',
			'',
			'  const setFormattedContent = text => {',
			"    let words = text.split(' ');",
			'    if (words.filter(Boolean).length > limit) {',
			'      setContent(',
			'        text',
			"          .split(' ')",
			'          .slice(0, limit)',
			"          .join(' ')",
			'      );',
			'      setWordCount(limit);',
			'    } else {',
			'      setContent(text);',
			'      setWordCount(words.filter(Boolean).length);',
			'    }',
			'  };',
			'',
			'  React.useEffect(() => {',
			'    setFormattedContent(content);',
			'  }, []);',
			'',
			'  return (',
			'    <div>',
			'      <textarea',
			'        rows={rows}',
			'        cols={cols}',
			'        onChange={event => setFormattedContent(event.target.value)}',
			'        value={content}',
			'      />',
			'      <p>',
			'        {wordCount}/{limit}',
			'      </p>',
			'    </div>',
			'  );',
			'}',
			'',
			'ReactDOM.render(',
			'  <LimitedWordTextArea limit={5} value="Hello there!" />,',
			"  document.getElementById('root')",
			');',
		],
		description: '[pattern]: Renders a textarea component with a word limit.',
	},
	'[pattern]: Renders an accordion menu with multiple collapsible content components.':
		{
			prefix: 'bbeo-react-pattern-comp-7-accordionItem',
			body: [
				'function AccordionItem(props) {',
				'  const style = {',
				'    collapsed: {',
				"      display: 'none'",
				'    },',
				'    expanded: {',
				"      display: 'block'",
				'    },',
				'    buttonStyle: {',
				"      display: 'block',",
				"      width: '100%'",
				'    }',
				'  };',
				'',
				'  return (',
				'    <div>',
				'      <button style={style.buttonStyle} onClick={() => props.handleClick()}>',
				'        {props.label}',
				'      </button>',
				'      <div',
				'        className="collapse-content"',
				'        style={props.isCollapsed ? style.collapsed : style.expanded}',
				'        aria-expanded={props.isCollapsed}',
				'      >',
				'        {props.children}',
				'      </div>',
				'    </div>',
				'  );',
				'}',
				'',
				'function Accordion(props) {',
				'  const [bindIndex, setBindIndex] = React.useState(props.defaultIndex);',
				'',
				'  const changeItem = itemIndex => {',
				"    if (typeof props.onItemClick === 'function') props.onItemClick(itemIndex);",
				'    if (itemIndex !== bindIndex) setBindIndex(itemIndex);',
				'  };',
				"  const items = props.children.filter(item => item.type.name === 'AccordionItem');",
				'',
				'  return (',
				'    <div className="wrapper">',
				'      {items.map(({ props }) => (',
				'        <AccordionItem',
				'          isCollapsed={bindIndex === props.index}',
				'          label={props.label}',
				'          handleClick={() => changeItem(props.index)}',
				'          children={props.children}',
				'        />',
				'      ))}',
				'    </div>',
				'  );',
				'}',
				'',
				'ReactDOM.render(',
				'  <Accordion defaultIndex="1" onItemClick={console.log}>',
				'    <AccordionItem label="A" index="1">',
				'      Lorem ipsum',
				'    </AccordionItem>',
				'    <AccordionItem label="B" index="2">',
				'      Dolor sit amet',
				'    </AccordionItem>',
				'  </Accordion>,',
				"  document.getElementById('root')",
				');',
			],
			description:
				'[pattern]: Renders an accordion menu with multiple collapsible content components.',
		},
	'[pattern]: Renders a carousel component.': {
		prefix: 'bbeo-react-pattern-comp-8-carousel',
		body: [
			'function Carousel(props) {',
			'  const [active, setActive] = React.useState(0);',
			'  let scrollInterval = null;',
			'  const style = {',
			'    carousel: {',
			'      position: "relative"',
			'    },',
			'    carouselItem: {',
			'      position: "absolute",',
			'      visibility: "hidden"',
			'    },',
			'    visible: {',
			'      visibility: "visible"',
			'    }',
			'  };',
			'  React.useEffect(() => {',
			'    scrollInterval = setTimeout(() => {',
			'      const { carouselItems } = props;',
			'      setActive((active + 1) % carouselItems.length);',
			'    }, 2000);',
			'  });',
			'  const { carouselItems, ...rest } = props;',
			'  return (',
			'    <div style={style.carousel}>',
			'      {carouselItems.map((item, index) => {',
			'        const activeStyle = active === index ? style.visible : {};',
			'        return React.cloneElement(item, {',
			'          ...rest,',
			'          style: {',
			'            ...style.carouselItem,',
			'            ...activeStyle',
			'          }',
			'        });',
			'      })}',
			'    </div>',
			'  );',
			'}',
			'',
			'ReactDOM.render(',
			'  <Carousel',
			'    carouselItems={[',
			'      <div>carousel item 1</div>,',
			'      <div>carousel item 2</div>,',
			'      <div>carousel item 3</div>',
			'    ]}',
			'  />,',
			'  document.getElementById("root")',
			');',
		],
		description: '[pattern]: Renders a carousel component.',
	},
	'[pattern]: Renders a component with collapsible content.': {
		prefix: 'bbeo-react-pattern-comp-9-collapse',
		body: [
			'function Collapse(props) {',
			'  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);',
			'',
			'  const style = {',
			'    collapsed: {',
			'      display: "none"',
			'    },',
			'    expanded: {',
			'      display: "block"',
			'    },',
			'    buttonStyle: {',
			'      display: "block",',
			'      width: "100%"',
			'    }',
			'  };',
			'',
			'  return (',
			'    <div>',
			'      <button',
			'        style={style.buttonStyle}',
			'        onClick={() => setIsCollapsed(!isCollapsed)}',
			'      >',
			'        {isCollapsed ? "Show" : "Hide"} content',
			'      </button>',
			'      <div',
			'        className="collapse-content"',
			'        style={isCollapsed ? style.collapsed : style.expanded}',
			'        aria-expanded={isCollapsed}',
			'      >',
			'        {props.children}',
			'      </div>',
			'    </div>',
			'  );',
			'}',
			'',
			'ReactDOM.render(',
			'  <Collapse>',
			'    <h1>This is a collapse</h1>',
			'    <p>Hello world!</p>',
			'  </Collapse>,',
			"  document.getElementById('root')",
			');',
		],
		description: '[pattern]: Renders a component with collapsible content.',
	},
	'[pattern]: CSS -> Renders a tree view of a JSON object or array with collapsible content':
		{
			prefix: 'bbeo-react-pattern-comp-10-treeView',
			body: [
				'function TreeView({',
				'  data,',
				'  toggled = true,',
				'  name = null,',
				'  isLast = true,',
				'  isChildElement = false,',
				'  isParentToggled = true',
				'}) {',
				'  const [isToggled, setIsToggled] = React.useState(toggled);',
				'',
				'  return (',
				'    <div',
				'      style={{ marginLeft: isChildElement ? 16 : 4 + "px" }}',
				'      className={isParentToggled ? "tree-element" : "tree-element collapsed"}',
				'    >',
				'      <span',
				'        className={isToggled ? "toggler" : "toggler closed"}',
				'        onClick={() => setIsToggled(!isToggled)}',
				'      />',
				'      {name ? <strong>&nbsp;&nbsp;{name}: </strong> : <span>&nbsp;&nbsp;</span>}',
				'      {Array.isArray(data) ? "[" : "{"}',
				'      {!isToggled && "..."}',
				'      {Object.keys(data).map(',
				'        (v, i, a) =>',
				'          typeof data[v] == "object" ? (',
				'            <TreeView',
				'              data={data[v]}',
				'              isLast={i === a.length - 1}',
				'              name={Array.isArray(data) ? null : v}',
				'              isChildElement',
				'              isParentToggled={isParentToggled && isToggled}',
				'            />',
				'          ) : (',
				'            <p',
				'              style={{ marginLeft: 16 + "px" }}',
				'              className={isToggled ? "tree-element" : "tree-element collapsed"}',
				'            >',
				'              {Array.isArray(data) ? "" : <strong>{v}: </strong>}',
				'              {data[v]}',
				'              {i === a.length - 1 ? "" : ","}',
				'            </p>',
				'          )',
				'      )}',
				'      {Array.isArray(data) ? "]" : "}"}',
				'      {!isLast ? "," : ""}',
				'    </div>',
				'  );',
				'}',
				'',
				'let data = {',
				'  lorem: {',
				'    ipsum: "dolor sit",',
				'    amet: {',
				'      consectetur: "adipiscing",',
				'      elit: [',
				'        "duis",',
				'        "vitae",',
				'        {',
				'          semper: "orci"',
				'        },',
				'        {',
				'          est: "sed ornare"',
				'        },',
				'        "etiam",',
				'        ["laoreet", "tincidunt"],',
				'        ["vestibulum", "ante"]',
				'      ]',
				'    },',
				'    ipsum: "primis"',
				'  }',
				'};',
				'ReactDOM.render(<TreeView data={data} name=\'data\'/>, document.getElementById("root"));',
			],
			description:
				"[pattern]: Restitue une arborescence d'un objet ou d'un tableau JSON avec un contenu réductible",
		},
	'[pattern]: Renders a link formatted to send email': {
		prefix: 'bbeo-react-pattern-comp-11-mailTo',
		body: [
			'function Mailto({ email, subject, body, ...props }) {',
			'  return (',
			'    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>',
			'      {props.children}',
			'    </a>',
			'  );',
			'}',
			'',
			'ReactDOM.render(',
			'  <Mailto email="foo@bar.baz" subject="Hello" body="Hello world!">',
			'    Mail me!',
			'  </Mailto>,',
			'  document.getElementById("root")',
			');',
		],
		description: '[pattern]: Renders a link formatted to send email',
	},
	'[pattern]: CSS -> Renders a tooltip component.': {
		prefix: 'bbeo-react-pattern-comp-12-toolTip',
		body: [
			'function Tooltip({ children, text, ...rest }) {',
			'  const [show, setShow] = React.useState(false);',
			'',
			'  return (',
			'    <div>',
			'      <div className="tooltip" style={show ? { visibility: "visible" } : {}}>',
			'        {text}',
			'        <span className="tooltip-arrow" />',
			'      </div>',
			'      <div',
			'        {...rest}',
			'        onMouseEnter={() => setShow(true)}',
			'        onMouseLeave={() => setShow(false)}',
			'      >',
			'        {children}',
			'      </div>',
			'    </div>',
			'  );',
			'}',
		],
		description: '[pattern]: Renders a ticker component.',
	},
	'[pattern]: Renders a ticker component.': {
		prefix: 'bbeo-css-pattern-comp-13-ticker',
		body: [
			'function Ticker(props) {',
			'  const [ticker, setTicker] = React.useState(0);',
			'  let interval = null;',
			'',
			'  const tick = () => {',
			'    reset();',
			'    interval = setInterval(() => {',
			'      if (ticker < props.times) ',
			'        setTicker(ticker + 1);',
			'      else ',
			'        clearInterval(interval);',
			'    }, props.interval);',
			'  }',
			'',
			'  const reset = () => {',
			'    setTicker(0);',
			'    clearInterval(interval);',
			'  }',
			'',
			'  return (',
			'    <div>',
			'      <span style={{ fontSize: 100 }}>{ticker}</span>',
			'      <button onClick={tick}>Tick!</button>',
			'      <button onClick={reset}>Reset</button>',
			'    </div>',
			'  );',
			'}',
		],
		description: '[pattern]: Renders a ticker component.',
	},
	'[pattern]: Displays an input element that uses a callback function to pass its value to the parent component.':
		{
			prefix: 'bbeo-css-pattern-comp-14-input',
			body: [
				'function Ticker(props) {',
				'  const [ticker, setTicker] = React.useState(0);',
				'  let interval = null;',
				'',
				'  const tick = () => {',
				'    reset();',
				'    interval = setInterval(() => {',
				'      if (ticker < props.times) ',
				'        setTicker(ticker + 1);',
				'      else ',
				'        clearInterval(interval);',
				'    }, props.interval);',
				'  }',
				'',
				'  const reset = () => {',
				'    setTicker(0);',
				'    clearInterval(interval);',
				'  }',
				'',
				'  return (',
				'    <div>',
				'      <span style={{ fontSize: 100 }}>{ticker}</span>',
				'      <button onClick={tick}>Tick!</button>',
				'      <button onClick={reset}>Reset</button>',
				'    </div>',
				'  );',
				'}',
			],
			description:
				'[pattern]: Displays an input element that uses a callback function to pass its value to the parent component.',
		},
	'[pattern]: Data transmission from parent to children': {
		prefix: 'bbeo-react-pattern-state-15-propsDrillingState',
		body: [
			'function Child({ parentData }) {',
			'	return (',
			'		<div>',
			'			<span>Child data: {parentData}</span>',
			'		</div>',
			'	);',
			'}',
			'',
			'export default function Parent() {',
			'	const [state, setState] = React.useState(null);',
			'',
			"	const externalData = 'Ceci est un donnee venant du composant parent';",
			'',
			'	return (',
			'		<div>',
			'			<p>Parent data: {state}</p>',
			'			<Child parentData={state} />',
			'			<br />',
			'			<button onClick={() => setState(externalData)}>Send</button>',
			'		</div>',
			'	);',
			'}',
		],
		description: '[pattern]: Data transmission from parent to children',
	},
	'[pattern]: Data transmission from children to parent': {
		prefix: 'bbeo-react-pattern-state-15-callbackFuncState',
		body: [
			'function Child({ sendDatatoParent }) {',
			"	const externalData = 'Ceci est un donnee venant du composant enfant';",
			'',
			'	return (',
			'		<div>',
			'			<span>Child data: {externalData}</span>',
			'			<br />',
			'			<button onClick={() => sendDatatoParent(externalData)}>Send</button>',
			'		</div>',
			'	);',
			'}',
			'',
			'export default function Parent() {',
			'	const [state, setState] = React.useState(null);',
			'',
			'	const sendDatatoParent = childData => {',
			'		setState(childData);',
			'	};',
			'',
			'	return (',
			'		<div>',
			'			<p>Parent data: {state}</p>',
			'			<Child sendDatatoParent={sendDatatoParent} />',
			'		</div>',
			'	);',
			'}',
		],
		description: '[pattern]: Data transmission from children to parent',
	},
	'[pattern]: onClick() event for React': {
		prefix: 'bbeo-react-pattern-event-16-onClick',
		body: [
			'export default function Age() {',
			'	let [state, setState] = React.useState();',
			'	state = { Users };',
			'',
			'	const setAge = value => {',
			'		setState((state.Users.user1.age += value)); ',
			'	};',
			'',
			'	return (',
			'		<React.Fragment>',
			'			<p>Age (user1): {Users.user1.age}</p>',
			'			<button onClick={() => setAge(2)}>Viellir</button>',
			'		</React.Fragment>',
			'	);',
			'}',
		],
		description: '[pattern]: onClick() event for React',
	},
	'[pattern]: onChange() event for React': {
		prefix: 'bbeo-react-pattern-event-17-onChange',
		body: [
			'export default function Message() {',
			"	const [message, setMessageValue] = React.useState('default message');",
			'',
			'	return (',
			'		<React.Fragment>',
			'			<textarea',
			'				cols="30"',
			'				rows="10"',
			'				placeholder={message}',
			"				onChange={e => setMessageValue(e.target.value)} // ecouteur d'evenement qui fait appel a la methode setMessageValue() a chaque modification et mettre a jour le state",
			'			></textarea>',
			'		</React.Fragment>',
			'	);',
			'}',
		],
		description: '[pattern]: onChange() event for React',
	},
	'[pattern]: onSubmit() event for React': {
		prefix: 'bbeo-react-pattern-event-17-onSubmit',
		body: [
			'export default function SampleForm() {',
			'	const handleSubmit = e => {',
			'		e.preventDefault();',
			"		alert(e.target['sample-input'].value); // get sample-input value",
			'	};',
			'',
			'	return (',
			'		<React.Fragment>',
			'			<form id="sample-form" onSubmit={handleSubmit}>',
			'				<h5>Sample form</h5>',
			'				<input',
			'					type="text"',
			'					name="sample-input"',
			'					placeholder="Entrer un texte ici ..."',
			'				/>',
			'				<ValidBtn />',
			'			</form>',
			'		</React.Fragment>',
			'	);',
			'}',
		],
		description: '[pattern]: onSubmit() event for React',
	},
};
