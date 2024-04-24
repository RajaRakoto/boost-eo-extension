export const js_bom = {
	'[bom]: Create window event listener': {
		prefix: 'bbeo-bom-addWindowEventListener',
		body: ["window.addEventListener(${1:'resize, scroll'}, ${2:callback})"],
		description: '[bom]: Create window event listener',
	},
};
