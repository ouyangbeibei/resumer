<template>
  <div class="wrapper">
      <div class="toggle">
      <input type="radio" name="type" v-model="actionType" value="signUp"><span class="button"></span><span　 class="label">注册</span>
    </div>
    <div class="toggle"> 
      <input type="radio" name="type" v-model="actionType" value="login"><span class="button"></span><span　 class="label">登录</span>       
    </div>  
    <!-- 登录 -->
    <form @submit.prevent="signIn" v-if="actionType=='login'">
      <div class="row">
        <label>用户名</label>
        <input class="input_inner" type="text" value="用户名" required v-model="formData.username">
      </div>
      <div class="row">
        <label class="label-password" >密码</label>
        <input class="input_inner" type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="点击登录">
        <span>{{errorMessage}}</span>
      </div>
    </form>
    <!-- 注册 -->
    <form @submit.prevent="signUp" v-if="actionType=='signUp'">
      <div class="row">
        <label>用户名</label> 
        <input class="input_inner" type="text" v-model="formData.username" required>
      </div>
      <div class="row">
        <label class="label-password">密码</label>
        <input class="input_inner" type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="点击注册">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>  
    </div> 
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'
export default {
  name: 'SignInForm',
  data(){
    return {
      actionType: 'signUp',
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    signIn(){
      let {username, password} = this.formData
      AV.User.logIn(username,password).then(()=> {
        this.$emit('success', getAVUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage(error)
      });
    },
    signUp(){
      let {username, password} = this.formData
      var user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.signUp().then(() =>{
        this.$emit('success', getAVUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage(error)
      });
    }    
  }
}
</script>


<style scoped>
  .wrapper{
    position: relative;
    text-align: center;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .row{
    padding: 10px;
    font-size: 18px;
  }
  .row label{
    margin-right: 10px;
  }
  .row .label-password{
    margin-right: 30px;
  }
  input[type="submit"]{
    height: 40px;
    color: #fff;
    background-color: #096bfd;
    background-image: linear-gradient(-180deg, #63a3fd 0%, #468eff 90%);
    display: inline-block;
    width: 30%;
    text-align: center;
    border-radius: 5px;
  }
  main input[type="submit"]:hover{
    opacity: 0.75;
  }
  .toggle {
    position: absolute;
    display: inline-block;
    bottom: 25px;
  }
  .toggle {
    border-radius: 8px;
    background:  transparent;
    position: relative;
    height: 3rem;
    width: 6rem;
  }
  .toggle .button {
    -webkit-filter: blur(1px);
    -moz-filter: blur(1px);
    filter: blur(1px);
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);  
    position: absolute;
    margin-left: -2rem;
    margin-top: -2rem;
    display: block;
    height: 4rem;
    width: 4rem;
    left: 50%;
    top: 50%;
  }
  .toggle .label {
    transition: color 300ms ease-out;
    line-height: 3.1rem;
    text-align: center;
    position: absolute;
    font-size: 18px;
    display: block;
    opacity: 0.9;
    height: 100%;
    width: 100%;
    color: rgb(95, 92, 92);
  }
  .toggle input {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    z-index: 1;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
  .input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #468eff;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 70%;
  }

  .toggle input:checked ~ .button {
    box-shadow: 0 1px 0 0 rgba(248, 3, 3, 0.7);
  }
  .toggle input:checked ~ .label {
    font-size: 20px;
    color: rgba(248, 16, 16, 0.9);
  }
</style>