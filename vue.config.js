module.exports = {
  devServer: {
    /**
     * 127.0.0.1 / localhost : 192.168.11.x hotreload 가 안되는 경우가 발생한다. */
    host: '0.0.0.0',
    disableHostCheck: true
  },
  // baseUrl: '/dynamic-network',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  configureWebpack: {
    performance: { hints: false }
  }
};
