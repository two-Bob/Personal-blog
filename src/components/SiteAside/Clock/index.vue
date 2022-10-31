<template>
  <h1>{{ current }}</h1>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      current: this.getCurrent(),
    };
  },
  methods: {
    getCurrent() {
      return new Date().toLocaleTimeString();
    },
  },
  beforeCreate() {
    // console.log("实例创建后，注入实例前，无法获得data中的数据");
  },
  created() {
    this.timer = setInterval(() => {
      this.current = this.getCurrent();
    }, 1000);
  },
  beforeMount() {
    // console.log("生成虚拟dom后，生成真实dom前，无法获取dom节点");
  },
  mounted() {
    // console.log("生成真实dom后，可以获取dom节点");
  },
  beforeUpdate() {
    // console.log("数据变动后，重新渲染之前");
  },
  updated() {
    // console.log("重新渲染后");
  },
  beforeDestroy() {
    // console.log("销毁组件前");
  },
  destroyed() {
    // console.log("销毁组件后");
  },
};
</script>

<style>
</style>