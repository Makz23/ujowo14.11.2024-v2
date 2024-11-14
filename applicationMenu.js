const openMenu = () => {
  console.log("Menu otwarte!");
  menuContainer.style.display = "block";
};

const closeMenu = () => {
  console.log("Menu zamknięte!");
  menuContainer.style.display = "none";
};

menu.addEventListener("click", () => {
  openMenu();
});

menuClose.addEventListener("click", () => {
  closeMenu();
});


function addToCart(productName) {
  console.log(`${productName} added to cart`);
  alert("Added to cart");
}
