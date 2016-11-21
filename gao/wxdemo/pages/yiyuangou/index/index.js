var Buy = require('../common/buy/buy')

Page({
  data: {
    currentTab: '',
    productList: [],
    tenProductList: [],
    buyData: {},
    refresh: 0
  },

  onLoad: function() {
    var that = this
    wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 10000
    });
    wx.request({
      url: 'http://localhost:3000/users', 
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        var data = res.data
        that.setData({
          currentTab: data.currentTab,
          productList: data.productList,
          tenProductList: data.tenProductList,
          buyData: data.buyData
        })
        wx.hideToast();
      }
    })
  },

  onReachBottom: function() {
    var that = this
    var refresh = that.data.refresh
    wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 10000
    });
    if (refresh < 3) {
      refresh++
      wx.request({
        url: 'http://localhost:3000/users', 
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
          var productList = that.data.productList.concat(res.data.productList)
          that.setData({
            productList: productList,
            refresh: refresh
          })
          wx.hideToast();
        }
      })
    } else {
      wx.hideToast();
    wx.showModal({
        content: '无更多商品',
        title: '刷新失败',
        showCancel: false
    });
    }
  },

  onPullDownRefresh: function() {
    var that = this
    wx.showToast({
        title: '加载中...',
        icon: 'loading',
        duration: 3000
    });
    wx.request({
      url: 'http://localhost:3000/users', 
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        var data = res.data
        that.setData({
          currentTab: data.currentTab,
          productList: data.productList,
          tenProductList: data.tenProductList,
          buyData: data.buyData
        })
        wx.hideToast();
        wx.stopPullDownRefresh()
      }
    })
  },
  
  tabSwitch: function(event) {
    this.setData({
      currentTab: event.target.dataset.index
    })
  },

  joinJump: function(event) {
    wx.setStorage({
      key: "productId",
      data: event.target.id
    })
    wx.navigateTo({
      url: '../products/products'
    })
  },

  joinJump2: function(event) {
    wx.setStorage({
      key: "productId",
      data: event.target.dataset.id
    })
    wx.navigateTo({
      url: "../products/products"
    })
  },

  buyJumpTen: function(event) {
    var src = event.target.dataset.src
    this.setData({
      buyData: {
        count: 10,
        isTen: 1,
        isHide: false,
        src: src
      }
    })
  },

  buyJump: function(event) {
    var src = event.target.dataset.src
    this.setData({
      buyData: {
        count: 1,
        isTen: 0,
        isHide: false,
        src: src
      }
    })
  },

  plus: function() {
    var that = this
    Buy.util.plus(that)
  },

  minus: function() {
    var that = this
    Buy.util.minus(that)
  },

  close: function() {
    var that = this
    buy.util.close(that)
  },

  testCount: function(event) {
    var that = this
    buy.util.testCount(event, that)
  },

  buy: function() {
    var that = this
    Buy.util.buy(that)
  }
})

