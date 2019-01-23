import fetch from '../../utils/common.js'
import regeneratorRuntime from '../../utils/runtime.js'
Page({
  data:{
    name:'',
    id:'',
    details:{}
  },
 onLoad(query) {
   this.setData({
     name:query.name,
     id:query.id
   })
   this.getList()
 },
 onReady() {
   wx.setNavigationBarTitle({
     title: this.data.name
   })
 },
 async getList() {
   let res = await fetch(`shops/${this.data.id}`)
   this.data.details = res.data
   this.setData(this.data)
 },
 preview(e){
   let {current,urls} = e.currentTarget.dataset
   current = current.replace('w.h','1000.1000')
   urls = urls.map(item => item.replace('w.h','1000.1000'))
   console.log(urls)
   wx.previewImage({
     urls: urls,
     current: current
   })
 }
 
})