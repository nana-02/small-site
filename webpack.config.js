const path = require('path');

module.exports = {
  entry: './src/js/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    url: false,
                    importLoaders: 2
                }
            },
            'sass-loader'
        ],
    },
    ],
  },
  resolve: {
    // 拡張子を配列で指定
    extensions: [
      '.js', '.jsx', '.scss',
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
    open: true,
  },
};