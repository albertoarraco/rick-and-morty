const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const $VARIABLE_PORT = Math.round(Math.random() * 10000);

module.exports = (env) => merge(common(env), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: $VARIABLE_PORT,
  },
});
