//引入MOCK
import Mock from 'mockjs';
//引入数据

console.log('----------123-----');

import tables from './data'

export default Mock.mock('/dongTaiBiaoTou',(req,res)=>{
     return Mock.mock({
       "table":{
         "col": [
           {
             "prop": "date",
             "label": "日期"
           },
           {
             "label":"配送信息",
             "children":[
               {
                 "prop":"name",
                 "label":"姓名"
               },
               {
                 "label":"地址",
                 "children": [
                   {
                     "prop": "province",
                     "label":"省份"
                   },
                   {
                     "prop":"city",
                     "label": "市区",
                     "children": [
                       {
                         "prop":"province",
                         "label":"村"
                       },
                       {
                         "prop":"city",
                         "label": "镇"
                       },
                       {
                         "prop": "address",
                         "label": "县城"
                       },
                       {
                         "prop":"tel",
                         "label": "电话"
                       }
                     ]
                   },
                   {
                     "prop":"addres",
                     "label":"地址"
                   },
                   {
                     "prop":"tel",
                     "label":"电话",
                     "children": [
                       {
                         "prop":"province",
                         "label":"省份"
                       },
                       {
                         "prop":"city",
                         "label":"市区"
                       },
                       {
                         "prop":"address",
                         "label":"地址"
                       },
                       {
                         "prop": "tel",
                         "label": "电话"
                       }
                     ]
                   }

                 ]
               }
             ]
           }
         ],
         "data":[
           {
             "date":"2016-05-03",
             "name": "王小虎",
             "province": "上海",
             "city": "普陀区",
             "address": "上海市普陀区金沙江路 1518 弄",
             "tel":"13626834923",
             "zip":"200333"
           },
           {
             "date":" 2016-05-02",
             "name": "王小虎",
             "province": "上海",
             "city": "普陀区",
             "address": "上海市普陀区金沙江路 1518 弄",
             "tel":"13626834943",
             "zip": "200333"
           },
           {
             "date":"2016-05-02",
             "name": "王小虎1",
             "province":"上海1",
             "city":"普陀区1",
             "address":"上海市普陀区金沙江路 1518 弄1",
             "tel":"13626834943",
             "zip": "200333"
           }
         ]
       }
     })
  }
)



