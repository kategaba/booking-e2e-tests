// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	env: {
		browser: true,
	},
	extends: ['airbnb-base', 'prettier'],
	// add your custom rules here
	rules: {
		'import/prefer-default-export': 0,
		'import/no-named-as-default': 0,
		'no-underscore-dangle': [2, { allow: ['_log', '_id'] }],
		'no-param-reassign': 0,
		'no-nested-ternary': 0,
		'no-plusplus': 0,
		'no-prototype-builtins': 0,
		// allow optionalDependencies
		'import/no-extraneous-dependencies': [
			'error',
			{
				optionalDependencies: ['test/unit/index.js'],
			},
		],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
	},
	parserOptions: {
		ecmaVersion: 2021,
	},
};
