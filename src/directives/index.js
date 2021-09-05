// 自定义指令自动批量注册

export default {
    install: function(Vue){
        // 扫描当前目录所有.js文件，排除自己
        const directiveContext = require.context('./', true, /\.js$/)
        // 遍历每个指令
        directiveContext.keys().forEach(directive => {
            // 排除自己
            if(directive === './index.js') return false
            // 获取函数
            const directiveIns = directiveContext(directive)
            // 兼容2种规范
            const ins = directiveIns.default || directiveIns
            // 自动根据路径生成驼峰名称
            let name = directive.replace(/^.\//, '')
            let nameArr = name.replace(/\.js$/, '').split('/')
            let directiveName = ''
            for(var i=0; i<nameArr.length; i++){
                let thisFrag = nameArr[i]
                if(i > 0){
                    thisFrag = thisFrag.slice(0, 1).toUpperCase() + thisFrag.slice(1)
                }
                directiveName += thisFrag
            }
            // 注册到全局
            Vue.directive(directiveName, ins)
        })
    }
}
