const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	plugins: [
		new CopyPlugin([
			{ from: "src/sdk.js", to: "build/sdk.js" },
			{ from: "src/app.js", to: "build/app.js" },
		]),
	],
	mode: "production",
	entry: {
		sdk: "./src/sdk.ts",
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					output: {
						comments: false,
					},
				},
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: ["babel-loader", "ts-loader"],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		path: path.resolve(__dirname, "build"),
	},
};
