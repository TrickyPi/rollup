module.exports = {
	description: 'tree-shaking on class that will be a param for function',
	solo: true,
	warnings: [
		{
			code: 'EMPTY_BUNDLE',
			message: 'Generated an empty chunk: "main".',
			names: ['main']
		}
	]
};
