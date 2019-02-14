<template>
  <div>
    <my-table :col="table.col"
              :data="table.data">
    </my-table>
  </div>
</template>

<script>
  import MyTable from '../../components/MyTable/MyTable'
  import {mapState} from 'vuex'
  export default {

    components:{
      MyTable
    },
    computed:{
      ...mapState(['table']),

    },

    mounted(){
      this.$store.dispatch('getTable')
    }
  }
</script>
<style>

</style>

