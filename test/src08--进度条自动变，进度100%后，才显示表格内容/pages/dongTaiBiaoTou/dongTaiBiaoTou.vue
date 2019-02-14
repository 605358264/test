<template>
  <div>
    <div>
      <el-progress
        :percentage="nuw" color="#8e71c7">
      </el-progress>
    </div>
    <div v-if="nuw==100">
      <my-table :col="table.col" v-loading="loading"
                :data="table.data">
      </my-table>
    </div>
  </div>
</template>

<script>
  import MyTable from '../../components/MyTable/MyTable'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        loading:false,
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
      this.dang();
    },
    methods:{
      dang(){
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

    },

  }
</script>
<style>

</style>

