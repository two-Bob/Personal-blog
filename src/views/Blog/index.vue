<template>
	<MapList :list="list" @select="handleSelect" />
</template>

<script>
import MapList from './components/MapList'
export default {
	data() {
		return {
			list: [
				{ name: 'a', isSelect: false },
				{
					name: 'b',
					isSelect: false,
					children: [
						{
							name: 'c',
							isSelect: false,
							children: [
								{ name: 'c', isSelect: false },
								{ name: 'd', isSelect: false },
								{ name: 'e', isSelect: false },
							],
						},
						{ name: 'd', isSelect: false },
						{ name: 'e', isSelect: false },
					],
				},
				{ name: 'c', isSelect: false },
				{ name: 'd', isSelect: false },
				{ name: 'e', isSelect: false },
			],
		}
	},
	methods: {
		handleSelect(res) {
			res.isSelect = !res.isSelect
		},
	},
	components: {
		MapList,
	},
}
</script>

<style></style>
