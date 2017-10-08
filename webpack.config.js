module.exports = {
	entry : __dirname + "/src/main.js",
	output : {
		path : __dirname + "/dist",
		filename : "bundle.js"
	},
	devtool : "source-map",

	// webpack-dev-server配置
	devServer : {
		contentBase : "./dist",
		colors : true,
		inline : true
	},
	// 增加的部分
	module : {
		loaders : [ {
			test : /\.js[x]?$/,
			exclude : /node_modules/,
			loader : 'babel-loader?presets[]=es2015&presets[]=react'
		} ]
	}
};
