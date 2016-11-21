Page({
    data: {
        animationData1: {},
        animationData2: {},
        animationData3: {},
        currentTab: '1',
        aProductList: [
            {
                src: "../../../images/products/product-1.png",
                name: "新MacBook Air 13.3英寸",
                pro: 30,
                url: "../products/products",
                id: "p1"
            },
            {
                src: "../../../images/products/product-2.png",
                name: "iMacBook 21.5英寸一体机",
                pro: 15,
                url: "../products/products",
                id: "p2"
            },
            {
                src: "../../../images/products/product-5.jpg",
                name: "Apple Watch Series 2",
                pro: 50,
                url: "../products/products",
                id: "p5"
            },
            {
                src: "../../../images/products/product-9.png",
                name: "iPhone7 Plus128GB",
                pro: 60,
                url: "../products/products",
                id: "p9"
            }
        ],
        cProductList: [
            {
                src: "../../../images/products/product-8.jpg",
                name: "移动100充值卡 欢乐场",
                pro: 90,
                url: "../products/products",
                id: "p8"
            },
            {
                src: "../../../images/products/product-10.jpg",
                name: "移动5000充值卡 欢乐场",
                pro: 10,
                url: "../products/products",
                id: "p10"
            },
            {
                src: "../../../images/products/product-11.jpg",
                name: "移动1000充值卡 欢乐场",
                pro: 24,
                url: "../products/products",
                id: "p11"
            },

        ],
        oProductList: [
            {
                src: "../../../images/products/product-7.png",
                name: "华为P9 64G",
                pro: 80,
                url: "../products/products",
                id: "p7"
            },
            {
                src: "../../../images/products/product-12.jpg",
                name: "欧姆龙 空气净化器",
                pro: 68,
                url: "../products/products",
                id: "p12"
            },
            {
                src: "../../../images/products/product-6.jpg",
                name: "千禧之星 20g金条【预售】",
                pro: 49,
                url: "../products/products",
                id: "p6"
            },
            {
                src: "../../../images/products/product-3.png",
                name: "捷安特2017款 24速山地车",
                pro: 70,
                url: "../products/products",
                id: "p3"
            },
            {
                src: "../../../images/products/product-4.jpg",
                name: "Airwheel 智能坐立平衡车",
                pro: 90,
                url: "../products/products",
                id: "p4"
            }
        ]
    },

    onShow: function() {
        var that = this
        setTimeout(
            function() {
                that.change(1, -100, 1)
            }, 400)
    },

    change: function(index, trans, opa) {
        var animationIn = wx.createAnimation({
            duration: 1500,
            timingFunction: 'ease',
        })
        this.animationIn = animationIn
        animationIn.translateY(trans).opacity(opa).step()
        switch (index) {
            case 1:
                this.setData({
                    animationData1: animationIn.export()
                })
                break
            case 2:
                this.setData({
                    animationData2: animationIn.export(),
                })
                break
            case 3:
                this.setData({
                    animationData3: animationIn.export(),
                })
                break
        }
    },
    
    tabSwitch: function(event) {
        var that = this
        var index = event.target.dataset.index

        for (var i = 1;i < 4;i++) {
            this.change(i, 100, 0)
        }

        this.setData({
            currentTab: index
        })
        setTimeout(function() {
            that.change(parseInt(index), -100, 1)
        }, 100)
    },

    joinJump: function(event) {
        wx.setStorage({
            key: "productId",
            data: event.target.id
        })
    },
})