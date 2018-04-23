<template>
    <div>
        <form @submit.prevent="signUp">
            <div class="row">
                <label>用户名</label>
                <input class="input-inner" type="text" v-model="formData.username" required>
            </div>
            <div class="row">
                <label>密码</label>
                <input class="input-inner" type="text" v-model="formData.password" required>
            </div>
            <div class="actions">
                <button class="button-p" type="submit" value="提交">提交</button>
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
        name:'SignUpForm',
        data(){
            return{
                formData:{
                    username: '',
                    password: ''
                },
                errorMessage:''
            }
        },
        created(){

        },
        methods:{
            signUp() {
              let {username, password} = this.formData
              var user = new AV.User();
              user.setUsername(username);
              user.setPassword(password);
              user.singUp().then(() =>{
                  this.$emit('success', getAVUser())
              },(error)=> {
                  this.errorMessage = getErrorMessage(error)
              }  
              );
            }
        }
    }
</script>

<style lang="scss">
    .input-inner{
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        margin: 10px 0;
        &:hover{
            border-color: #c0c4cc;
        }
        &:focus {
            outline: none;
            border-color: #409eff;
        }
    }
    .button-p {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 10px 18px;
        font-size: 14px;
        border-radius: 4px;
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
        &:hover{
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
   }
   .actions {
        text-align: center;
   }
</style>