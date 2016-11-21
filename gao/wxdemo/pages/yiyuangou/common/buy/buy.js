function testCount(event, item) {
    var count
    if (isNaN(event.detail.value)) {
        count = 0
    } else if (item.data.buyData.isTen) {
        count = Math.ceil(parseInt(event.detail.value) / 10) * 10
    } else {
        count = parseInt(event.detail.value)
    }

    item.setData({
        buyData: {
          count: count,
          isTen: item.data.buyData.isTen
        }
    })
}

function close(item) {
    item.setData({
      buyData: {
        isHide: true
      }
    })
}

function buy(item) {
    wx.showToast({
        title: '购买成功！',
        icon: 'success',
        duration: 3000
    });
    close(item)
}

function minus(item) {
    var operate = item.data.buyData.isTen ? 10 : 1;
    var count = item.data.buyData.count - operate;
    (count <= 0) && (count = 0)
    item.setData({
      buyData: {
        count: count,
        isTen: item.data.buyData.isTen
      }
    })
}

function plus(item) {
    var operate = item.data.buyData.isTen ? 10 : 1;
    var count = item.data.buyData.count + operate
    item.setData({
      buyData: {
        count: count,
        isTen: item.data.buyData.isTen
      }
    })
}

module.exports.util = {
    testCount: testCount,
    close: close,
    buy: buy,
    minus: minus,
    plus: plus
}