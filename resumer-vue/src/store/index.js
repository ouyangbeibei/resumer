import Vuex from 'vuex'
import Vue from 'vue' // 在多个文件 import vue，虽然在 main.js 中已经引入了 Vue 和 Vuex，但是这里还得再引入一次 
import objectPath from "object-path"
Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了， store 通俗的理解为一个全局变量的仓库。

export default new Vuex.Store({
  state: {    // 定义状态
    selected: 'profile',
    user: {
      id:'',
      id: '',
      username: ''
    },
    resume: {
      config:[
        { field: 'profile', icon: 'id'},
        { field: 'workHistory', icon: 'work'},
        { field: 'education', icon: 'book'},
        { field: 'projects', icon: 'heart'},
        { field: 'awards', icon: 'cup'},
        { field: 'contacts', icon: 'phone'}
      ],//图标
      profile: {
        name: '陈咪咪',
        city: '上海',
        title:'前端',
        birthday:'1989/11/01'
      },
      'workHistory': [
        {
          company:'xx科技有限公司',
          content:`专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
              我的主要工作如下:
              完成既定产品需求。
               修复 bug。`
        }
      ],
      education: [
        {
          school:'江苏xx大学',
          content:'专科'
        }
      ],
      projects: [
        {
          name:'仿网易云网站',
          content:'vue'
        }
      ],
      awards: [
        {
          name: '获奖名称',
          content:'获奖情况'}
      ],
      contacts: [
        {contact:'phone',content: '13661959616'},
        {contact: '邮箱', content: 'cmimi125@qq.com'}
      ],
    }//表单
},
  mutations: {
    initState(state, payload){
     Object.assign(state, payload) 
    },                        //数据保存到 localStorage,预览同步
    switchTab(state, payload){
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))  //预览同步
    },                       //使用 setter 让数据可写
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state)) //预览同步
    },                        //使所有字段都可以编辑
    setUser(state, payload){
      Object.assign(state.user, payload)
      console.log(state.user)
    },
    removeUser(state){
      state.user.id = ''
    }
  }
})
 