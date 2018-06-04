module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://napi.bao.cn/',
                ws: true,
                changeOrigin: true,
                // pathRewrite
            }
        }
    }
}
