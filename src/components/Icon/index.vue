<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengquetishi",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconabout",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongitee",
  qq: "iconQQ",
  arrowUp: "iconarrow-up-circle",
  arrowDown: "icondirection-down-circle",
  empty: "iconempty",
  chat: "iconinteractive",
};
export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass() {
      return classMap[this.type];
    },
  },
};//
</script>
 
<style scoped>
@import "//at.alicdn.com/t/font_3255034_y4dr3f7cmc.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
