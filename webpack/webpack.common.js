const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/*
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
*/

module.exports = (env) => {
	return {
		entry: './src/index.js',
		output: {
			pathinfo: false,
			filename: '[name].bundle.js',
			chunkFilename: '[name].[contenthash].vendors.js', // Añade esta línea
			path: path.resolve(__dirname, 'dist')
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
						},
					}
				},
				{
					test: /\.(css|scss)$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						{
							loader: 'sass-loader',
							options: {
								implementation: require('sass'),
							},
						},
					]
				},
				{
					test: /\.(png|woff|woff2|eot|ttf|svg)$/,
					type: "asset/resource",
				},
			]
		},
		performance: { hints: false },
		plugins: [
			new HtmlWebPackPlugin({
				template: "./src/index.html",
				filename: "./index.html",
				inject: "body"
			}),
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css"
			})
		]
	}
};
