/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`)
const TsconfigPathsPlugin = require(`tsconfig-paths-webpack-plugin`)

module.exports = {
	entry: `./src/index.ts`,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: `ts-loader`,
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					`style-loader`,
					`css-loader`,
				],
			},
		],
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, `src/`),
		},
		plugins: [new TsconfigPathsPlugin()],
		extensions: [`.tsx`, `.ts`, `.js`],
	},
	output: {
		filename: `bundle.js`,
		path: path.resolve(__dirname, `dist`),
	},
}
