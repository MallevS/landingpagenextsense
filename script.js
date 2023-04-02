// const cartCountElement = document.getElementById('count');
// let itemCount = 0;

// const addToCartButton = document.querySelector('.add-to-cart');


// addToCartButton.addEventListener('click', () => {
//   itemCount++;
//   cartCountElement.textContent = itemCount;
// });

const cartCountElement = document.getElementById('count');
let itemCount = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    itemCount++;
    cartCountElement.textContent = itemCount;
  });
});