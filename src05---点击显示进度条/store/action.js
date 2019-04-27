
import {reqTable} from "../api/index"

import {RECEIVETABLE} from './mutation-type'

export default{
  async getTable({commit}){

    //根据结果提交到mutation
    const result=await reqTable()

    if(result.code===0){
      const table=result.data

      console.log('------')
      console.log(table)
      commit(RECEIVETABLE,{table})
    }
  },
}
