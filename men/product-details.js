// document.addEventListener('DOMContentLoaded', () => {
//     const productDetailsContainer = document.getElementById('product-details');
//     const product = JSON.parse(localStorage.getItem('favoriteProduct'));

//     if (product) {
//         // Generate the product details with a carousel for images
//         productDetailsContainer.innerHTML = `
//             <div class="row">
//                 <div class="col-md-6">
//                     <div id="productCarousel" class="carousel slide" data-ride="carousel">
//                         <div class="carousel-inner">
//                             ${product.images.map((img, index) => `
//                                 <div class="carousel-item ${index === 0 ? 'active' : ''}">
//                                     <img src="${img}" alt="${product.name}" class="d-block w-100">
//                                 </div>
//                             `).join('')}
//                         </div>
//                         <a class="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
//                             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span class="sr-only">Previous</span>
//                         </a>
//                         <a class="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
//                             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span class="sr-only">Next</span>
//                         </a>
//                     </div>
//                 </div>
//                 <div class="col-md-6">
//                     <h3>${product.name}</h3>
//                     <p class="price">₹${product.price}</p>
//                     <div>
//                         <label for="sizes">Size:</label>
//                         <select id="sizes">
//                             <option value="">-- Select Size --</option>
//                             ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
//                         </select>
//                     </div>
//                     <button id="addToCartBtn" class="btn btn-primary mt-3">Add to Cart</button>
//                     <button id="buyNowBtn" class="btn btn-success mt-3">Buy Now</button>
//                 </div>
//             </div>
//         `;

//         // Add event listeners for buttons
//         document.getElementById('addToCartBtn').addEventListener('click', () => addToCart(product));
//         document.getElementById('buyNowBtn').addEventListener('click', () => buyNow(product));
//     } else {
//         productDetailsContainer.innerHTML = '<p>No product selected. Please go back and choose a product.</p>';
//     }
// });

// // Function to add product to the cart with size validation
// function addToCart(product) {
//     const sizeSelect = document.getElementById('sizes');

//     // Check if a size is selected
//     if (!sizeSelect.value) {
//         alert('Please select a size before adding to cart.');
//         return; // Prevent the action if no size is selected
//     }

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const selectedSize = sizeSelect.value;

//     // Check if the product with the selected size already exists in the cart
//     const existingProductIndex = cart.findIndex(item => item.id === product.id && item.selectedSize === selectedSize);

//     if (existingProductIndex !== -1) {
//         // If it exists, increment the quantity
//         cart[existingProductIndex].quantity += 1;
//         localStorage.setItem('cart', JSON.stringify(cart));
//         alert(`Quantity of ${product.name} in size ${selectedSize} updated to ${cart[existingProductIndex].quantity}.`);
//     } else {
//         // Add selected size and initial quantity to the product object
//         product.selectedSize = selectedSize; 
//         product.quantity = 1; // Set initial quantity to 1
//         cart.push(product);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         alert('Product added to cart!');
//     }
// }

// // Function to handle Buy Now action with size validation
// function buyNow(product) {
//     const sizeSelect = document.getElementById('sizes');

//     // Check if a size is selected
//     if (!sizeSelect.value) {
//         alert('Please select a size before proceeding to buy.');
//         return; // Prevent the action if no size is selected
//     }

//     // Add to cart first
//     product.selectedSize = sizeSelect.value; 
//     addToCart(product); // Add to cart

//     // Redirect to a checkout page
//     window.location.href = 'checkout.html'; 
// }


document.addEventListener('DOMContentLoaded', () => {
    const productDetailsContainer = document.getElementById('product-details');
    const product = JSON.parse(localStorage.getItem('favoriteProduct'));

    if (product) {
        productDetailsContainer.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <div id="productCarousel" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            ${product.images.map((img, index) => `
                                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                    <img src="${img}" alt="${product.name}" class="d-block w-100">
                                </div>
                            `).join('')}
                        </div>
                        <a class="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price}</p>
                    <div>
                        <label for="sizes">Size:</label>
                        <select id="sizes">
                            <option value="">-- Select Size --</option>
                            ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                        </select>
                    </div>
                    <button id="addToCartBtn" class="btn btn-primary mt-3">Add to Cart</button>
                    <button id="buyNowBtn" class="btn btn-success mt-3">Buy Now</button>
                </div>
            </div>
        `;

        // Add event listeners for buttons
        document.getElementById('addToCartBtn').addEventListener('click', () => addToCart(product));
        document.getElementById('buyNowBtn').addEventListener('click', () => buyNow(product));
    } else {
        productDetailsContainer.innerHTML = '<p>No product selected. Please go back and choose a product.</p>';
    }
});

// Function to add product to the cart with size validation
function addToCart(product) {
    const sizeSelect = document.getElementById('sizes');

    if (!sizeSelect.value) {
        alert('Please select a size before adding to cart.');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const selectedSize = sizeSelect.value;

    const existingProductIndex = cart.findIndex(item => item.id === product.id && item.selectedSize === selectedSize);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Quantity of ${product.name} in size ${selectedSize} updated to ${cart[existingProductIndex].quantity}.`);
    } else {
        product.selectedSize = selectedSize; 
        product.quantity = 1; 
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart!');
    }
}

// Function to handle Buy Now action with size validation
function buyNow(product) {
    const sizeSelect = document.getElementById('sizes');

    if (!sizeSelect.value) {
        alert('Please select a size before proceeding to buy.');
        return;
    }

    product.selectedSize = sizeSelect.value;
    product.quantity = 1;

    localStorage.setItem('buyNowItem', JSON.stringify(product));

    window.location.href = 'checkout.html';
}
