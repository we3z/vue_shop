module.exports = {
  devServer: {
    // 自动打开浏览器
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        // 设置你调用的接口域名和端口
        target: 'http://localhost:4000/api/private/v1',
        // 正式服务器 target: 'http://vueapi.lovezz.fun/api/private/v1',
        // 允许跨域
        changeOrigin: true,
        pathRewrite: {
          // '/'这里理解成用""代替target里面的地址，后面组件中我们掉接口时直接用“”代替掉。比如我要调用'http://192.168.1.88:8080/healthy/adimgs'，直接写‘/healthy/adimgs’即可
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: false
}
