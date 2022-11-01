<template>
	<i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
	home: 'iconzhuye',
	success: 'iconzhengquetishi',
	error: 'iconcuowu',
	close: 'iconguanbi',
	warn: 'iconjinggao',
	info: 'iconxinxi',
	blog: 'iconblog',
	code: 'iconcode',
	about: 'iconabout',
	weixin: 'iconweixin',
	mail: 'iconemail',
	gitee: 'icongitee',
	qq: 'iconQQ',
	arrowUp: 'iconarrow-up-circle',
	arrowDown: 'icondirection-down-circle',
	empty: 'iconempty',
	chat: 'iconinteractive',
	github: 'icongithub',
}
export const types = Object.keys(classMap)
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
			return classMap[this.type]
		},
	},
} //
</script>

<style scoped>
.iconfont {
	color: inherit;
	font-size: inherit;
}
</style>
