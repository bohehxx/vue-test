// 自定义过滤器统一注册入口
// 原则上全部使用与框架无关的纯函数编写，便于移植复用
// 函数内不允许存在异步方法
// 命名按照文件夹-文件名的方式采用驼峰式命名 - 这里自动将./abc/edf.js转为abcEdf作为过滤器名称

export default {
    install: function(Vue){
        // 扫描当前目录所有.js文件，排除自己
        const filtersContext = require.context('./', true, /\.js$/)
        // 遍历每个过滤器
        filtersContext.keys().forEach(filter => {
            // 排除自己
            if(filter === './index.js') return false
            // 获取函数
            const filterIns = filtersContext(filter)
            // 兼容2种规范
            const ins = filterIns.default || filterIns
            // 自动根据路径生成驼峰名称
            let name = filter.replace(/^.\//, '')
            let nameArr = name.replace(/\.js$/, '').split('/')
            let filterName = ''
            for(var i=0; i<nameArr.length; i++){
                let thisFrag = nameArr[i]
                if(i > 0){
                    thisFrag = thisFrag.slice(0, 1).toUpperCase() + thisFrag.slice(1)
                }
                filterName += thisFrag
            }
            // 注册到全局
            Vue.filter(filterName, ins)
        })
    }
}
