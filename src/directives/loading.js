import loadingUrl from '@/assets/loading.gif'
import styles from './loading.module.less'

/**
 *
 * @param {*} el
 * @returns
 * {
 * 指令配置对象
 *  bind(){*
 * //只调用一次，指令第一次绑定到元素时调用，可进行一次性初始化设置
 *  },
 *  inserted(){*
 *  //被绑定元素插入父节点时调用
 *  },
 *  update(){
 *  //所在组件的虚拟dom数据节点更新是调用
 *  }
 * }
 */

// 得到el中loading效果的img元素
function getLoadingImage(el) {
	return el.querySelector('img[data-role=loading]')
}

function createLoadingImg() {
	const img = document.createElement('img')
	img.dataset.role = 'loading'
	img.src = loadingUrl
	img.className = styles.loading
	return img
}
// 导出指令的配置对象，方法会同时放入到bind和update中
export default function(el, binding) {
	const curImg = getLoadingImage(el)
	if (binding.value) {
		if (!curImg) {
			const img = createLoadingImg()
			el.appendChild(img)
		}
	} else {
		if (curImg) {
			curImg.remove()
		}
	}
}
