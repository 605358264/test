<template>
    <div class="sanjiliandongContent">
        <div class="leftNav" style="width:33%;float:left;background-color:rebeccapurple">
           <div v-for="items in navData" :key="items.id" style="display: flex;justify-content: space-between;line-height: 30px;" @click="showSecond(items)">
              <div >{{items.label}}</div>
              <div class="el-icon-arrow-right"></div>
           </div>
        </div>
        <div class="middleContent" style="width:33%;float:left;background-color: aqua" >
           <div v-for="item in secondData" :key="item.id" style="display: flex;justify-content: space-between;line-height: 30px;"@click="showThree(item)">
                  <div>{{item.label}}</div>
                  <div class="el-icon-arrow-right"></div>
              </div>

        </div>
        <div class="lastContent" style="width:33%;float:left;background-color: rebeccapurple" >

            <div v-for="i in threeContent" :key="i.id" style="display: flex;justify-content: space-between;line-height:30px;">
                    <div>{{i.label}}</div>
                    <span class="el-icon-arrow-right"></span>
            </div>

        </div>
      <!--<div class="leftContent"style="width:33%;float:left;background-color:rebeccapurple">-->
        <!--<div v-for="items in navData">-->
          <!--<div>{{items.label}}</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="middleContent"style="width:33%;float:left;background-color:rebeccapurple" v-if="secondShow">-->
        <!--<div v-for="item in secondData">-->
          <!--<div @click="second">{{item.label}}</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="threeContent"style="width:33%;float:left;background-color:rebeccapurple" v-if="threeShow">-->
        <!--<div v-for="i in threeContent">-->
          <!--<div @click="three">{{i.label}}</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
</template>

<script>
    export default {
        data(){
          return {
            navData:[
              {
                label:"1-1-1",
                id:1,
                secondData:[
                  {
                    id:2,
                    label:"1-2-1",
                    threeContent:[{
                      id:3,
                      label:"1-3-1",
                    }]
                  },
                  {
                    id:4,
                    label:"2-2",
                    threeContent:[{
                      id:5,
                      label:"3-1",
                    }]
                  },
                ]
              },
              {
                id:6,
                label:"2-1-1",
              },
              {
                id:7,
                label:"3-1-1",
                secondData:[
                  {
                    id:8,
                    label:"3-2-1",
                    threeContent:[
                      {
                      id:9,
                      label:"3-3-1",
                      },
                      {
                        id:10,
                        label:"3-3-2",
                      },
                    ]
                  }
                ]
              },
              {
                id:"11",
                label:"4-1-1",
                secondData:[
                  {
                    id:12,
                    label:"4-2-1",
                    threeContent:[
                      {
                      id:13,
                      label:"4-3-1",
                      },
                    ]
                  }
                ]
              },

            ],
            secondData:[],
            threeContent:[],

            //
            // navData:[
            //   {id:1,label:'1-1-1'},
            //   {id:2,label:'2-1-1'},
            //   {id:3,label:'3-1-1'},
            //   {id:4,label:'4-1-1'}
            // ],
            // secondData:[
            //   {id:1,label:'1-1-2',idTwo:1},
            //   {id:2,label:'2-1-2',idTwo:2},
            //   {id:3,label:'3-1-2',idTwo:3},
            //   {id:4,label:'4-1-2',idTwo:4}
            // ],
            // threeContent:[
            //   {id:1,label:'1-1-2',idTwo:1},
            //   {id:2,label:'2-1-2',idTwo:2},
            //   {id:3,label:'3-1-2',idTwo:3},
            //   {id:4,label:'4-1-2',idTwo:4}
            // ],
            //
            // secondShow:false,
            // threeShow:false
          }
        },
        methods: {
          // 传参item.id时展示第二层的方法
          // showSecond(id){
          //   this.navData.map((item)=>{
          //     if(item.id == id){
          //       this.secondData = item.secondData
          //     }
          //   })
          // //   //const i = this.navData.id
          // //   // let i=this.navData.id
          // //   // this.middleContent=true;
          // //   //  return this.secondData.filter(item=>{
          // //   //    if (item.id === i) {
          // //   //      return item
          // //   //    }
          // //   //  })
          // },
          //展示showSecond

           showSecond(item){
              this.secondData=item.secondData;
              this.threeContent=[]
           },

          // showThree(id){
          //   this.showSecond(id)
          //   console.log("********")
          //   console.log(this.secondData)
          //   this.secondData.map((i)=>{
          //     if(i.id  == id){
          //       this.threeContent = i.threeContent
          //       console.log('*')
          //       console.log(this.threeContent)
          //     }
          //   })
          // }  //showThree的第一种表示方法,此时传参要传方法种传参   items.ids 和item.id

          showThree(item){
            this.threeContent=item.threeContent
          }

          // showThree(item)
          // second(id) {
          //
          //   this.secondData.map(o => {
          //     if (o.id == id) {
          //       return o
          //     }
          //   })
          //
          //   this.secondShow = true
          //
          // },
          // three(id, idTwo) {
          //   this.threeContent.map(u => {
          //     if (u.id == id || u.idTwo == idTwo) {
          //       return u
          //     }
          //   })
          //   this.threeShow = true
          // }
        }
    }
</script>

<style scoped>

</style>



<!--let num =[-->
  <!--{A:0.3,name:"小王"},{B:0.4,name:"小玉"}-->
<!--]-->

<!--let num1=[{-->

<!--{C:0.5}-->
<!--{D:0.6}-->
<!--}]-->

<!--拼接成-->
<!--C:[-->
<!--{A:0.3,name:"小王"}-->
<!--{B：0.4，name:"小玉"}-->

<!--]-->
