const baseurl = 'http://locally.uieee.com/'
export default function fetch(url, options = {}) {
  if (typeof url === 'string') {
    options.url = url
  }
  if (typeof url === 'object') {
    options = url
  }
  return new Promise(function (resolve, reject) {
    wx.request({
      url: baseurl + options.url,
      methods: options.methods || 'GET',
      data: options.data || {},
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
