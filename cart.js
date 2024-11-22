
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Object to store cart items and their counts
    const cart = {};

    // Function to add an item to the cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.gum-product').querySelector('h2').textContent;

            if (cart[product]) {
                cart[product] += 1;
            } else {
                cart[product] = 1;
            }
            
            updateCart();
        });
    });

    // Function to update the cart display
    function updateCart() {
        cartItems.innerHTML = '';
        for (const [product, count] of Object.entries(cart)) {
            const item = document.createElement('li');
            item.textContent = `${product} - ${count}`;
            cartItems.appendChild(item);
        }

        if (Object.keys(cart).length === 0) {
            cartItems.innerHTML = '<li>Aucun article dans le panier.</li>';
        }
    }

    // Clear cart
    clearCartButton.addEventListener('click', () => {
        for (const product in cart) {
            delete cart[product];
        }
        updateCart();
    });
});
