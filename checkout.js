document.addEventListener('DOMContentLoaded', () => {
    displayCartTotal();
    const checkoutForm = document.querySelector('#checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', submitCheckoutForm);
    }
});

function displayCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    document.getElementById('cart-total').textContent = `Total: $${total}`;
}

function submitCheckoutForm(event) {
    event.preventDefault();


    alert('Checkout successful! Thank you!!');

    localStorage.setItem('cart', JSON.stringify([]));
    updateCartCount();

    window.location.href = 'index.html';
}


