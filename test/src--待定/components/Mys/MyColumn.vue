<template>
  <el-table-column :prop="col.prop"
                   :label="col.label"
                   align="center">
  </el-table-column>
</template>

<script>
  export default {
    name: 'MyColumn',
    props: {
      col: {
        type: Object
      }
    }
  }
</script>
<style scoped>
</style>

