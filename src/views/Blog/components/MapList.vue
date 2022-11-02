<template>
	<ul class="maplist-container">
		<li
			v-for="(item, index) in list"
			class="block"
			:class="{ active: item.isSelect }"
			:key="index"
		>
			<span @click="handleClick(item)">{{ item.name }}</span>
			<span v-if="item.aside" @click="handleClick(item)" class="aside">{{
				item.aside
			}}</span>
			<MapList
				v-if="item.children"
				:list="item.children"
				@select="handleClick(item)"
			></MapList>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'MapList',
	props: {
		// [{name:'显示的内容',isSelect:true,children:[{name:'',isSelect:false}]]  树形结构
		list: {
			type: Array,
			default: () => [],
		},
	},
	components: {},
	data() {
		return {}
	},
	methods: {
		handleClick(res) {
			this.$emit('select', res)
		},
	},
	mounted() {},
	computed: {},
	watch: {},
	filters: {},
}
</script>
<style lang="less" scoped>
@import '~@/styles/var.less';
.maplist-container {
	list-style: none;
	padding: 0;
	.block {
		cursor: pointer;
	}
	.maplist-container {
		margin-left: 1em;
	}
	li {
		min-height: 40px;
		line-height: 40px;
		.aside {
			margin-left: 10px;
		}
		&.active {
			color: @warn;
			font-weight: bold;
		}
	}
}
</style>
