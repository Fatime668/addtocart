

let carts = document.querySelectorAll('.add-cart');
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("basket") !== null) {
      calcCount();
    }
  });
let basket = []


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',function(){

        if (localStorage.getItem("basket") !== null) {
            basket = JSON.parse(localStorage.getItem("basket"));
          }
      

        let title = document.querySelector(".title").innerHTML
        let image = document.querySelector('.hover-img_1').src
        let price = document.querySelector('.money').innerHTML
        let id = this.getAttribute("data-id");
        let existedProduct = basket.find((x)=>x.id == id)
        if (existedProduct === undefined) {
            let products = {
                id,
                title,
                price,
                image,
                count: 1,
                // inCart:0,
            };
            basket.push(products)
        }else{
            existedProduct.count++;
        }
        localStorage.setItem("basket", JSON.stringify(basket));
        cartNumbers(basket[i]);
        calcCount()
        // console.log(basket);
        // totalCost(basket)
        

    })
    
}

function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers) {
        document.querySelector('.shop sup').textContent = productNumbers
    }
}
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers)
    if (productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers +1)
        document.querySelector('.shop sup').textContent = productNumbers + 1;

    }else{
        localStorage.setItem('cartNumbers',1)
        document.querySelector('.shop sup').textContent = 1;
    }
}

// function setItems(product){
//     let cartItems = localStorage.getItem('productsInCart')
//     console.log("My cart are",cartItems);
//     product.inCart = 1;
//     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }
function calcCount() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let count = basket.reduce((t, val) => {
      return (t += val.count);
    }, 0);
    let countValue = document.querySelector("sup");
    countValue.innerText = count;
  }

// function totalCost(product){
//     // console.log("The product price is",product.price);
//     let cartCost = localStorage.getItem("totalCost");
    
//     if (cartCost != null) {
//         totalCost = parseInt(cartCost);
//         localStorage.setItem("totalCost",cartCost+product.price)
//     }else{
//         localStorage.setItem("totalCost",product.price)
//     }
//     // console.log(typeof cartCost);
// }

function displayCart(){
    let basket = localStorage.getItem("products")
    let productContainer = document.querySelector(".products-container")
    if (basket && productContainer) {
        productContainer.innerHTML = '';
        Object.values(basket).map(item =>{
            productContainer.innerHTML +=`
            <div class="cart-item">
            <div class="img">
                <img class="hover-img_1" src="./assets/image/${item.image}" alt="">
            </div>
            <div class="txt">
                <div class="peru">
                    <h2 class="title">${item.title}</h2>
                </div>
                <div class="price">
                    <span>$
                        <span class="money">${item.price}</span>
                    </span>
                </div>
            </div>
        </div>
            `
        });
    }
}
onloadCartNumbers();
displayCart();
