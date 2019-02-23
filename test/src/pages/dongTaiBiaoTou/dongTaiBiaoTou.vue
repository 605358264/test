<template>
  <div class="app-container">
    <tree-table :data="table.tableData" :columns="table.cols"  border/>
  </div>
</template>

<script>
import treeTable from '../../components/ColumnTable'
import {mapState} from 'vuex'

export default {

  components: { treeTable },
  computed:{
    ...mapState(['table'])
  },
  mounted(){
    this.$store.dispatch('getTable')
  }
}
</script>
