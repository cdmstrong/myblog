/*
 * @Descripttion: 
 * @version: 请写项目版本
 * @Author: @cdm
 * @Date: 2022-02-25 13:43:01
 * @LastEditors: @cdm
 * @LastEditTime: 2022-02-25 17:05:41
 * No pains no gains
 */
/**
 * 扩展 VuePress 应用
 */
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
import '../.vuepress/public/iconfont/say-my-life/iconfont.css'
import '../.vuepress/public/iconfont/shn-ui/iconfont.css'

import vueWaterfallEasy from 'vue-waterfall-easy'
import ElementUI from 'element-ui';
import VueTouchBox from 'vue-touch-box';
import '../.vuepress/public/css/element-variables.scss'
import VueParticles from 'vue-particles'
import VueCookies from 'vue-cookies'
import axios from 'axios'

import Mixins from './utils/mixins';
import store from './store'
const SOURCESRC = "http://cdn.fnkc.xyz/"
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
    // ...做一些其他的应用级别的优化
    Vue.use(VueHighlightJS)
    Vue.use(ElementUI)

    Vue.use(VueTouchBox)
    Vue.use(VueParticles)
    Vue.use(VueCookies)
    Vue.mixin(Mixins);


    Vue.component('vue-waterfall-easy', vueWaterfallEasy)

    Vue.prototype.$store = store
    Vue.prototype.$http = axios
    Vue.prototype.$Source = SOURCESRC
}