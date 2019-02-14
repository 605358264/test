<template>
  <div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
        {
          label: '一级 3',
          children: [{
            label: '二级 3-1',

          },
          {
            label: '二级 3-2',

          },
          {
              label: '二级 3-3',

            },
          {
              label: '二级 3-4',

          },
          ]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }
</script>

<style scoped>

</style>
