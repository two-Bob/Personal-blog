<template>
	<Layout v-loading="isLoading">
		<BlogList :list="list" @select="handleSelect" />
		<template #right>
			<BlogCategory></BlogCategory>
		</template>
	</Layout>
</template>

<script>
import BlogList from './components/BlogList'
import Layout from '@/components/Layout'
import BlogCategory from './components/BlogCategory'

export default {
	data() {
		return {
			list: [],
		}
	},
	methods: {
		handleSelect(res) {
			res.isSelect = !res.isSelect
		},
	},
	components: {
		BlogList,
		Layout,
		BlogCategory,
	},
}
</script>

<style></style>
