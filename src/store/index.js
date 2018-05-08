import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    resume: {
      config: [
        {field:'profile', icon: 'id'},
        {field:'workHistory', icon: 'work'},
        {field:'education', icon: 'book'},
        {field:'projects', icon: 'heart'},
        {field:'awards', icon: 'cup'},
        {field:'contacts', icon: 'phone'},
      ],
      profile: {
        name: '陈咪咪',
        city: '上海',
        title:'前端',
        birthday:'1989/11/01'
      },
      workHistory: [
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
          name:'在线简历编辑器',
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
    switchTab(state, payload) {
      state.selected  = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    initState(state, payload){
      Object.assign(state, payload)
    },
    setUser(state, payload) {
      Object.assign(state.user, payload)
      console.log(state.user)
    },
    removerUser(state){
      state.user.id = ''
    }
  
  }
})