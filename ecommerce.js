//UPDATED ADD TO CART
// // ecommerce.js

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id, name, price, imageUrl) {
  const item = {
    id: id,
    name: name,
    price: price,
    image: imageUrl,
    quantity: 1,
  };

  const existingItem = cart.find((product) => product.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}
