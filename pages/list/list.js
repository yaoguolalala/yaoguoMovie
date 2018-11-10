Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    title:null,
    moviename:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //拼接请求地址
    const that = this;
    console.log(options.type);
    const apiUrl ='http://t.yushu.im/v2/movie/'+options.type
    this.setData({
      title:options.name
    })
    //获取数据的api
    wx.request({
      url: apiUrl, //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res);
        that.setData({
          list:res.data.subjects,
        })
       console.log(that.data.moviename)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})