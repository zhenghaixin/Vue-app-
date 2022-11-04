<template>
  <div id="app">
    <router-view/>
    <Tab></Tab>

  </div>
</template>

<script>
  import Tab from './base/Tab'
export default {
  name: 'App',
  beforeCreate(){
    console.log(1)
  },
  created(){
console.log(2)
  },
  beforeMount(){
    console.log(2)
  },
  components:{
    Tab
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  input,button{
    -webkit-appearance: none;
  }
  .content{
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }
</style>
