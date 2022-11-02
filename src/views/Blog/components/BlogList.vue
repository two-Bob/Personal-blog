<template>
	<div class="BlogList-layout" ref="container" v-loading="isLoading">
		<ul>
			<li v-for="item in data.rows" :key="item.id" class="bloglist">
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
		<Pager
			v-if="data.total"
			:current="routeInfo.page"
			:total="data.total"
			:limit="routeInfo.limit"
			:visibleNumber="10"
			@pageChange="handlePageChange"
		></Pager>
	</div>
</template>

<script>
import Pager from '@/components/Pager'
import { getBlogs } from '@/api/blog'
import fetchData from '@/mixins/fetchData'
import { formatDate } from '@/utils'

export default {
	name: 'BlogList',
	mixins: [fetchData({})],
	props: {},
	components: {
		Pager,
	},
	methods: {
        // 判断获取点击的页数来改变路由
		handlePageChange(newPage) {
            
			const query = {
				page: newPage,
				limit: this.routeInfo.limit,
			}
			// $router控制代码跳转区别于$route
			if (this.routeInfo.categoryId === -1) {
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
						categoryId: this.routeInfo.categoryId,
					},
					query,
				})
			}
		},
		formatDate,
		async fetchData() {
			return await getBlogs()
		},
	},
	mounted() {},
	computed: {
		routeInfo() {
			const categoryId = +this.$route.params.categoryId || -1
			const page = +this.$route.query.page || 1
			const limit = +this.$route.query.limit || 10
			return {
				categoryId,
				page,
				limit,
			}
		},
	},
	watch: {
		async $route(newVal, oldVal) {
			// this.$route监控路由变化来改变页数
			this.isLoading = true
			this.$refs.container.scrollTop = 0
			this.data = await this.fetchData()
			this.isLoading = false
		},
	},
}
</script>
<style lang="less" scoped>
.BlogList-layout {
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	position: relative;
	.bloglist {
		list-style: none;
		border-bottom: 1px solid rgba(92, 90, 90, 0.7);
		display: flex;
		.thumb {
			height: 100%;
			img {
				height: 100%;
				width: auto;
				margin: 10px;
			}
		}
		.main {
			.aside {
				white-space: nowrap;
				span,
				a {
					color: gray;
					margin-right: 10px;
				}
			}
			.desc {
				padding: 10px 0;
			}
		}
	}
}
</style>
