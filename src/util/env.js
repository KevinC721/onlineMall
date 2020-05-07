// 基于CORS跨域和JSONP跨域的环境配置
// 在package.json文件中使用--mode来传递环境参数
// 代理跨域不需要

let baseURL;
switch (process.env.NODE_ENV) {
  case "devlopment":
    baseURL = "http://dev-mall-pre.springboot.cn/api";
    break;
  case "test":
    baseURL = "http://test-mall-pre.springboot.cn/api";
    break;
  case "prod":
    baseURL = "http://mall-pre.springboot.cn/api";
    break;
  default: 
    baseURL = "http://mall-pre.springboot.cn/api";
    break;
}

export default {
  baseURL,
};
