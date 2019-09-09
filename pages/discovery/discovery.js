// pages/discovery/discovery.js

var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: 0,
    imgUrls: [
      '../../images/24213.jpg',
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0
  },
  switchTab: function(e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.refresh();
  },
  //使用本地 fake 数据实现刷新效果
  refresh: function() {
    var feed = util.getDiscovery();
    var feed_data = feed.data;
    this.setData({
      feed: feed_data,
      feed_length: feed_data.length
    });
    console.log(11)
  },
  bindQueTap: function() {
    wx: wx.navigateTo({
      url: '../question/question',
    })
  },
  bindItemTap:function(){
    wx:wx.navigateTo({
      url: '../answer/answer',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})