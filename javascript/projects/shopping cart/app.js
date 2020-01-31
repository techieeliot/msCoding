let cart = [];
let items = document.querySelectorAll('.item');
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.addEventListener('click', function () {
        addToCart();
    });
}
    
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
};
        

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
    total += total * .07;
    cartTotal.innerText = total.toFixed(2);
}

