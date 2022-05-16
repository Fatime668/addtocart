
function displayCart(){
    let cartItems = localStorage.getItem("product")
    cartItems.JSON.parse(basket)
    console.log(cartItems);
}