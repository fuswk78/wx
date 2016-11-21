var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
        id: '',
        product: {},
        productList: {
          p1: {
            src: "../../../images/products/product-1.png",
            name: "新MacBook Air 13.3英寸",
            pro: 30,
            url: "../products/products",
            need: "7088",
            join: "3011"
          },
          p2: {
            src: "../../../images/products/product-2.png",
            name: "iMacBook 21.5英寸一体机",
            pro: 15,
            url: "../products/products",
            need: "11088",
            join: "10011"
          },
          p3: {
            src: "../../../images/products/product-3.png",
            name: "捷安特2017款 24速山地车",
            pro: 70,
            url: "../products/products",
            need: "2300",
            join: "760"
          },
          p4: {
            src: "../../../images/products/product-4.jpg",
            name: "Airwheel 智能坐立平衡车",
            pro: 90,
            url: "../products/products",
            need: "3088",
            join: "211"
          },
          p5: {
            src: "../../../images/products/product-5.jpg",
            name: "Apple Watch Series 2",
            pro: 50,
            url: "../products/products",
            need: "4088",
            join: "2011"
          },
          p6: {
            src: "../../../images/products/product-6.jpg",
            name: "千禧之星 20g金条【预售】",
            pro: 49,
            url: "../products/products",
            need: "3088",
            join: "1511"
          },
          p7: {
            src: "../../../images/products/product-7.png",
            name: "华为P9 64G",
            pro: 80,
            url: "../products/products",
            need: "3088",
            join: "411"
          },
          p8: {
            src: "../../../images/products/product-8.jpg",
            name: "移动100充值卡 欢乐场",
            pro: 90,
            url: "../products/products",
            need: "120",
            join: "15"
          },
          p9: {
            src: "../../../images/products/product-9.png",
            name: "iPhone7 Plus128GB",
            pro: 60,
            url: "../products/products",
            need: "7088",
            join: "3211"
          },
          p10: {
            src: "../../../images/products/product-10.jpg",
            name: "移动5000充值卡 欢乐场",
            pro: 10,
            url: "../products/products",
            need: "6000",
            join: "5311"
          },
          p11: {
            src: "../../../images/products/product-11.jpg",
            name: "移动1000充值卡 欢乐场",
            pro: 24,
            url: "../products/products",
            need: "1200",
            join: "1000"
          },
          p12: {
            src: "../../../images/products/product-12.jpg",
            name: "欧姆龙 空气净化器",
            pro: 68,
            url: "../products/products",
            need: "1088",
            join: "309"
          }
        },
        buyData: {
          count: 1,
          isTen: 0,
          isHide: true,
          src: ''
        }
  });
});

module.exports = router;
