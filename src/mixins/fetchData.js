// 公共的远程获取数据的代码
// 具体组件中需要提供一个远程获取数据的方法
export default function(defaultDataValue=null){
    return{
       data() {
		return {
			isLoading: true,
			data: defaultDataValue,
		}
	},
	async created() {
		this.data = await this.fetchData()
		this.isLoading = false
	}, 
    }
	
}
