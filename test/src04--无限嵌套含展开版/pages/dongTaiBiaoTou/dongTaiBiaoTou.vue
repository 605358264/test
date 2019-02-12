<template>
  <div>
    <my-table :col="col" :data="data" :childrenLabel="childrenLabel" >
    </my-table>
  </div>
</template>
<style>
  .el-table__expanded-cell[class*=cell]{
    padding: 0 0 0 48px;
  }
  /* .undefined.el-tablemplate>d-column{display: none;} */
</style>
<script>
  import MyTable from '../../components/MyTable/MyTable'
  import treeTable from '@/components/TreeTable'
import { create } from 'domain';
  export default {
    name: 'TreeTableDemo',
    components: {
      MyTable
    },
    data() {
      return {
        defauleFalse: false,
        childrenLabel: [],
        col: [
          {
            prop: 'date',
            label: '日期',
          },
          {
            prop:'sum',
            label: '合计',
            children: [
              {
                prop: 'forecast',
                label: '预测',
                children:[
                  {
                    prop:'forecastSum',
                    label:'合计',
                  },
                  {
                    prop:'forecastcapital',
                    label:'本金',
                  },
                  {
                    prop:'forecastInterest',
                    label:'利息',
                  },
                ]
              },
              {
                prop:'actualForecast',
                label: '实际',
                children:[
                  {
                    prop:'actualSum',
                    label:'合计',
                  },
                  {
                    prop:'actualSumCapital',
                    label:'本金',
                  },
                  {
                    prop:'actualSumInterest',
                    label:'利息',
                  },
                ]
              }
            ]
          },
          {
            prop: 'group',
            label: '集团',
            children: [
              {
                prop: 'groupForecast',
                label: '预测',
                children:[
                  {
                    prop:'groupForecastSum',
                    label:'合计',
                  },
                  {
                    prop:'groupForecastCapital',
                    label:'本金',
                  },
                  {
                    prop:'groupForecastInterest',
                    label:'利息',
                  },
                ]
              },
              {
                prop:'groupActual',
                label: '实际',
                children:[
                  {
                    prop:'groupActualSum',
                    label:'合计',
                  },
                  {
                    prop:'groupActualCapital',
                    label:'本金',
                  },
                  {
                    prop:'groupActualInterest',
                    label:'利息',
                  },
                ]
              },
            ]
          },
        ],

        data: [
          {
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
              {date:'债券',
                forecastSum:'11',
                forecastcapital:'54835',
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
              { date:'优先股',forecastSum:'54835.00',
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
              { date:'理财',forecastSum:'54835.00',
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
              {date:'非标',forecastSum:'54835.00',
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
              {date:'存款',forecastSum:'54835.00',
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
              {date:'存单',forecastSum:'54835.00',
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
              {date:'ABS',forecastSum:'54835.00',
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
          },
          {
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
              {date:'债券',forecastSum:'22',
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
              { date:'优先股',forecastSum:'54835.00',
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
              { date:'理财',forecastSum:'54835.00',
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
              {date:'非标',forecastSum:'54835.00',
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
              {date:'存款',forecastSum:'54835.00',
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
              {date:'存单',forecastSum:'54835.00',
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
                  {date:'存单',forecastSum:'54835.00',
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
                  }
                ]
              },
            ]
          },
        ]
      }
    },
    created(){
      this.initLbel(this.col)

    },
    methods: {
      initLbel(arr) {
        let self = this
        for(let item of arr) {
          if(!item.children){
            let obj = {}
            obj.label = item.label
            obj.prop = item.prop
            self.childrenLabel.push(obj)
          }else{
            self.initLbel(item.children)
          }
        }

      }
    }
  }
</script>
<style>

</style>

