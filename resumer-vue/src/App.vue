<template>
   <div class="page" v-bind:class="{previewMode: previewMode}">
        <Topbar class="topbar" v-on:preview="preview"/>
      <main>
        <ResumeEditor class="resumeEditor"/>
        <Preview class="preview"/>
      </main>

      <button id="exitPreview" class="button" v-on:click="exitPreview">退出预览</button>

      </div>
 </template>
 
 <script>
  import './assets/reset.css'
  import 'normalize.css/normalize.css'
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import Preview from './components/Preview'
  import icons from './assets/icons'
  import store from './store/index'
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'


  export default {
    name: 'app',
    store,
    components: {Topbar, ResumeEditor, Preview},
    data() {
      return {
      previewMode: false,
      }
    },
    created(){
      document.body.insertAdjacentHTML('afterbegin', icons)
      let state =localStorage.getItem('state')
      if (state){
          state = JSON.parse(state)
      }
      this.$store.commit('setUser',getAVUser())
    },  //预览同步
    methods:{
      exitPreview(){
        this.previewMode = false
      },
      preview(){
        this.previewMode = true
      }

    }
  }
 </script>
 
 <style lang="scss">  //作用域
   svg.icon{
     height: 1em;
     width: 1em;
     fill: currentColor;
     vertical-align: -0.1em;
     font-size: 16px;
   }
   .page{
     height: 100vh;
     display: flex;
     flex-direction: column;
     background: #EAEBEC;
    >main{
       flex-grow:1;
    }
    >main{
     min-width: 1024px;
     max-width: 1440px;
     margin-top: 16px;
     margin-bottom: 16px;
     display: flex;
     justify-content: space-between;
     padding: 0 16px;
     width: 100%;
     align-content: center;
    }
  }

   #resumeEditor{
     width: 35%;
     background: #444;
   }

   #preview{
     width: 61.66667%;
     flex-grow:1;
     margin-left: 16px;
     background: #777;
   }
    .previewMode > #topbar{
     display: none;
   }
   .previewMode > main > #resumeEditor{
     display:none;
   }
   .previewMode #preview{
     max-width: 800px;
     margin: 32px auto;
   }
   #exitPreview{
     display: none;
   }
   .previewMode #exitPreview{
     display: inline-block;
     position: fixed;
     right: 16px;
     bottom: 16px;
   }
   
  
   .button{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        border-color: #dcdfe6;
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin-right: 10px;
        transition: .1s;
        font-weight: 500;
        padding: 12px 20px;
        font-size: 15px;
        border-radius: 4px;
        &:hover{
             color: #409eff;
             border-color: #c6e2ff;
             background-color: #ecf5ff;
        }
   }
 </style>