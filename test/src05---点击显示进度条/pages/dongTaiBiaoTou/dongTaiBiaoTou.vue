<template>
  <div>
    <my-table :col="table.col" v-loading="loading"
              :data="table.data">
    </my-table>
    <div>
      <el-progress
      :percentage="nuw" color="#8e71c7">
      </el-progress>
      <button @click="click"></button>
    </div>
  </div>
</template>

<script>
  import MyTable from '../../components/MyTable/MyTable'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        loading:true,
        nuw:0
      }
    },
    components:{
      MyTable
    },
    computed: {
      ...mapState(['table']),

    },
    mounted(){
      this.$store.dispatch('getTable')
      setTimeout(()=>{
        this.loading=false
      },2000)
    },
    methods:{
      click(){
        let progressnuw = 0
        let timer = setInterval(() => {
          //变量一直++   
          progressnuw++
          //清楚定时器     
          if (progressnuw >= 100) {
            clearInterval(timer);
          }
          //获取重新赋值     
          this.nuw = progressnuw
        }, 30)
      }

    }
  }
</script>
<style>

</style>

