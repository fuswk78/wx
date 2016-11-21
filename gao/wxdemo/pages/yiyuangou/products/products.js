var Buy = require('../common/buy/buy')

Page({
    data: {
        id: '',
        product: {},
        productList: {},
        buyData: {}
    },

    onLoad: function() {
      var that = this
      wx.showToast({
          title: '加载中...',
          icon: 'loading',
          duration: 10000
      });
      wx.request({
        url: 'http://localhost:3000/products', 
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
          var data = res.data
          that.setData({
            product: data.product,
            productList: data.productList,
            buyData: data.buyData
          })
          wx.getStorage({
            key: 'productId',
            success: function(res){
              that.setData({
                id: res.data
              })
              that.setData({
                product: that.data.productList[that.data.id]
              })
            }
          })
          wx.hideToast();
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

    buy: function() {
      var that = this
      Buy.util.buy(that)
    },

    close: function() {
      var that = this
      Buy.util.close(that)
    },

    testCount: function(event) {
      var that = this
      Buy.util.testCount(event, that)
    }
})