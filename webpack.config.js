const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	entry: "./src/main.tsx",

	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},

	plugins: [
		new HTMLWebpackPlugin({
			template: "./src/index.html",
		}),
		new MiniCssExtractPlugin({
			filename: devMode ? "[name].css" : "[name].[contenthash].css",
			chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
		}),
	],

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.less$/,
				oneOf: [
					{
						test: /\.module\.less$/,
						use: [
							devMode ? "style-loader" : MiniCssExtractPlugin.loader,
							{
								loader: "css-loader",
								options: {
									modules: {
										localIdentName: "[local]--[hash:base64:5]",
										exportLocalsConvention: "camelCaseOnly",
									},
									importLoaders: 2,
									esModule: false,
								},
							},
							"less-loader",
						],
					},
					{
						use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
					},
				],
			},
		],
	},

	optimization: {
		minimize: !devMode,
		minimizer: [
			new TerserPlugin({
				parallel: true,
			}),
			new CssMinimizerPlugin(),
		],
	},

	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 9000,
		hot: true,
	},
};
