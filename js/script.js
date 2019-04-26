'use strict';
/*
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
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
    console.log(item);
    console.log(item.title);
    console.log(list);
};

renderGoodsList(goods);*/
/*
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
    return '<div class="goods-item"><img src="./img/wear.jpg" alt=""><h3>' + title + '</h3><p>' + price + '$</p><button class="buy" type="button">Купить</button></div>';
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
*/
class goodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item">
        <img src="./img/wear.jpg" alt="">
        <h3>${this.title}</h3>
        <p>${this.price}$</p>
        <button class="buy" type="button">Купить</button>
        </div>`;
    }
}

class goodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [{
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
    }

    render() {
        let listHtml = '';
        this.goods.map(good => {
            const goodItem = new goodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    getSum() {
        let sum = 0;
        for (let i = 0; i < this.goods.length; i++){
            sum += this.goods[i].price;
        }
        document.querySelector('.sumBasket').innerHTML = `Сумма всех товаров - ${sum}$`;
    }
}

class elemOfBasket { 
    constructor() {
        this.title = title;
        this.price = price;
    }

    addToBasket() {
        //добавить товар в корзину
    }

    removeFromBasket() {
        //удалить товар из корзины
    }
}

class Basket {
    constructor() {
        var itemsBasket = []; 
    }
    
    getSum() {

    }
}

const list = new goodsList();
list.fetchGoods();
list.render();
list.getSum();