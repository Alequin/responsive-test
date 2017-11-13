
const config = {
	entry: "./javascript/Main.js",
	output: {
		path: `${__dirname}/javascript`,
		filename: 'MainBundle.js'
	},
	stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
	devtool: 'source-map',
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
        test: /\.scss$/,
        use: [
	        {
	          loader: "style-loader" // creates style nodes from JS strings
	        },
	        {
	          loader: "css-loader" // translates CSS into CommonJS
	        },
	        {
	          loader: "sass-loader" // compiles Sass to CSS
	        }

        ]
      },
			{
        test: /\.(png|jpg|ttf)$/,
        use: [
         	{ loader: 'url-loader', options: { limit: 5000192 } }
        ]
      }
		]
	}
}

module.exports = config
