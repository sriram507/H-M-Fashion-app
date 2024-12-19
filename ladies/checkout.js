// document.addEventListener('DOMContentLoaded', () => {
//     const cartItemsContainer = document.getElementById('cart-items');
//     const totalPriceElement = document.getElementById('total-price');
//     const proceedToPaymentButton = document.getElementById('proceed-to-payment');
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     function displayCartItems() {
//         if (cart.length > 0) {
//             cartItemsContainer.innerHTML = cart.map((item, index) => `
//                 <div class="cart-item">
//                     <h4>${item.name}</h4>
//                     <p>Price: ₹${item.price} x <span>${item.quantity}</span></p>
//                     <p>Total: ₹${item.price * item.quantity}</p>
//                     <p>Selected Size: <span>${item.selectedSize || 'Not selected'}</span></p>
//                     <img src="${item.images[0]}" alt="${item.name}" class="img-thumbnail" width="100">
//                     <button class="btn btn-danger mt-2" onclick="removeFromCart(${index})">Remove</button>
//                     <hr>
//                 </div>
//             `).join('');
//         } else {
//             cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
//         }
//         updateTotalPrice();
//     }

//     // Calculate and display the total price
//     function updateTotalPrice() {
//         const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//         totalPriceElement.textContent = total;
//     }

//     // Function to remove an item from the cart by index
//     window.removeFromCart = function(index) {
//         cart.splice(index, 1);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         displayCartItems();
//     };

//     // Handle Proceed to Payment
//     proceedToPaymentButton.addEventListener('click', () => {
//         if (cart.length === 0) {
//             alert("Your cart is empty. Please add items to proceed.");
//         } else {
//             alert("Proceeding to payment...");
//             // Redirect to a payment page or show a payment modal
//             window.location.href = 'payment.html';
//         }
//     });

//     // Initial display of cart items
//     displayCartItems();
// });


document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const proceedToPaymentButton = document.getElementById('proceed-to-payment');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const buyNowItem = JSON.parse(localStorage.getItem('buyNowItem'));

    function displayCartItems() {
        let cartContent = '';

        if (cart.length > 0) {
            cartContent += cart.map((item, index) => `
                <div class="cart-item">
                    <h4>${item.name}</h4>
                    <p>Price: ₹${item.price} x ${item.quantity}</p>
                    <p>Total: ₹${item.price * item.quantity}</p>
                    <p>Selected Size: ${item.selectedSize}</p>
                    <img src="${item.images[0]}" alt="${item.name}" class="img-thumbnail" width="100">
                    <button class="btn btn-danger mt-2" onclick="removeFromCart(${index})">Remove</button>
                    <hr>
                </div>
            `).join('');
        } else {
            cartContent += '<p>Your cart is empty.</p>';
        }

        if (buyNowItem) {
            cartContent += `
                <div class="buy-now-item">
                    <h4>Buy Now: ${buyNowItem.name}</h4>
                    <p>Price: ₹${buyNowItem.price}</p>
                    <p>Selected Size: ${buyNowItem.selectedSize}</p>
                    <img src="${buyNowItem.images[0]}" alt="${buyNowItem.name}" class="img-thumbnail" width="100">
                    <button class="btn btn-danger mt-2" onclick="removeBuyNowItem()">Remove</button>
                    <hr>
                </div>
            `;
        }

        cartItemsContainer.innerHTML = cartContent;

        updateTotalPrice();
    }

    function updateTotalPrice() {
        const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const buyNowTotal = buyNowItem ? buyNowItem.price : 0;
        const total = cartTotal + buyNowTotal;
        totalPriceElement.textContent = total;
    }

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    };

    window.removeBuyNowItem = function() {
        localStorage.removeItem('buyNowItem');
        displayCartItems();
    };

    proceedToPaymentButton.addEventListener('click', () => {
        if (cart.length === 0 && !buyNowItem) {
            alert("Your cart is empty. Please add items to proceed.");
        } else {
            alert("Proceeding to payment...");
            window.location.href = 'payment.html';
        }
    });

    displayCartItems();
});
