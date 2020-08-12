module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    runtimeCompiler: false,
    productionSourceMap: true,
    configureWebpack: config => {
        config.devtool = 'source-map'
    }
}
