<template>
    <div class="header">
      <i class="iconfont icon-fanhui" v-if="back" @click="goback"></i>
      <slot></slot>

    </div>
</template>

<script>
  export default {
    //13611176760    wurg0104..
    props:{
      back:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
        console.log(this)
      }
          }
  }

</script>

<style scoped>
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #afd9ee;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
  }
  i{
    position: absolute;
    left: 10px;
    font-size: 20px;
  }

</style>
