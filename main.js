const productContainer = document.getElementById('productContainer');
const cartItems = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPrice');

fetch("https://fakestoreapi.com/products?limit=10")
    .then(res => res.json())
    .then(data => data)


function fetch(shop) {
    cart.innerHTML = '';
    cart.forEach (shop => {
        const cart = document.createElement('div');
        cart.classList.add('cart');

    })
}