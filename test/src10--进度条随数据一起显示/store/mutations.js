
//定义 MOCKJS中table的状态
import Vue from 'vue'


import {RECEIVETABLE} from './mutation-type'

export default{
  [RECEIVETABLE](state,{table}){
     state.table=table
  }
}
