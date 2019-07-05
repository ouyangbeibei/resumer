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
        title:'前端工程师',
        birthday:'1989/11/01'
      },
      workHistory: [
        {
          company:'武汉米色电商',
          content:`1、熟悉JavaScript、HTML/HTML5、CSS/CSS3、Ajax等前端开发语言。
2、熟练使用vscode、WebStorm、git命令工具，Photoshop。
3、熟悉运用Bootstrap、jQuery、Vue等主流前端框架。
4、可以使用REM，vw/vh，媒体查询等技术制作移动端自适应的网页。
5、了解node.js后端或服务器语言。
6、掌握Scss, less的使用，理解MVC, MVVM思想，掌握HTTP基础。
7、阅读和分析过部分框架源码（jQuery） 。`
        }
      ],
      education: [
        {
          school:'江苏开放大学',
          content:'大专'
        }
      ],
      projects: [
        {
          name:'在线简历编辑器-Vue',
          content: `开发技术：webStorm+HTML + CSS/CSS3 +vue.js + vuxe + webpack + LeanCloud
项目描述：在线简历编辑器可以登录，选项编辑内容，预览。
项目技术：1、用户模块2、简历编辑模块
3、简历预览模块
4、简历保持模块
5、运用谷歌浏览器调试工具进行调试。
          github代码：https://github.com/ouyangbeibei/resumer
            pc端：https://ouyangbeibei.github.io/resumer/dist/`
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

