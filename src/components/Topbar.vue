<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>

      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好，{{user.username}}</span>
          <el-button v-model="signInDialogVisible" @click.prevent="signOut" type="primary">登出</el-button>
        </div>
        <el-button :plain="true"  v-on:click="preview" id="preview">预览</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignInForm from './SignInForm'
import AV from '../lib/leancloud'
export default {
  name: 'Topbar',
  data(){
    return {
      signUpDialogVisible: false,
      signInDialogVisible: false,
    }
  },
  computed: {
    user(){
      return this.$store.state.user
    },
    logined(){
      return this.user.id
    }
  },
  components: {
    MyDialog,SignInForm
  },
  methods: {
    signOut(){
      AV.User.logOut()
      this.$store.commit('removerUser')
      document.location.reload(true);
      this.signInDialogVisible = true
    },
    preview(){
      this.$emit('preview')
    }
  }
}
</script>


<style scoped lang="scss">
  #topbar{
    background: white;
    box-shadow:0  1px 3px 0 rgba(0,0,0,0.25);
    >.wrapper{
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      height: 64px;
      
    }  
    >.wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 6px;
    }
    .logo{
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
      font-size: 24px;
      color: #000;
      display: inline-block;
      padding: 0 20px 0 10px ;
      line-height: 2;
    }
    .logo:hover{
      animation: 3s rainbow infinite;;
    }
  }
  .actions{
    display: flex;
    .userActions{
      margin-right: 3em;
      .welcome{
        margin-right: .5em;
      }
    }
  }
  @keyframes rainbow {
  0% {  font-size: 32px;}
  50% { transform:rotate( 180deg); color: gold;font-size: 32px;}
  100%  {transform:rotate( -180deg); color: gold;font-size: 32px;}
  }
</style>