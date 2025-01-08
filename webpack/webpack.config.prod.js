const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => merge(common(env), {
  mode: 'production',
  optimization: {
    minimize: true,
    nodeEnv: 'production',
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
            return chunks.some(chunk => chunk.name === 'main') ? 'vendors' : `vendor-${cacheGroupKey}`;
          },
          chunks: 'all',
          enforce: true,
        },
      },
    }
  },
  resolve: {
    alias: {
      // Reemplazar React con Preact en producción
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
});
