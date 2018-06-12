
module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
    },
   resolve: {
      root:__dirname,
      alias:{
        HomePage:'src/HomePage.js',
        OderPage:'src/OrderProductPage.js'
      }
    }, 
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
          },
        },
      ],
    },
  };