import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter); // 使用一个vue插件

const router = new VueRouter({
    // 配置
    routes, // 路由匹配规则
    mode: "history", //hash不会刷新页面，history会刷新页面,abstract非浏览器环境
});
export default router;