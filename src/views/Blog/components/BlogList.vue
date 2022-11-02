<template>
	<div class="BlogList-layout">
		<ul>
			<li v-for="item in data.rows" :key="item.id">
				<div class="thumb" v-if="item.thumb">
					<a href="">
						<img
							:src="item.thumb"
							:alt="item.title"
							:title="item.title"
						/>
					</a>
				</div>
				<div class="main">
					<a href="">
						<h2>{{ item.title }}</h2>
					</a>
					<div class="aside">
						<span>日期:{{ formatDate(item.createDate) }}</span>
						<span>浏览：{{ item.scanNumber }}</span>
						<span>评论：{{ item.commentNumber }}</span>
						<a href="/article/cate/8">{{ item.category.name }}</a>
					</div>
					<div class="desc">{{ item.description }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { getBlogs } from '@/api/blog'
import fetchData from '@/mixins/fetchData'
import { formatDate } from '@/utils'
export default {
	name: 'BlogList',
	mixins: [fetchData({})],
	props: {},
	components: {},
	data() {
		return {}
	},
	methods: {
		formatDate,
		async fetchData() {
			return await getBlogs()
		},
	},
	mounted() {},
	computed: {},
	watch: {},
	filters: {},
}
</script>
<style lang="less" scoped>
.BlogList-layout {
	height: 100%;
	overflow: auto;
}
</style>
