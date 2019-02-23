<template>
    <div>
      <Mys :data="datas" :col="cols">
      </Mys>
    </div>
</template>

<script>
  import Mys from '../../components/Mys/index'
    export default {
    data(){
      return{
         table: {
           cols: []
         }
      }
    },
    components:{
          Mys
     }
</script>

<style scoped>

</style>
