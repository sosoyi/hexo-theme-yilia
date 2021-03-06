// 样式
import '../css/main.scss'
// fix hexo 不支持的配置
import Fix from './fix'
// 图片查看器
import Viewer from './viewer'
// 分享
import Share from './share'
// 浏览器判断
import Browser from './browser'
// 手机
import Mobile from './mobile'
// 异步脚本
import { loadScript } from './util'

window.onload = () => {
	if(Browser.versions.mobile && window.screen.width < 800){
		Mobile.init()
	}else{
		loadScript('/slider.js?v=4.0.1.js')
	}
	Fix.init()
	Share.init()
	Viewer.init()
}

