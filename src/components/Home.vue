<template>
    <div>
      <Mheader :back="true">首页</Mheader>
      <div class="content">
        <Swiper></Swiper>
      </div>

    </div>
</template>

<script>
  //1.引入组件2.注册组件3.使用组件
  import Mheader from '../base/Mheader'
  import Swiper from '../base/Swiper'
  import {getSliders} from '../api/index'
     export default {
    async created(){
      let res = await getSliders();
      console.log(res)
    },
          name: "home",
       components:{
            Mheader,Swiper
          },



     }
</script>

<style scoped>

</style>
