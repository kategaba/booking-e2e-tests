const { defineConfig } = require('cypress');

module.exports = defineConfig({
	chromeWebSecurity: false,
	modifyObstructiveCode: false,
	watchForFileChanges: true,
	defaultCommandTimeout: 40000,
	requestTimeout: 30000,
	responseTimeout: 60000,
	videoUploadOnPasses: false,
	viewportWidth: 1280,
	viewportHeight: 1024,
	videoCompression: 15,
	fixturesFolder: 'cypress/fixtures',
	screenshotsFolder: 'cypress/screenshots',
	videosFolder: 'cypress/videos',
	downloadsFolder: 'cypress/downloads',
	e2e: {
		baseUrl: 'https://www.booking.com',
		specPattern: 'cypress/integration/**/*.feature',
		supportFile: 'cypress/support/e2e.js',
		numTestsKeptInMemory: 1,
		experimentalMemoryManagement: true,
		setupNodeEvents(on, config) {
			// implement node event listeners here
			// eslint-disable-next-line
			return require('./cypress/plugins/index.js')(on, config);
		},
	},
	env: {
		USERNAME: "kateyurasava+test@gmail.com",
	},
	projectId: '',
	retries: {
		runMode: 2,
		openMode: 0,
	},
});
