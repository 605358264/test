<template>
  <el-table
    :data="tableData5"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="债券" >
            <span>债券</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>
          <el-form-item label="54836">
            <span>54838</span>
          </el-form-item>

        </el-form>
      </template>
    </el-table-column>
    
    <el-table-column
      label="日期"
      prop="date">
    </el-table-column>
    <el-table-column
      label="合计预测合计"
      prop="forecastSum">
    </el-table-column>
    <el-table-column
      label="合计预测本金"
      prop="forecastcapital">
    </el-table-column>
    <el-table-column
      label="合计预测利息"
      prop="forecastInterest">
    </el-table-column>
    <el-table-column
      label="合计实际合计"
      prop="actualSum">
    </el-table-column>
    <el-table-column
      label="合计预测本金"
      prop="actualSumCapital">
    </el-table-column>
    <el-table-column
      label="合计预测利息"
      prop="actualSumInterest">
    </el-table-column>
    <el-table-column
      label="集团预测合计"
      prop="groupForecastSum">
    </el-table-column>
    <el-table-column
      label="集团预测本金"
      prop="groupForecastCapital">
    </el-table-column>
    <el-table-column
      label="集团预测利息"
      prop="groupForecastInterest">
    </el-table-column>
    <el-table-column
      label="集团实际合计"
      prop="groupActualSum">
    </el-table-column>
    <el-table-column
      label="集团实际本金"
      prop="groupActualCapital">
    </el-table-column>
    <el-table-column
      label="集团实际利息"
      prop="groupActualInterest">
    </el-table-column>
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
    display: flex;
  }
  .demo-table-expand label {
    width: 100%;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;

  }

</style>

<script>
  export default {
    data() {
      return {
        tableData5: [{
          date: '2016-05-03',
          forecastSum:'54835.00',
          forecastcapital:'54835.00',
          forecastInterest:'54835.00',
          groupActualSum:'54835.00',
          groupActualCapital:'54835.00',
          groupActualInterest:'54835.00',
          forecast:'54835.00',
          actualForecast:'54835.00',
          actualSum:'54835.00',
          actualSumCapital:'54835.00',
          actualSumInterest:'54835.00',
          groupForecast:'54835.00',
          groupForecastSum:'54835.00',
          groupForecastInterest:'54835.00',
          groupForecastCapital:'54835.00',
          children:[
            {bond:'债券',forecastSum:'54835.00',
              forecastcapital:'54835.00',
              forecastInterest:'54835.00',
              groupActualSum:'54835.00',
              groupActualCapital:'54835.00',
              groupActualInterest:'54835.00',
              forecast:'54835.00',
              actualForecast:'54835.00',
              actualSum:'54835.00',
              actualSumCapital:'54835.00',
              actualSumInterest:'54835.00',
              groupForecast:'54835.00',
              groupForecastSum:'54835.00',
              groupForecastInterest:'54835.00',
              groupForecastCapital:'54835.00',
            },
            { preferredStock:'优先股',forecastSum:'54835.00',
              forecastcapital:'54835.00',
              forecastInterest:'54835.00',
              groupActualSum:'54835.00',
              groupActualCapital:'54835.00',
              groupActualInterest:'54835.00',
              forecast:'54835.00',
              actualForecast:'54835.00',
              actualSum:'54835.00',
              actualSumCapital:'54835.00',
              actualSumInterest:'54835.00',
              groupForecast:'54835.00',
              groupForecastSum:'54835.00',
              groupForecastInterest:'54835.00',
              groupForecastCapital:'54835.00',
            },
            { finance:'理财',forecastSum:'54835.00',
              forecastcapital:'54835.00',
              forecastInterest:'54835.00',
              groupActualSum:'54835.00',
              groupActualCapital:'54835.00',
              groupActualInterest:'54835.00',
              forecast:'54835.00',
              actualForecast:'54835.00',
              actualSum:'54835.00',
              actualSumCapital:'54835.00',
              actualSumInterest:'54835.00',
              groupForecast:'54835.00',
              groupForecastSum:'54835.00',
              groupForecastInterest:'54835.00',
              groupForecastCapital:'54835.00',
            },
            {NonStandard:'非标',forecastSum:'54835.00',
              forecastcapital:'54835.00',
              forecastInterest:'54835.00',
              groupActualSum:'54835.00',
              groupActualCapital:'54835.00',
              groupActualInterest:'54835.00',
              forecast:'54835.00',
              actualForecast:'54835.00',
              actualSum:'54835.00',
              actualSumCapital:'54835.00',
              actualSumInterest:'54835.00',
              groupForecast:'54835.00',
              groupForecastSum:'54835.00',
              groupForecastInterest:'54835.00',
              groupForecastCapital:'54835.00',
            },
            {deposit:'存款',forecastSum:'54835.00',
              forecastcapital:'54835.00',
              forecastInterest:'54835.00',
              groupActualSum:'54835.00',
              groupActualCapital:'54835.00',
              groupActualInterest:'54835.00',
              forecast:'54835.00',
              actualForecast:'54835.00',
              actualSum:'54835.00',
              actualSumCapital:'54835.00',
              actualSumInterest:'54835.00',
              groupForecast:'54835.00',
              groupForecastSum:'54835.00',
              groupForecastInterest:'54835.00',
              groupForecastCapital:'54835.00',
            },
            {depositL:'存单',forecastSum:'54835.00',
              forecastcapital:'54835.00',
              forecastInterest:'54835.00',
              groupActualSum:'54835.00',
              groupActualCapital:'54835.00',
              groupActualInterest:'54835.00',
              forecast:'54835.00',
              actualForecast:'54835.00',
              actualSum:'54835.00',
              actualSumCapital:'54835.00',
              actualSumInterest:'54835.00',
              groupForecast:'54835.00',
              groupForecastSum:'54835.00',
              groupForecastInterest:'54835.00',
              groupForecastCapital:'54835.00',
            },
            {ABS:'ABS',forecastSum:'54835.00',
              forecastcapital:'54835.00',
              forecastInterest:'54835.00',
              groupActualSum:'54835.00',
              groupActualCapital:'54835.00',
              groupActualInterest:'54835.00',
              forecast:'54835.00',
              actualForecast:'54835.00',
              actualSum:'54835.00',
              actualSumCapital:'54835.00',
              actualSumInterest:'54835.00',
              groupForecast:'54835.00',
              groupForecastSum:'54835.00',
              groupForecastInterest:'54835.00',
              groupForecastCapital:'54835.00',
            },
          ]

        }]
      }
    }
  }
</script>

