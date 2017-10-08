var webpack = require("webpack");
var path = require('path');

module.exports = {
//	entry : __dirname + "/src/main.js",
	entry : __dirname + "/src/main-echarts-react.js",
	output : {
		path : __dirname + "/dist",
		filename : "bundle.js"
	},
	devtool : "source-map",

	// webpack-dev-server����
	devServer : {
		contentBase : "./dist",
		colors : true,
		inline : true
	},
	// ���ӵĲ���
	module : {
		loaders : [ {
			test : /\.js[x]?$/,
			exclude : /node_modules/,
			include: [path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules", "react-echarts-v3")],
			loader : 'babel-loader?presets[]=es2015&presets[]=react'
		} ]
	},
	plugins:[
	         new webpack.ProvidePlugin({
	         $:"jquery",
	         jQuery:"jquery",
	         "window.jQuery":"jquery"
	         })
	       ]
};
