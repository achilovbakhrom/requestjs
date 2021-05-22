import * as webpack from "webpack";
import * as webpackDevServer from 'webpack-dev-server';
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpackClean from "clean-webpack-plugin";

interface Configuration extends webpack.Configuration {
    devServer?: webpackDevServer.Configuration;
}

const config: Configuration = {    
    mode: "development",
    entry:  path.resolve(__dirname, "..", "src", "core", "index.tsx"),
    devtool: "source-map",       
    output: {
        path: path.resolve(__dirname, "..", "dist"),
        filename: "index.js",
        publicPath: "/",
        library: "requestjs",        
        libraryTarget: "umd",
    },    
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /bootstrap\.tsx$/,
                loader: "bundle-loader",
                options: {
                    lazy: true,
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /__tests__/],
            },            
            {
                test: /\.css$/,                
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                ]
            },
            {
                test: /\.scss$/,                
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                    
                ]
            },
            {
                test: /\.less$/,                
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    },
                    
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "..", "public", "index.html"),        
            inject: "body",
        }),
        new webpackClean.CleanWebpackPlugin(),
        new webpack.ProgressPlugin({
            activeModules: true,
            entries: true,
            modules: true,
            modulesCount: 5000,
            profile: true,
            dependencies: true,
            dependenciesCount: 10000,
            percentBy: "modules",
        }),
    ],
};

export default config;