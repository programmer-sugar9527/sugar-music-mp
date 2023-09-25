const baseUrl = 'https://sugar-music-67812-4-1320459314.sh.run.tcloudbase.com/api'

export const get = (uri: string) => {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + uri,
      method: 'GET',
      success: (res) => {
        resolve(res.data)
      },
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}