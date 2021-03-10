var sort = document.querySelector('#shopping_commend_sort');
var s = 0;
shopping_commend_show = function() {
    s++;
    if (s % 2 == 0) {
        sort.style.display = 'block';
    } else {
        sort.style.display = 'none';
    }
}


var list = document.querySelectorAll('.shopping_product_list');
productOver = function(e) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].getAttribute('id') == e) {
            list[i].style.background = 'aqua'
        }
    }
};
productOut = function(e) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].getAttribute('id') == e) {
            list[i].style.background = '#fefbf2'
        }
    }
};

function table() {
    // 总价 = 当当价 * 数量
    // 节省金额 = 市场价 * 数量 - 总价
    // 单品积分 = 单品积分 * 数量
    // 可获得积分 = 所有的单品积分

    let oldPrice = document.querySelectorAll('.shopping_product_list_4 label'); // 当当价
    let CommodityPrices = document.querySelector('.shopping_list_end_3 span'); // 商品金额总计
    let SaveMoney = document.querySelectorAll('.shopping_list_end_4 span')[0]; // 节省的金额
    let MarketPriceOld = document.querySelectorAll('.shopping_product_list_3>label'); // 市场价
    let CommodityIntegral = document.querySelectorAll('.shopping_list_end_4 span')[1]; // 可获商品积分
    let ItemIntegral = document.querySelectorAll('.shopping_product_list_2>label');
    let dle = document.querySelectorAll('.shopping_product_list_6>a');

    let oldPriceCount = 0; // 当当价的总数
    let prices = 0; //商品金额总计
    let inputCount = 0; // 数量的总数

    productCount = function(e) {
        let input = document.querySelectorAll('.input'); // 数量 
        let oldPriceNew = 0; // 当当的金额总计
        let MarketPriceNew = 0; // 市场价总计
        let CommodityIntegralNew = 0; // 商品积分的总数

        // 遍历所有的数量
        for (let i = 0; i < input.length; i++) {
            // console.log(input[i]);
            var zz = /[0-9]/;
            if (!zz.test(input[i].value)) {
                // console.log(e);
                alert('输入错误');
                e.value = 1
                console.log(e.value);
            }
            oldPriceNew += input[i].value * oldPrice[i].innerHTML;
            MarketPriceNew += input[i].value * MarketPriceOld[i].innerHTML;
            CommodityIntegralNew += input[i].value * ItemIntegral[i].innerHTML;
        };

        SaveMoney.innerHTML = (MarketPriceNew - oldPriceNew).toFixed(2);
        CommodityPrices.innerHTML = oldPriceNew.toFixed(2);
        CommodityIntegral.innerHTML = CommodityIntegralNew;
    };

    deleteProduct = function(e) {
        var con = confirm('不是手残?');
        if (con) {
            var t = document.getElementById(e)
            t.parentNode.removeChild(t)
            productCount()
        } else {

        }

    }


};
table();