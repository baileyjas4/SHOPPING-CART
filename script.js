const productList = document.getElementById('product-list');
const addProductButton = document.getElementById('add-product');
let count = 2
// Event delegation for the product list
productList.addEventListener('click', (event) => {
if (event.target.classList.contains('add-to-cart')) {
const productId = event.target.closest('li').dataset.id;
console.log(`Added product ${productId} to cart.`);
}
});

addProductButton.addEventListener('click', () => {
const newProduct = document.createElement('li');
count++;
newProduct.dataset.id = count;
newProduct.innerHTML = `EGGS  ${count} <button class="add-to-cart">Add to Cart</button>`;
productList.appendChild(newProduct);
});


const list = document.getElementById('list');

list.addEventListener('click', (event) => {
if (event.target.classList.contains('remove')) {
const item = event.target.closest('li');
item.remove(); // Efficient removal
}
});