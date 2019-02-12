<template>
  <div>
    <my-table :col="tables.col"
              :data="tables.data">
    </my-table>
  </div>
</template>

<script>
  import MyTable from '../../components/MyTable/MyTable'
  import axios from 'axios'
  export default {
    data(){
      return {
        tables:{}
      }
    },
    mounted:function(){
      axios.get('/dongTaiBiaoTou',)
        .then(res=>{
          console.log(res)
          this.tables=res.data.table;
        })
    },


    components:{
      MyTable
    },



  }
</script>
<style>

</style>

