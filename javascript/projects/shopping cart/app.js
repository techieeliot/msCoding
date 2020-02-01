let cart = [];
let currency = {
    rate: 1,
    symbol: '&dollar;',
    country: 'us'
};
let items = document.querySelectorAll('.item');

/** 
 *  local storage is a way for you to save data from your browser to your computer
 * Your local storage will not be cleared until you manually clear it.
 * 
 */
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    currency = JSON.parse(localStorage.getItem('currency'));
    updateItems();
    updateTotal();
};

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener('click', function () {
        addToCart(item);
    });
}

let changeCurrency = document.getElementById('currency');
changeCurrency.addEventListener('change', updateCurrencyRate)
    
let viewCart = document.getElementById('viewCart');
viewCart.addEventListener('click', showCart);

function addToCart(item){
    let found = false;
    let price = item.getAttribute('data-price');
    let name = item.innerText;
    for (let j = 0; j < cart.length; j++) {
        const cartItem = cart[j];
        if (cartItem.name == name) {
            found = true;
            cart[j].qty++;
        }
    }
    if (!found) {
        cart.push({name, price, qty: 1});
    }
    updateItems();
    updateTotal();
    updateStorage();

};

function updateStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('currency', JSON.stringify(currency));
}

function showCart() {
    let cartList = document.getElementById('cart');
    cartList.innerText = '';
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        let subtotal = item.price / currency.rate;
        let el = document.createElement('li');
        el.innerHTML = `${item.name} @ ${currency.symbol}${subtotal.toFixed(2)} Amt:${item.qty} <span class='remove' data-idx="${i}">&times;</span>`;
        cartList.appendChild(el);
    }

    //listen for remove
    let remove = document.querySelectorAll('.remove')
    for (let j = 0; j < remove.length; j++) {
        const item = remove[j];
        item.addEventListener('click', function () {
            removeItem(item);
        })
    }
}

function removeItem(item) {
    let idx = item.getAttribute('data-idx');
    cart.splice(idx, 1);
    showCart();
    console.log('removed');
    updateTotal();
    updateItems();
    updateStorage();
}

function updateCurrencyRate() {
    let country = this.value; 
    switch (country) {
        case 'us':
            currency.rate = 1;
            currency.symbol = '&dollar;';
            currency.country = 'us'
            break;
        case 'uk':
            currency.rate = 1.5;
            currency.symbol = '&pound;'
            currency.country = 'uk';
            break;
        case 'eu':
            currency.rate = 0.9;
            currency.symbol = '&euro;';
            currency.country = 'eu'
            break;
        case 'ch':
            currency.rate = .05;
            currency.symbol = '&yen;';
            currency.country = 'ch'
            break;
        default:
            break;
    }
    updateTotal();
    
}
        

function updateItems() {
    let numberItems = document.getElementById('numberItems');
    numberItems.innerText = cart.length;
}
function updateTotal() {
    let cartTotal = document.getElementById('cartTotal');
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        total += item.price * item.qty;
    }

    // tax!!!
    total += total * .07;
    total /= currency.rate;
    cartTotal.innerHTML = `${currency.symbol}${total.toFixed(2)}`;
}


