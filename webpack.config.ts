import * as path from 'path';
import * as webpack from 'webpack';
import * as VueLoaderPlugin from 'vue-loader/lib/plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const src: string = path.join(__dirname, 'src');

const config: webpack.Configuration = {
    mode: 'production',
    entry: path.join(src, 'main.ts'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
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
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Friday JS',

            template: path.join(src, 'index.html'),
        }),
    ],
};

export default config;
