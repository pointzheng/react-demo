var webpack = require("webpack");

module.exports = {
	entry : __dirname + "/src/main.js",
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
