<template>
    <div id="topbar">
        <div class="wrapper">
            <span class="logo"><img src="https://vuejs.org/images/logo.png" class="logo-big">Resumer</span> 
            <div class="actions">
                <!-- userActions -->
               <div v-if="logined" class="userActions">
                  <span class="welcome">你好，{{user.username}}</span>
                  <button href="#" class="button" @click.prevent="signOut">登出</button>
               </div>

                     <button href="#" class="button primary" @click.prevent="signUpDialogVisible = true" >注册</button>
                     <button href="#" class="button" @click.prevent="signInDialogVisible = true" >登录</button>   

               <!-- <button class="primary button">保存</button> -->
               <button class="button" v-on:click="preview">预览</button>
            </div>  
        </div>

         <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
                    <SignUpForm @success="signOut($event)"/>
                  </MyDialog>
          <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
                    <SignInForm @success="signIn($event)"/> 
                                                             <!-- $event访问原生事件对象 -->
                  </MyDialog>
    </div>
</template>

<script>
    import MyDialog from './MyDialog'
    import SignUpForm from './SignUpForm'
    import SignInForm from './SignInForm'
    import AV from '../lib/leancloud'
    import preview from './preview'
    export default {
        name: 'Topbar',
        data(){
            return {
                signUpDialogVisible: false,
                signInDialogVisible: false
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
        components:{
            MyDialog, SignUpForm, SignInForm
        },
        methods:{
            preview(){
                this.$emit('preview')
            },
            signOut(){
                AV.User.logOut()
                this.$store.commit('removeUser')
            },
            signIn(user){
                this.signUpDialogVisible = false
                this.signInDialogVisible = false
                this.$store.commit('setUser', user)
            }
        }
    }
     
</script>

<style scoped lang="scss">  //作用域
    #topbar{
      background: #fff;
      box-shadow:0 1px 3px 0 rgba(0,0,0,.25);
      >.wrapper{
        min-width: 1024px;
        max-width: 1440px;
        margin: 0 auto;
        height: 64px;
    }
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
          padding: 0 16px;
          .logo-big {
            max-height: 40px;
            vertical-align: middle;
                border: 0;
          }
      }
      .logo{
          font-size: 24px;
          color: #000;
      }
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
        &.primary{
            color: #fff;
            background-color: #409eff;
            border-color: #409eff;
              &:hover{
                 background: #66b1ff;
                 border-color: #66b1ff;
                 color: #fff;
              }
        }
    }
        .actions{
            display: flex;
            .login {
                float: right;
                margin-right: 20px;
                font-size: 30px;
                color: #0303039f;
            }
            .userActions{
                .welcome{
                    margin-right: .5em;
                }
        }
    }
    
    
</style>