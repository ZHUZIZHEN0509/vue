<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(item , indexTB) in paramInfo.sizes" :key="indexTB">
      <tr v-for="(tr , indexTR) in item" :key="indexTR">
        <td v-for="(td , indexTD) in tr" :key="indexTD">{{td}}</td>
      </tr>
    </table>
    <table class="param-info2">
      <tr v-for="(trOne , indexTRO) in paramInfo.infos" :key="indexTRO">
        <td>{{trOne.key}}</td>
        <td>{{trOne.value}}</td>
      </tr>
    </table>
    <div v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      paramInfo:{
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .param-info{
    font-size: 14px;
    padding: 15px 15px;
    text-align: center;
  }
  tr{
    border: 1px solid #ff5777;
    height: 42px;
  }
  td{
    border: 1px solid #ff5777;
  }
  .param-info2{
    margin-top: 15px;
  }
  div img{
    width: 100%;
  }

</style>
