const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/',
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          'url-loader'
        ],
      },
      {
        test: /.(gif|png|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader : 'file-loader',
          options: {
            name      : '[contenthash].[ext]',
            outputPath: 'others',
            publicPath: '/static/pw/others'
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      { // compiles s[ac]ss to CSS
        test: /\.s[ac]ss$/,
        use : [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /translations.csv$/,
        exclude: /node_modules/,
        use: [path.resolve('./loaders/i18next-custom-loader.js'), 'csv-loader?header=true?skipEmptyLines=true'],
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@ui': path.resolve(__dirname, 'src/uikit'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@pages': path.resolve(__dirname, 'src/pages')
    },
  }
};
