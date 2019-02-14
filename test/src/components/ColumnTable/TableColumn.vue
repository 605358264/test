<template>
    <el-table-column :label="coloumnHeader.label" :prop="coloumnHeader.label" >
        <template v-for="(item,index) in coloumnHeader.children"  >
            <tableColumn v-if="item.children && item.children.length" :key="index" :coloumn-header="item" :width="item.width" ></tableColumn>
            <el-table-column v-else :key="index" :label="item.label"  :prop="item.prop" align="center" :width="item.width"></el-table-column>
        </template>
    </el-table-column>
</template>

<script>
    export default {
        name: 'tableColumn',
        props: {
            coloumnHeader: {
                type: Object,
                //required: true
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
