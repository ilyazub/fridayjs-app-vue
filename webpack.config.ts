import * as path from 'path';
import * as webpack from 'webpack';
import { HashedModuleIdsPlugin } from 'webpack';
import * as VueLoaderPlugin from 'vue-loader/lib/plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const src: string = path.join(__dirname, 'client', 'src');

const config: webpack.Configuration = {
  entry: path.join(src, 'main.ts'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': src,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      }
    ],
  },
  optimization: {
     runtimeChunk: 'single',
     splitChunks: {
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all',
         }
       }
     }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Friday JS',

      template: path.join(src, 'index.html'),
    }),
    new HashedModuleIdsPlugin(),
  ],
};

export default config;
