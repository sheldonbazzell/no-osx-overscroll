const { join } = require('path');
const include = join(__dirname, 'src')

module.exports = {
	entry: './src/index',
	output: {
		path: join(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'noOSXOverscroll',
	},
	devtool: 'source-map',
	externals: [
		'unique-random-array'
	],
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', include },
			{ test: /\.json$/, 'loader': 'json-loader', include },
		]
	}
}