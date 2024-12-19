// Load product data from product.json and render products
document.addEventListener('DOMContentLoaded', () => {
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products-container');
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('col-md-4');
                productCard.innerHTML = `
                    <div class="product-card">
                        <img src="${product.images[0]}" alt="${product.name}" />
                        <h3>${product.name}</h3>
                        <p>₹${product.price}</p>
                        <button onclick="addToFavorites(${product.id})" class="btn btn-primary">Add to Favorites</button>
                    </div>
                `;
                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});

// Add product to favorites and redirect to product details page
function addToFavorites(productId) {
    fetch('product.json')
        .then(response => response.json())
        .then(data => {
            const product = data.find(item => item.id === productId);
            if (product) {
                localStorage.setItem('favoriteProduct', JSON.stringify(product));
                window.location.href = 'product-details.html'; // Redirect to product details page
            }
        })
        .catch(error => console.error('Error adding to favorites:', error));
}
