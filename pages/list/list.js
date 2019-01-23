

import fetch from '../../utils/common.js'
import regeneratorRuntime from '../../utils/runtime.js'

Page({
  data: {
    title: "",
    id: "",
    pageSize: 10,
    currentPage: 1,
    list: '',
    hasData: true,
    total: ''
  },
  onLoad(query) {
    query.name = query.name.replace(/"/g, '')
    this.setData({
      id: query.id,
      title: query.name
    })
    this.getList()
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.title
    })
  },
  //上拉触底
  onReachBottom() {
    if(!this.data.hasData) return
    this.data.currentPage++
    this.getList()
  },

  //下拉刷新
  onPullDownRefresh() {
    this.data.currentPage = 1
    this.data.list = []
    this.getList()
  },
  async getList() {
    let { id, currentPage, pageSize } = this.data
    let res = await fetch(`categories/${id}/shops?_page=${currentPage}&_limit=${pageSize}`)
    console.log(res)
      this.data.list = [...this.data.list,...res.data]
      this.data.total= res.header["X-Total-Count"]
      this.data.hasData = currentPage < Math.ceil(this.data.total/pageSize)
      this.setData(this.data)
  }
})