<template>
  <div>
    <tree-table :data="data" :columns="columns" border/>
  </div>
</template>

<script>
  import treeTable from '../../components/TreeTable'
  export default {
    name: 'TreeTableDemo',
    components: { treeTable },

    data() {
      return {
        columns:[
        {
          prop:'num',
          label:"序号"
        },
        {
            prop:'name',
            label:"序号"
        },
          {
            prop:'people',
            label:"创建人"
          },
          {
            prop:'time',
            label:"创建时间"
          },
          {
            prop:'action',
            label:"操作"
          },
        ],
        data: [
        {
          num:"1" ,
          time: '2016-05-03',
          name: 'xxx方案1',
          people:"xxx",
          action:"",
        },
          {
            num: "2",
            time: '2016-05-03',
            name: 'xxx方案1',
            people:"xxx",
            actionL:''
          },
          {
            num: "3",
            time: '2016-05-03',
            name: 'xxx方案1',
            people:"xxx"
          },
        ],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
