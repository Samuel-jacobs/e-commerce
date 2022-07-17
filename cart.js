
/*open cart function */

function openCart() {
	let basket = document.getElementById("basket");
  
  if (basket.style.display === "none") {
    basket.style.display = "block";
  } else {
    basket.style.display = "none";
  }
}



/*collecting all the buttons and elements */
const addQty = document.getElementById("addQty");
const reduceQty = document.getElementById("reduceQty");
const quantityCount = document.getElementById("qty");
const priceElement = document.getElementById("price");
var deleteBtn = document.getElementsByClassName("delete");
let totalPrice = document.getElementsByClassName("productPrice");


/* loop to check for all the delete buttons and click event listeners although i still had to add the onclick deleteCart to the delete icon*/
var basketItemContent = document.getElementsByClassName("basket-flex");
  for(var i = 0; i < deleteBtn.length; i++) {
  
   var button = deleteBtn[i]
   button.addEventListener("click",  deleteCart);
  }
 
/* function to delete the cart also checks if the cart is empty after deleting */
 function deleteCart(event) {
  
    for(var i = 0; i < basketItemContent.length; i++) {
      button = event.target;
      button.parentElement.remove();
      
    }
    var checkoutBtn = document.querySelector(".checkout");
    var basketWrapper = document.querySelector(".basket-item");
    var emptyBasket = document.querySelector(".empty-basket");
    if (basketWrapper.innerHTML === "") { 
      console.log("empty");
      emptyBasket.style.display = "block";
      emptyBasket.classList.add("empty-basket");
      checkoutBtn.style.display = "none";
    } else {
      console.log("not empty");
    }
  }
  

var addtoCartBtn = document.getElementById("addtoCart");
addtoCartBtn.addEventListener("click", addToCartClicked);
/* function for clicking the add to cart button */
function addToCartClicked() {
  var title = document.getElementsByClassName("productTitle")[0].textContent;
  var imageSrc = document.querySelector(".product1").src;

  addItemToCart();
  
}

/* function to add item to cart */
function addItemToCart() {
  var basketRow = document.createElement("div");
  basketRowContent = `
    
      <img src="images/image-product-1-thumbnail.jpg" class="cart-thumbnail" alt="">
      <div class="product-detail">
        <p class="grey productTitle">Fall Limited Edition Sneakers</p>
        <p class="productPrice"></p>
      </div>
      <img src="images/icon-delete.svg" onclick="deleteCart(event)" class="delete" alt="">
    
  `;

  basketRow.innerHTML = basketRowContent;
  basketRow.classList.add("basket-flex");
  var basketItem = document.querySelector(".basket-item");
  basketItem.append(basketRow);
  updateCartTotal();
  emptyBasket();
}


/* functin to check if the cart is empty */
function emptyBasket() {
  var checkoutBtn = document.querySelector(".checkout");
  var basketWrapper = document.querySelector(".basket-item");
  var emptyBasket = document.querySelector(".empty-basket");
  if (basketWrapper.innerHTML === "") {
    console.log('✅ Element is empty');
    emptyBasket.innerHTML = `
    <p>Your basket is empty</p>`
    checkoutBtn.style.display = "none";
  } else {
    checkoutBtn.style.display = "block";
    emptyBasket.style.display = "none";
  }
}
emptyBasket();




/*increasing and decreasing quantity */
var count = 1;
quantityCount.innerText = count;
/* function to increase the quantity */             
const increaseCount = () =>{
  if (count < 50) {
    count++;
  }
  quantityCount.innerText = count;   
}
/* function to decrease the quantity */
const decreaseCount = () => {
  if (count > 0) {
    count--;
  }
  quantityCount.innerText = count;  
}
 
/* calling the increase function on click */
addQty.addEventListener("click", function () {
  increaseCount();
  updateCartTotal();
  
});
/* calling the increase function on click */
reduceQty.addEventListener("click", function () {
  decreaseCount();
  updateCartTotal();
});
   

/*function to update the cart total */
function updateCartTotal() {
  
    var price = priceElement.innerText.replace("$", "");
    var quantity = quantityCount.innerText;
    var newPrice = price * quantity;
    var priceChange = `$125 x ${quantity}` + " $" + newPrice;
    for (var i = 0; i < totalPrice.length; i++) {
      var totalProductPrice = totalPrice[i];
      totalProductPrice.innerText = priceChange;
    }
}

