<template>
	<div class="BlogCategory-layout" v-loading="isLoading">
		<h2>文章分类</h2>
		<MapList :list="list" @select="handleSelect"></MapList>
	</div>
</template>

<script>
import MapList from './MapList.vue'
import fetchData from '@/mixins/fetchData'
import { getBlogCategories } from '@/api/blog'
export default {
	name: 'BlogCategory',
	props: {},
	mixins: [fetchData([])],
	components: {
		MapList,
	},
	data() {
		return {}
	},
	methods: {
		handleSelect(res) {
			const query = {
				page: 1,
				limit: this.limit,
			}
			// $router控制代码跳转区别于$route
			if (res.id === -1) {
				// 没有分类
				this.$router.push({
					name: 'Blog',
					query,
				})
			} else {
				// 有分类
				this.$router.push({
					name: 'CategoryBlog',
					params: {
						categoryId: res.id,
					},
					query,
				})
			}
		},
		async fetchData() {
			return await getBlogCategories()
		},
	},
	mounted() {},
	computed: {
		categoryId() {
			return +this.$route.params.categoryId || -1
		},
		limit() {
			return +this.$route.query.limit || 10
		},
		list() {
			const totalArticleCount = this.data.reduce((a, b) => {
				return a + b.articleCount
			}, 0)

			let result = [
				{ name: '全部', id: -1, articleCount: totalArticleCount },
				...this.data,
			]
			return result.map((it) => ({
				...it,
				aside: `${it.articleCount}篇`,
				isSelect: it.id === this.categoryId,
			}))
		},
	},
	watch: {},
	filters: {},
}
</script>
<style lang="less" scoped>
.BlogCategory-layout {
	width: 300px;
	height: 100%;
	box-sizing: border-box;
	padding: 20px;
	overflow: auto;
	position: relative;
}
</style>
