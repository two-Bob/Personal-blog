<template>
  <div class="site-aside-container">
    <Avatar url="https://img1.baidu.com/it/u=3624909041,2918634060&fm=253&fmt=auto&app=138&f=JPEG?w=520&h=500" />
    <h1 class="title">twoBob</h1>
    <Menu />
    <Contact />
    <p class="footer">
    <Clock />
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import Clock from "./Clock"
export default {
  components: {
    Avatar,
    Menu,
    Contact,
    Clock,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0 0 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 8px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
