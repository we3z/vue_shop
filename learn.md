## 2.Vue的使用

### 2.3 Vue.js

###   1.实例参数分析

​			el： 元素的挂载位置

​			data

## 3. Vue模板语法

### 3.1 模板语法概述

1.如何理解前端渲染

v-pre

v-text

v-html

v-once

### 3.3 双向数据绑定

mvvm m(model) v(view) vm(view-model)

v > vm > m 事件监听 m > vm > v 数据绑定

### 3.4 事件绑定

#### 4.事件修饰符

stop  prevent....

#### 5.按键修饰符

keyup: event, delete 自定义

### 3.5 属性绑定

v-model 底层使用v-bind 和 v-on实现

### 3.6 样式绑定

样式绑定相关语法细节

#### 1.class样式处理

1.对象绑定和数组绑定可以结合使用

2 class绑定的值可以简化操作

3 默认的class会被保留

#### 2. style样式处理

### 3.7 分支循环结构

#### 1.分支结构

v-if, v-else-if,v-else,v-show

#### 2.v-if和v-show的区别

v-if, v-else-if, v-else 控制元素有无 

v-show 控制显示

### 5.Vue常用特征

#### 5.2表单操作

##### 3.表单修饰符

number ，trim，lazy

### 5.3自定义指令

#### 1.自定义指令的语法规则

#### 2.自定义指令的用法

### 5.4 计算属性

函数体，缓存

### 5.5 侦听器

### 5.6 过滤器

#### 1. 格式化数据

### 5.7 生命周期

#### 挂载

beforeCreate， 

#### 更新

#### 销毁

# 组件

## 2.组件注册

### 2.1组件注册

### 2.2组件用法

### 2.3 组件注册注意事项

1. data必须是一个函数

2. 组件模板内容必须是单个根元素

3. 组件模板内容可以是模板字符串

驼峰式命名方式只能在字符串中调用，在普通模板中要采用短横线方式使用

### 2.4 局部组件的注册使用

只能在所注册的父组件中使用

# 前后端交互

## 1. 前后端交互模式

### 1.1 接口调用方式

原生ajax、基于Jquery的ajax、fetch、axios

## 2. Promise用法

### 2.1 异步调用

#### ajax

异步处理的

多次异步调用的依赖分析

多次异步请求的顺序不确定



#### 2.5 then参数中的函数返回值

##### 1. 返回Promise实例对象

##### 2. 返回字符串

#### 2.6 Promise常用的API

##### 1. 实例方法

p.then()

p.catch()

## fetch概述

#### 3.3 fetch请求参数

#### 3.4 fetch响应结果

text(), json()

## axios

### 4.1 axios 的基本特性

### 4.2 axios 的基本用法

### 4.2 axios 的常用API

### 4.3 axios的用法

#### 1. axios的全局配置

#### 2.axios拦截器

## 接口调用-async/await用法

# vue-router

## 2. vue-router的基本使用

1. 引入相关的库文件
2. 添加路由链接
3. 添加路由填充位
4. 定义路由组件
5. 配置路由规则并创建路由实例
6. 把路由挂载到Vue根实例中

#### 路由重定向

### 3.路由嵌套

### 4.vue-router动态路由匹配

#### 路由组件传递参

### 5.vue-router命名路由

给路由规则起个别名

### 6.vue-router编程式导航

this.$router.push('hash地址')

this.$router.go(h)



## 模块化开发

## 1.模块化相关规范

### ES6模块化规范

每一个js文件都是一个独立的模块

导入 import

导出 export

#### ES6 模块化的基本语法

1. 默认导出与默认导入

   每个模块只允许使用一次export默认导出数据

2. 按需导出与按需导入

3. 直接导入并执行模块代码

## Webpack

### 1.webpack 的基本使用

#### 1.初始化项目包

① 新建项目空白目录，并运行 npm init -y 命令，初始化包管理配置文件 package.json

② 新建 src 源代码目录

③ 新建 src -> index.html 首页 

#### 2.在项目中安装和配置webpack

① 运行 npm install webpack webpack-cli -D 命令，安装 webpack 相关的包

② 在项目中，创建名为 webpack.config.js 的webpack 配置文件

③ 在webpack 的配置文件中，初始化如下基本配置:

```js
module.exports = {
    // mode 用来指定构建模式，development 打包不压缩， production 打包压缩
    mode: "development",
}
```

④ 在 package.json 配置文件中的 scripts 节点下，新增 dev 脚本如下：

```json
{
    "scripts": {
        // scripts 节点下的脚本, 可以通过 npm run 执行
        "dev" : "webpack"
    }
}
```

⑤ 在终端中运行 npm run dev 命令，启动  webpack 进行项目打包。

#### 3.配置打包的入口和出口

webpack 的 4.x 版本中默认约定：

- 打包的入口文件为 src -> index.js
- 打包的输出文件为 dist -> main.js

如果需要修改打包的入口与出口，可以在 webpack.config.js 中新增如下的配置信息

```js
// 导入 node.js 中专门操作路径的模块
const path = require("path");
module.exports = {
    // 打包入口文件的路径
    entry: path.join(__dirname, './src/index.js'),
    output: {
        // 打包输出文件的存放路径
        path: path.join(__dirname, 'dist'),
        // 输出文件的名称
        filename: 'bundle.js'
    }
}
```

#### 4.配置webpack的自动打包功能

① 运行 npm install webpack-dev-server -D 命令，安装支持项目自动打包的工具

② 修改 package.json -> scripts 中的 dev 命令如下:

```json
{
    "scripts": {
        // scripts 节点下的脚本, 可以通过 npm run 执行
        "dev": "webpack-dev-server"
    }
}
```

③ 将 src -> index.html 中， script 脚本的引用路径修改为 "/bundle.js"

④ 运行 npm run dev 命令，重新进行打包

⑤ 在浏览器中访问 http://localhost:8080 地址，查看自动打包效果

注意：

- webpack-dev-server 会启动一个时时打包的http服务器，打包后生成的文件放在根目录下

#### 5. 配置html-webpack-plugin生成预览页面

① 运行 npm install html-webpack-plugin -D 命令，安装生成预览页面的插件

② 修改 webpack.config.js 文件头部区域，添加如下配置信息：

```js
// 导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    // 指定要用到的模板文件
    template: "./src/index.html",
    // 指定生成的文件的名称，改文件存在于内存中，在目录中不显示
    filename: "index.html"
})
```

③ 修改webpack.config.js 文件中向外暴露的配置对象，新增如下配置节点：

```json
module.exports = {
    // plugins 数组是 webpack 打包期间会用到的一些插件列表
    plugins: [ htmlPlugin ]
}
```

#### 6. 配置自动打包相关的参数

  修改package.json 中的配置

```json
// --open 打包完成后自动打开浏览器页面 
// --host 访问地址  
// --port 访问端口
{
	"scripts": {
    	"test": "echo \"Error: no test specified\" && exit 1",
    	"dev": "webpack-dev-server --open --host 127.0.0.1 --port 8080"
  	},
}
```

### 3.webpack中的加载器

#### 1.通过loader打包非js模块

##### 1.打包处理css文件

① 运行 npm install style-loader css-loader -D 命令，安装处理css文件的loader

② 在webpack.config.js的moudle -> rules 数组中，添加 loader 规则如下：

```js
// 所有第三方文件模块的匹配规则
module: {
    rules: [
        { test: /\.css$/, use : {'style-loader', 'css-loader'}}
    ]
}

```

其中：test 表示匹配的文件类型，use 表示对应要调用的 loader

注意：

- use 数组中指定的 loader 顺序是固定的
- 多个 loader 的调用顺序是：从后往前调用

##### 2. 打包处理 less 文件

① 运行 npm install less-loader less -D 命令

② 在 webpack.config.js 中的 module -> rules 数组中，添加 loader 规则如下：

```js
// 所有第三方文件模块的匹配规则
module: {
    rules: [
        { test: /\.less$/, use : ['style-loader', 'css-loader', 'less-loader']}
    ]
}
```

##### 3 打包处理 scss 文件

① 运行 npm install sass-loader node- sacc -D 命令

② 在 webpack.config.js 的 module -> rules 数组中，添加loader规则

```js
// 所欲第三方文件模块的匹配规则
module: {
    rules: [
        { test: /\.scss$/. use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
}
```

##### 4. 配置 postCSS 自动添加 css 的兼容前缀

①  运行 npm install postcss-loader autoprefixer -D 命令

②  在项目根目录中创建 postcss 的配置文件 postcss.config.js，并初始化如下配置：

```js
// 导入自动添加前缀的插件
const autoprefixer = require("autoprefixer");
module.exports = {
    // 挂载插件
    plugins: [ autoprefixer ]
}
```

③ 在webpack.config.js 的module -> rules 数组中，修改css 的 loader 规则如下： 

```js
module: {
    rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']}
    ]
}
```

##### 5. 打包样式表中的图片和字体文件

① 运行 npm install url-loader file-loader

② 在 webpack.config.js 的moudle -> rules 数组中，添加 loader 规则如下：

```js
module:{
    rules: [
        {
            test: /\.jpg|png|gif|bpm|ttf|eot|svg|woff|woff2$/,
            use: 'url-loader?limit=16940'
        }
    ]
}
```

##### 6.  打包处理js文件中的高级语法

① 安装babel转换器相关的包：npm install babel-loader @babel/core @babel/runtime -D

② 安装babel语法插件相关的包：npm install @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D

③ 在项目根目录中，创建 babel 配置文件 babel.config.js 并初始化基本配置如下：

```js
module.exports = {
    presets： [ '@babel/preset-env' ],
    plugins: [ '@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
}
```

④ 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```js
// exculde 为排除项，表示babel-loader不需要处理 node_modules 中的js文件
{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
```

### 2 Vue 单文件组件

#### 1.webpack 中配置 vue组件的加载器

① 运行 npm install vue-loader vue-template-compiler -D 命令

② 在 webpack.config.js 配置文件中，添加vue-loader 的配置项如下：

```js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    module: {
        rules: [
            // ... 其他规则
            { test: /\.vue$/, loader: "vue-loader"}
        ]
    },
    plugins: [
        // ...其他插件
        new VueloaderPlugin()
    ]
}
```

#### 2.在 webpack 项目中使用 vue

① 运行 npm i vue -S 安装 vue

② 在 src -> index.js 入口文件中，通过 import Vue from 'vue' 来导入 vue 构造函数

③ 创建 vue 的实例对象，并制定要控制的 el 区域

④ 通过 render 函数渲染 App 根组件

```js
// 1.导入 Vue 构造函数
import Vue from 'vue'
// 2.导入 App 根组件
import App from './components/App.vue'
const vm = new Vue({
    // 3.指定 vm 实例要控制的页面区域
    el: '#app',
    // 4.通过 render 函数，把指定的组件渲染到 el 区域中
    render: h => h(App)
})
```

#### 3. webpack 打包发布

上线之前需要通过webpack将应用整体打包， 可以通过 package.json 文件配置打包命令:

```json
{
    // 在package.json文件中配置 webpack 打包命令
    // 该命令默认加载项目根目录中的 webpack.config.js 配置文件
    "scripts": {
        // 用于打包的命令
        "build": "webpack -p",
        "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8080"
    }
}
```

# Vue 脚手架

## 1. Vue 脚手架的基本用法

### 使用步骤

#### 1. 安装 3.x 版本的 Vue 脚手架：

```
npm install -g @vue/cli
```

#### 2. 基于 3.x 版本的脚手架创建vue项目

```js
// 1. 基于 交互式命令行 的方式，创建 新版 vue 项目
vue create my-project

// 2. 基于 图形化界面 的方式，创建 新版 vue 项目
vue ui

// 3. 基于 2.x 的旧版本，创建 旧版 vue 项目
npm install -g @vue/cli
vue init webpack my-project
```

#### 3. Vue 脚手架的自定义配置

##### 1. 通过 package.json 配置项目

```js
// 必须是符合规范的json语法,如下修改端口为8888，并打开浏览器
"vue" : {
    "devServer": {
        "port": 8888,
        "open": true
    }
}
```

注意：不推荐使用这种配置方式

##### 2. 通过单独的配置文件配置项目

① 在项目的根目录创建文件 vue.config.js

② 在该文件中进行相关配置，从而覆盖默认配置

```js
// vue.config.js
module.exports = {
    devServer: {
        port: 8888,
        open: true
    }
}
```

### 4. Element-UI 的基本使用

##### 1. 基于命令行方式手动安装

① 安装依赖包 npm install element-ui -S

② 导入 Element-UI 相关资源

```js
// 导入组件库
import Element from "element-ui";
// 导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css';
// 配置 Vue 插件
Vue.use(Element)
```



