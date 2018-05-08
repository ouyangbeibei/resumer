<template>
  <div class="dialogWrapper">
    <div class="dialog">
      <header>
        <img src="https://upload-images.jianshu.io/upload_images/8048507-aac4fa748a03cb04.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="v-icon">
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
      close(){
        this.$emit('close')
      }
    }
  }
</script>


<style scoped lang="scss">
  .dialogWrapper{
    position: fixed;
    background: url(https://upload-images.jianshu.io/upload_images/8048507-c012e82fdab38375.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240);
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .dialog{
    background:  transparent;
    height: 24em;
    width: 32em;
    border-radius: 10px;
    background-color:rgba(225,225,225,.5);
    > header{
      margin-top: 25px;
      text-align: center;
      > img{
      width: 64px;
      height: 64px;
      transition: all 1.5s;
      -webkit-transition: all 1.5s;
      -moz-transition: all 1.5s;
      -ms-transition: all 1.5s;
      -o-transition: all 1.5s;
      }
      > img:hover{
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
      }
    }
    >main{
      margin-top: 15px;
      padding: 32px;
    }
  }
</style>