const webpackConfig = require('./webpack.config.babel');

const testGlob = 'src/*.spec.js'
const srcGlob = 'src/**/!(*.spec|*.stub).js'

module.exports = config => {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [testGlob, srcGlob],
		reporters: ['progress'],
		preprocessors: {
			[testGlob]: ['webpack'],
			[srcGlob]: ['webpack'],
		},
		webpack: webpackConfig,
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['Chrome'],
		singleRun: true,
		concurrency: Infinity,
	});
};