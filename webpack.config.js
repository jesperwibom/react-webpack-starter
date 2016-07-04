var pathUtil = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIR = {
	APP: pathUtil.resolve(__dirname, 'src/app'),
	BUILD: pathUtil.resolve(__dirname, 'src/build'),
	DIST: pathUtil.resolve(__dirname, 'dist')
};

var HtmlTemplateConfig = new HtmlWebpackPlugin({
  // HtmlWebpackPlugin:
	title: "React app",
	hash: true,
  filename: 'index.html',

	// HtmlWebpackTemplate:
  inject: false,
  template: require('html-webpack-template'),
  //template: 'node_modules/html-webpack-template/index.ejs',
	//template: pathUtil.resolve(DIR.APP, 'index.html'),

  // Optional
  appMountId: 'app',
	mobile: true

	/*
  baseHref: 'http://example.com/awesome',
  devServer: 3001,
  googleAnalytics: {
    trackingId: 'UA-XXXX-XX',
    pageViewOnLoad: true
  },
  window: {
    env: {
      apiHost: 'http://myapi.com/api/v1'
    }
  }
	*/

  // and any other config options from html-webpack-plugin
  // https://github.com/ampedandwired/html-webpack-plugin#configuration
});


var config = {
	entry: DIR.APP + '/app.js',
	output: {
		path: DIR.BUILD,
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					cacheDirectory: true,
					presets: ['es2015','react']
				}
			},
			{
	      test: /\.css$/,
	      loader: 'style-loader!css-loader'
	    }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		HtmlTemplateConfig
	],
	devtool: 'source-map',
	devServer: {
    contentBase: __dirname + '/dist',
    hot: true
  }
};

module.exports = config;
