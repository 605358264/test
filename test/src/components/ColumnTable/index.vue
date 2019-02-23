<template>
  <el-table :data="formatData" :row-style="showRow" v-bind="$attrs"  >
    <template v-for="(item,index) in columns" >
      <table-column v-if="item.children && item.children.length" :key="index" :coloumn-header="item" :width="item.width"  >
      </table-column>
      <el-table-column v-else :key="index" :label="item.label" :prop="item.prop" :width="item.width">
        <template  slot-scope="scope">
          <!--<span v-for="space in scope.row._level" v-if="index === 0" :key="space" class="ms-tree-space"/>-->
          <span v-if="iconShow(index,scope.row)" class="tree-ctrl" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-arrow-right" />
          <i v-else class="el-icon-arrow-down"/>
        </span>
          {{ scope.row.date }}
        </template>
      </el-table-column>
    </template>
    <!--</el-table-column>-->
    <slot/>

  </el-table>
</template>

<script>
import treeToArray from './eval'
import MyColumn from './MyColumn'
import TableColumn from './TableColumn'
export default {
  name: 'TreeTable',
  props: {
    /* eslint-disable */
    data: {
      type: [Array, Object],
      required: true,
      default(){
        return[]
      }
    },
    columns: {
      type: Array,
      default(){
        return[]
      }
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  components: {
    MyColumn,TableColumn
  },
  computed: {
    // 格式化数据源
    formatData: function() {
      let tmp;
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      const func = this.evalFunc || treeToArray
      const args = this.evalArgs ? Array.concat([tmp, this.expandAll], this.evalArgs) : [tmp, this.expandAll]
      return func.apply(null, args)
    }
  },
  methods: {
    showRow: function(row) {
      console.log(row);
      const show = (row.row.parent ? (row.row.parent._expanded && row.row.parent._show) : true)
      // console.log(show);
      row.row._show = show
      return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;'
    },
    // 切换下级是否展开
    toggleExpanded: function(trIndex) {
      const record = this.formatData[trIndex]
      record._expanded = !record._expanded
    },
    // 图标显示
    iconShow(index, record) {
      return (index === 0 && record.children && record.children.length > 0)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  $color-blue: #2196F3;
  $space-width: 10px;
  .ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: $space-width;
    height: 14px;
    &::before {
      content: ""
    }
  }
  .processContainer{
    width: 100%;
    height: 100%;
  }
  table td {
    line-height: 26px;
  }

  .tree-ctrl{
    position: relative;
    cursor: pointer;
    color: $color-blue;
    margin-left: -$space-width;
  }
</style>
