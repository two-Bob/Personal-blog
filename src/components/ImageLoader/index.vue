<template>
  <div class="image-Loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="" />
    <img @load="handleLoad" :src="src" alt="" :style="{opacity:originOpacity,transition:`${duration}ms`}" />
  </div> 
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false,//原图加载状态
      everythingDone: false,
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
        this.originLoaded = true;
        setTimeout(() => {
            this.everythingDone=true;
            this.$emit("load");
        },this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-Loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
}
.placeholder {
  filter: blur(1vw);
}
</style>