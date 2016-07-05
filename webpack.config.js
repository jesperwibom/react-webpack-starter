var pathUtil = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

var DIR = {
	APP: pathUtil.resolve(__dirname, 'src/app'),
	BUILD: pathUtil.resolve(__dirname, 'src/build'),
	DIST: pathUtil.resolve(__dirname, 'dist')
};

var HtmlTemplateConfig = new HtmlWebpackPlugin({
	title: "React app",
	hash: true,
  filename: 'index.html',
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
  }
	*/
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
	      loader: 'style!css?sourceMap!postcss'
	    },
			{
        test: /\.(scss|sass)$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
		]
	},
	postcss: function () {
    return [
			precss,
			autoprefixer({
				browsers: ['last 4 versions','last 4 Android versions','last 4 ChromeAndroid versions','last 4 FirefoxAndroid versions'],
				remove: false
			})];
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
