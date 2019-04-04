<template>
  <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" class="climb-table" style="width:100%" @selection-change="PitchChange">
    <el-table-column type="selection">
    </el-table-column>
    <el-table-column v-for="(item, index) in colData" :key="index" :colData="item" :label="item.label" :prop="item.prop">
      <template slot-scope="scope">
        <span>{{ scope.row[item.prop] }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button class="Btndump fl" @click.native.prevent="deleteRow(scope.$index,tableData)" type="text" size="small">删除</el-button>
        <el-button class="Btndump fl" @click="EditpopUrl()" type="text" size="small"><span class="el-icon-upload"></span><span>编辑</span></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
      data(){
        return{
           colData:[
              {
                label:"序号",
                prop:"num"
              },
              {
                label:"名称",
                prop:"name"
              },
              {
                label:"创建人",
                prop:"people"
              },
              {
                label:"创建时间",
                prop:"time"
              },
            ],
           tableData3:[
              {
                num:"1",
                name:"xxx",
                people:"qwe",
                time:"2019-1-1"
              },
              {
                num:"1",
                name:"xxx",
                people:"qwe",
                time:"2019-1-1"
              },
              {
                num:"1",
                name:"xxx",
                people:"qwe",
                time:"2019-1-1"
              },
              {
                num:"1",
                name:"xxx",
                people:"qwe",
                time:"2019-1-1"
              },
            ]
          }
        }


    }
</script>

<style scoped>

</style>
