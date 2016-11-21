Page({
    data: {
        
    },

    joinJump: function(event) {
        wx.setStorage({
            key: "productId",
            data: event.target.id
        })
    },
})