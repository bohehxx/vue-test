// 自定义指令自动批量注册

export default {
  install: function(Vue) {
    // 扫描当前目录所有.js文件，排除自己
    const directiveContext = require.context('./', true, /\.js$/)
    // console.log(directiveContext,'directiveContext')
    // console.log(directiveContext.keys(),'keys')
    // console.log(directiveContext.id,'id')
    // console.log(directiveContext.resolve(directiveContext.keys()[0]),'resolve')
    // 遍历每个指令
    directiveContext.keys().forEach(directive => {
      // console.log(directive,'directive')
      // 排除自己
      if (directive === './index.js') return false
      // 获取函数
      const directiveIns = directiveContext(directive)
      // 兼容2种规范
      const ins = directiveIns.default || directiveIns
      // 自动根据路径生成驼峰名称
      const name = directive.replace(/^.\//, '')
      const nameArr = name.replace(/\.js$/, '').split('/')
      let directiveName = ''
      for (var i = 0; i < nameArr.length; i++) {
        let thisFrag = nameArr[i]
        if (i > 0) {
          thisFrag = thisFrag.slice(0, 1).toUpperCase() + thisFrag.slice(1)
        }
        directiveName += thisFrag
      }
      // 注册到全局
      Vue.directive(directiveName, ins)
    })
 
  }
}


// require.context接受3个参数
// 1.directory{String} 读取文件的路径
// 2.useSubdirectories{Boolean}是否遍历文件的子目录
// 3.regExp{RegExp}匹配文件的正则
// require.context返回的是一个函数，并且这个函数有3个属性
// resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
// keys {Function} -返回匹配成功模块的名字组成的数组
// id {String} -执行环境的id,返回的是一个字符串,主要用在module.hot.accept,应该是热加载?
// const modulesFiles = require.context('../pages',true,/.vue$/)
// const routes =[]
// modulesFiles.keys().forEach(modulePath=>{
//   const routeConfig = modulesFiles(modulePath) || modulesFiles(modulePath).default
//   const routerPath = modulePath.replace(/^\.\//,'').replace(/\.vue$/,'')
//   if(routerPath!=='index/index'){
//     routes.push({
//       path:'/'+routerPath,
//       name:routeConfig.name || '缺省名称',
//       components:()=>import(`../pages/${routerPath}`)

//     })
//   }
// })
// console.log(routes,'routes')
// const router = createRouter({
//   history:createWebHistory,
//   routes:[
//     ...routes
//   ]
// })