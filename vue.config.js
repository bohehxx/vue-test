const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
    const svgRule = config.module.rule('svg') // 找到svg-loader

    svgRule.uses.clear() // 清除已有的loader，不这样做会添加到此loader之后，svg-sprite-loader不会生效
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
