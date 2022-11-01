// 入口文件
import Vue from 'vue'
import App from './App.vue'
// import Test from "./components/Layout/test.vue";
import './styles/global.less'
import router from './router'
import showMessage from './utils/showMessage'
Vue.prototype.$showMessage = showMessage //创建到vue原型中
import './mock'
import '@/assets/css/iconfont/iconfont.css'
import './api/banner'
import vLoading from '@/directives/loading'
Vue.directive('loading', vLoading)

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')

import { getBlogTypes, getBlogs } from './api/blog'
Promise.all([getBlogTypes, getBlogs(2, 20, 3)]).then(([a, b]) => {
	console.log(a, b)
})
