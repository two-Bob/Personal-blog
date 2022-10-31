import Vue from "vue";
//获取某个组件渲染的dom根元素
export default function getComponentRootDom(comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}