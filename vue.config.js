const path = require('path')
const webpack = require("webpack");
const resolve = dir => {
    return path.join(__dirname, dir)
}
const baseUrl = '/';

const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    devServer: {
        port: 1234,
        disableHostCheck: true,
        proxy: {
            '/ssomanager': {
                target: 'http://120.71.148.127:9892/sso-manager',
                pathRewrite: {
                    '^/ssomanager': '/'
                },
                changeOrigin: true
            },
            '/xuesong': {
                // target: 'http://10.8.0.47:9791/xd-credit',
                target: "http://120.71.148.127:9791/xd-credit",
                pathRewrite: {
                    '^/xuesong': ''
                },
                changeOrigin: true
            },
            '/jiwei': {
                // target: 'http://10.8.0.47:9791/xd-credit',
                target: "http://120.71.148.127:9791/xd-credit",
                //target: " http://120.71.148.127:9791/xd-credit",
                pathRewrite: {
                    '^/jiwei': ''
                },
                changeOrigin: true
            },
            '/fileupload': {
                // target: 'http://10.8.0.15:9791/xd-credit',
                target: 'http://120.71.148.127:9791/xd-credit',
                pathRewrite: {
                    '^/fileupload': '/'
                },
                changeOrigin: true
            }
        }
    },
    //////
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            }),
            ///////平时注释
            new CompressionPlugin({
                test: /\.(js|css)(\?.*)?$/i, //需要压缩的文件正则
                threshold: 10240, //文件大小大于这个值时启用压缩
                deleteOriginalAssets: false //压缩后保留原文件
            })
            ////////平时注释
        ],
        module: {}
    }
    //////
}