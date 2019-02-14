<template>
  <div>
    <my-table :col="tables.col"
              v-loading="loading"
              :data="tables.data">
    </my-table>
  </div>
</template>
<script>
  import MyTable from '../../components/MyTable/MyTable'
  import { Loading } from 'element-ui'
  import axios from 'axios'
  export default {
    data(){
      return {
        tables:{},
        loading:true
      }
    },
    mounted:function(){
      axios.get('/dongTaiBiaoTou',)
        .then(res=>{
          console.log(res)
          this.tables=res.data.table;
        })
         setTimeout(()=>{
           this.loading=false
         },2000)
    },
    components:{
      MyTable
    },



  }
</script>
<style scoped>

</style>

