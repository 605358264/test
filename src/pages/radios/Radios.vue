<template>
    <div>
      <div class="choice1">
        <el-radio v-model="radio" label="1">备选项1</el-radio>
        <el-radio v-model="radio" label="2">备选项2</el-radio>
      </div>
      <div class="choice2">
        <el-radio v-model="radios" label="3">备选项3</el-radio>
        <el-radio v-model="radios" label="4">备选项4</el-radio>
      </div>
      <div class="choice2">
        <el-radio v-model="radios1" label="5">备选项5</el-radio>
        <el-radio v-model="radios1" label="6">备选项6</el-radio>
      </div>

    </div>
</template>

<script>
    export default {
        data(){
          return{
            radio:'1',
            radios:'3',
            radios1:'5'
          }
        }
    }
</script>

<style scoped>

</style>
