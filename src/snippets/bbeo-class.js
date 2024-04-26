export const bbeo_class = {
	"[class]: Create getter": {
		prefix: "bbeo-class-getter",
		body: ["get ${1:property} () { return this.${1:property}; }"],
		description: "[class]: Create getter",
	},
	"[class]: Create setter": {
		prefix: "bbeo-class-setter",
		body: [
			"set ${1:property} (${2:value}) { this.${1:property} = ${2:value}; }",
		],
		description: "[class]: Create setter",
	},
	"[class]: Create static getter": {
		prefix: "bbeo-class-staticGetter",
		body: ["static get ${1:property} () { return this.${1:property}; }"],
		description: "[class]: Create static getter",
	},
	"[class]: Create static setter": {
		prefix: "bbeo-class-staticSetter",
		body: [
			"static set ${1:property} (${2:value}) { this.${1:property} = ${2:value}; }",
		],
		description: "[class]: Create static setter",
	},
	"[class]: Create method": {
		prefix: "bbeo-class-method",
		body: ["${1:name} () { ${2:body} }"],
		description: "[class]: Create method",
	},
	"[class]: Create static method": {
		prefix: "bbeo-class-staticMethod",
		body: ["static ${1:name} () { ${2:body} }"],
		description: "[class]: Create static method",
	},
	"[class]: Create constructor": {
		prefix: "bbeo-class-constructor",
		body: ["constructor () { ${1:body} }"],
		description: "[class]: Create constructor",
	},
	"[class]: Create static property": {
		prefix: "bbeo-class-staticProperty",
		body: ["static ${1:property} = ${2:value}"],
		description: "[class]: Create static property",
	},
	"[class]: Generate class": {
		prefix: "bbeo-class-genClass",
		body: [
			"class Circle extends Shape {",
			"  ",
			"  // constructor",
			"  constructor (radius) {",
			"    this.radius = radius",
			"  }",
			"  ",
			"  // methods",
			"   getArea () {",
			"    return Math.PI * 2 * this.radius",
			"  }",
			"  ",
			"  // superclass",
			"   expand (n) {",
			"    return super.expand(n) * Math.PI",
			"  }",
			"  ",
			"  //static method",
			"   static createFromDiameter(diameter) {",
			"    return new Circle(diameter / 2)",
			"  }",
			"}",
		],
		description: "[class]: Generate class",
	},
};
