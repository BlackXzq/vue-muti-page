

/**
 * PUBLIC_PATH：项目部署基础路径
 * 默认情况下，我们假设你的应用将被部署在域的根目录下,例如：https://XXX.com/   PUBLIC_PATH="/"
 * 如果您的应用程序部署在子路径中，则需要在这指定子路径,例如：https://XXX.com/app   PUBLIC_PATH="/app/"
 */
const PUBLIC_PATH = "/";

module.exports = {
    publicPath: PUBLIC_PATH,
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
    outputDir: 'dist',
    // 如果你不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: false,
    // assetsDir: 'assets',
    // indexPath: 'index.html',
    filenameHashing:true,
    pages: {
        index: {
            entry: "./src/pages/index/index.js", // 配置入口js文件
            template: "./src/pages/index/index.html", // 主页面
            filename: "index.html", // 打包后的html文件名称
            title: "首页", // 打包后的.html中<title>标签的文本内容
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        good: {
            entry: "./src/pages/good/good.js", // 配置入口js文件
            template: "./src/pages/good/good.html", // 主页面
            filename: "good.html", // 打包后的html文件名称
            title: "首页", // 打包后的.html中<title>标签的文本内容
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'good']
        }
    },
   
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            less: {
                // modifyVars: {
                //     // 可以通过 less 文件覆盖（文件路径为绝对路径）
                //     hack: `true; @import "${resolve("src/theme/index.less")}";`
                // },
                javascriptEnabled: true
            }
        }
        // 启用 CSS modules for all css / pre-processor files. 代替 modules
        // modules: false
    },
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    devServer: {
        port: 8888, // 端口号
        host: "0.0.0.0",
        open: false // 配置自动启动浏览器
        // proxy: {
        // '/api': {
        //   target: "https://tknt.tkw100.com/",
        //   changeOrigin: true,
        //   ws: true,
        //   pathRewrite: {
        //     '^/api': '',
        //   },
        // },
        // }
    }
}