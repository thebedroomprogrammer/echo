const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
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
//# sourceMappingURL=webpack.config.js.map
