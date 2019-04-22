/*"use strict";

const goods = [{
        title: 'Shirt',
        price: 150
    },
    {
        title: 'Socks',
        price: 50
    },
    {
        title: 'Jacket',
        price: 350
    },
    {
        title: 'Shoes',
        price: 250
    },
];

const renderGoodsItem = (title, price) => {
    return `<div class="goods-item">
    <img src="./img/wear.jpg" alt="">
    <h3>${title}</h3>
    <p>${price}$</p>
    <button class="buy" type="button">Купить</button>
    </div>`;
};
console.log(renderGoodsItem());

const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
    console.log(item);
         console.log(item.title);
         console.log(list);
};

renderGoodsList(goods);*/

//ES5 code
var goods = [{
        title: 'Shirt',
        price: 150
    },
    {
        title: 'Socks',
        price: 50
    },
    {
        title: 'Jacket',
        price: 350
    },
    {
        title: 'Shoes',
        price: 250
    },
];

var renderGoodsItem = function(title, price) {
    return `<div class="goods-item">
    <img src="./img/wear.jpg" alt="">
    <h3>${title}</h3>
    <p>${price}$</p>
    <button class="buy" type="button">Купить</button>
    </div>`;
};

console.log(renderGoodsItem());

function renderGoodsList(list) {
    var goodsList = list.map(function(item){
         return renderGoodsItem(item.title, item.price);
        });
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
    console.log(goodsList);
};

renderGoodsList(goods);

