<template>
  <div>

     <!-- <MyDialog  v-if="!logined" v-show="signInDialogVisible">
      <SignInForm @success="signIn($event)" />
    </MyDialog>  -->
    
  
    <div class=page v-bind:class="{previewNode: previewNode}">
      <header>
        <Topbar class="topbar" v-on:preview="preview"/>
      </header>
      <main>
        <ResumeEditor class="resumeEditor"/>
        <ResumePreview class="preview"/>
      </main>
      <el-button id="exit" type="primary" size="large" @click="exPview">登录/注册</el-button>
      <el-button id="exit" type="primary" size="large" @click="exPview">退出预览</el-button>
    </div>
  </div>
</template>

<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.scss'
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'
  import icons from './assets/icons'
  import store from './store/index'
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'
  import MyDialog from './components/MyDialog'
  import SignInForm from './components/SignInForm'
  export default {
    name: 'app',
    store,
    components: { Topbar, ResumeEditor, ResumePreview,MyDialog, SignInForm},
    created() {
      document.body.insertAdjacentHTML('afterbegin', icons) //
      let state = localStorage.getItem('state')
      if(state){
        state = JSON.parse(state) 
      }
      this.$store.commit('initState', state)
      this.$store.commit('setUser', getAVUser())
    },
    computed: {
      user(){
        return this.$store.state.user
      },
      logined(){
        return this.user.id
      }
    },    
    methods:{
      preview(){
        this.previewNode= true
      },
      exPview(){
        this.previewNode= false
      },
      signIn(user){
        this.signInDialogVisible = false
        this.$store.commit('setUser', user)
      },      
    },
    data(){
      return{
        previewNode: false,
        signInDialogVisible: true,
      }
    }
  }
</script>


<style>
  .previewNode #topbar{
      display: none;
  }
  .previewNode > main > #ResumeEditor {
      display: none;
    }
  .previewNode #exit {
      display: block;
    }
  .previewNode #ResumePreview{
     max-width: 800px;
     margin: 32px auto;
   }
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to top, #abbaab, #ffffff);
  }
  .page>main{
    flex-grow: 1;
  }
  .page>main{
    min-width: 1024px;
    max-width: 1440px;
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    align-self: center;
  }
  #ResumeEditor{
    min-width: 35%;
    background: rgb(133, 144, 247);
  }
  #ResumePreview{
    flex-grow: 1;
    margin-left: 16px;
    background: #777;
  }
  #exit{
    display: none;
    position: fixed;
    right: 48px;
    bottom: 32px;
  }

</style>
