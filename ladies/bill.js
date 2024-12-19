document.addEventListener('DOMContentLoaded', () => {
    const billItemsContainer = document.getElementById('bill-items');
    const billTotalElement = document.getElementById('bill-total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayBillItems() {
        let totalAmount = 0;

        billItemsContainer.innerHTML = cart.map((item) => {
            const itemTotal = item.price * (item.quantity || 1); // Assuming quantity is available
            totalAmount += itemTotal;
            return `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.selectedSize || 'N/A'}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity || 1}</td>
                    <td>${itemTotal}</td>
                </tr>
            `;
        }).join('');

        billTotalElement.textContent = totalAmount;
    }

    // Display bill items when the page loads
    displayBillItems();
});
