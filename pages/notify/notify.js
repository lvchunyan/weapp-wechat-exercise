// pages/notify/notify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ["通知", "赞与感谢", "关注"],
    currentNavtab: 0,
    currentContent:[
      {
        src:'../../images/icon1.jpeg',
        title:'Rebecca  回答了问题',
        content:'C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？'
      },
      {
        src: '../../images/icon1.jpeg',
        title: 'Rebecca  回答了问题',
        content: 'C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？'
      },
      {
        src: '../../images/icon1.jpeg',
        title: 'Rebecca  回答了问题',
        content: 'C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？'
      },
      {
        src: '../../images/icon1.jpeg',
        title: 'Rebecca  回答了问题',
        content: 'C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？'
      },
      {
        src: '../../images/icon1.jpeg',
        title: 'Rebecca  回答了问题',
        content: 'C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？'
      },
      {
        src: '../../images/icon1.jpeg',
        title: 'Rebecca  回答了问题',
        content: 'C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？'
      },
      {
        src: '../../images/icon1.jpeg',
        title: 'Rebecca  回答了问题',
        content: 'C#如何在不覆盖原有文件的情况下直接修改某一部分的内容？'
      },
    ]
  },
  switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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