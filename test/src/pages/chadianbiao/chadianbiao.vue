<template>
    <div id="chadianbiao">
      <div class="header">
        <div class="left">
          <span class="el-icon-testzuojiantou"></span>
          <span >返回</span>
        </div>
        <div class="middle">
          <span>实有房屋</span>
          <span>北京市海淀区甘家口街道花园村社区冠城北园</span>
        </div>
        <div clss="right">
          <span class="el-icon-testfanhuishouye"></span>
          <span class="rightWord">回到首页</span>
        </div>
      </div>
      <div class="content">
        <div class="contentMain" >
          <div class="houseSum">
            <img src="../../assets/img/1.png" alt="">
          </div>
          <div class="forms">

          </div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
       data(){
         return{


         }
       },
      components:{

      }
    }
</script>

<style scoped>
  .header{
    width:100%;
    height:30px;
    background-color: #254198;
    border:0.5px solid white;
    overflow: hidden;
  }
  .content{
    width:100%;
    height: 100%;
    margin:5px 16px 18px 16px
  }
  .contentMain{
    width:992px;
    height:522px;
  }
  .left{
    width:100px;
    height: 1px;
    transform: rotateX(135deg);
    background-color: white;
  }
  .right{
    width: 100px;
    height: 1px;
    transform: rotateX(45deg);
  }

</style>
