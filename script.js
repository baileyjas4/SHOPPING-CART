const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;


// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

addProductButton.addEventListener('click', () => {
    const productName = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);

    const li = document.createElement('li');

    li.classList.add('cart-item');
    li.dataset.unitPrice = price;
    li.dataset.price = price;

    li.innerHTML = `
        <span>${productName}</span>
        <span>$${price.toFixed(2)}</span>
        <input type="number" class="quantity" value="1" min="1">
        <span class="item-total">${price.toFixed(2)}</span>
        <button class = "remove"> Remove </button>
    `;

    //Event Listener
    li.querySelector('.remove').addEventListener('click', removeItem);

    //Add to cart
    cart.appendChild(li);

    //Update total
    updateTotalPrice(price);

    //Reset input
    productNameInput.value = '';
    productPriceInput.value = '';
})




