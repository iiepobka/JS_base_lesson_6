'use strict';

let Goods = {
    marketGoods: [
        {
            id_product: 123,
            product_name: "Ноутбук",
            price: 40000,
            quantity: 1,
            src: "https://items.s1.citilink.ru/1194642_v01_b.jpg"
        },
        {
            id_product: 456,
            product_name: "Мышка",
            price: 1000,
            quantity: 1,
            src: "https://avatars.mds.yandex.net/get-mpic/1750207/img_id8891102636719973137.png/orig"
        }
    ],


    genGoodsCard() {
        document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="goods_cards"></div>');
        for (let i = 0; i < this.marketGoods.length; i++) {
            document.querySelector('.goods_cards').insertAdjacentHTML('beforeend', `<div class="goods_card"><img class="goods_img" src="${this.marketGoods[i].src}" alt="${this.marketGoods[i].product_name}"><p class="about_good">товар: ${this.marketGoods[i].product_name}<br>цена: ${this.marketGoods[i].price} </p></div>`);
            this.genCardButton(i);
        }

    },

    genCardButton(i) {
        let getGodsCard = document.querySelectorAll('.goods_card');
        getGodsCard[i].insertAdjacentHTML('beforeend', '<div class="card_button">Купить</div>');
        this.addEventCardButton(i);
    },

    addEventCardButton(i) {
        let buttonEvent = document.querySelectorAll('.card_button');
        buttonEvent[i].addEventListener('click', () => {
            Basket.basketGoods.push(this.marketGoods[i]);
            Basket.outputBasketContent();
        })
    }
}

let Basket = {
    basketGoods: [],

    genBasketCard() {
        document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="basket_card"></div>');
        document.querySelector('.basket_card').insertAdjacentHTML('beforeend', '<div class="basket_content">Здесь будут ваши покупки!</div><div class="basket_button">Очистить корзину!</div>');
        this.addEventBasketButton();
    },

    addEventBasketButton() {
        let buttonEvent = document.querySelector('.basket_button');
        buttonEvent.addEventListener('click', () => {
            document.querySelector('.basket_content').remove();
            document.querySelector('.basket_card').insertAdjacentHTML('afterbegin', '<div class="basket_content">Здесь будут ваши покупки!</div>');
            this.basketGoods = [];
        })

    },

    outputBasketContent() {
        if (document.querySelector('.basket_content')) {
            document.querySelector('.basket_content').remove();
            document.querySelector('.basket_card').insertAdjacentHTML('afterbegin', '<div class="basket_content"></div>');
        }
        let totalPrice = 0;
        for (let i = 0; i < this.basketGoods.length; i++) {
            totalPrice += this.basketGoods[i].price;
            document.querySelector('.basket_content').insertAdjacentHTML('beforeend', `<div class="basket_content_card">товар: ${this.basketGoods[i].product_name}<br>цена: ${this.basketGoods[i].price}</div>`);
        }
        document.querySelector('.basket_content').insertAdjacentHTML('beforeend', `<div class="basket_content_card">Цена за все товары: ${totalPrice}</div>`);
    },


}

Goods.genGoodsCard();
Basket.genBasketCard();







