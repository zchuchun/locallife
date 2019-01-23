import fetch from '../../utils/common.js'
import regeneratorRuntime from '../../utils/runtime.js'
Page({
  data:{
    swiperList:'',
    navList:''
  },
  onLoad() {
    this.getSwiper()
    this.getNavigator()
  },
  //轮播图
 async getSwiper() {
   let res = await fetch('slides')
   this.data.swiperList = res.data
   this.setData(this.data)
   
  },

  //导航
  async getNavigator() {
    let res = await fetch('categories')
    this.data.navList = res.data
    this.setData(this.data)
  }
})