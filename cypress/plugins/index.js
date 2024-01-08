// ***********************************************************
// This functions are called when a project is opened or re-opened (e.g. due to
// the project's config changes)
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const browserify = require('@cypress/browserify-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { preprocessor } = require('@badeball/cypress-cucumber-preprocessor/browserify');

module.exports = async (on, config) => {
	await addCucumberPreprocessorPlugin(on, config);

	on(
		'file:preprocessor',
		preprocessor(config, {
			...browserify.defaultOptions,
		}),
	);

	on('task', {});

	return {
		...config,
	};
};
