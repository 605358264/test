<template>
   <div>
     <el-checkbox-group v-model="checkboxGroup1">
       <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
     </el-checkbox-group>
   </div>
</template>

<script>
    export default {
        cities:["上海","福建","北京"]
    }
</script>

<style scoped>

</style>
