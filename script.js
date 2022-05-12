var buycounter = 0;
var itemsInCart = 0;
var amount = document.getElementById("amount-selected");

function add(){
    buycounter++
    amount.innerHTML = buycounter;
};
function subtract(){
   if (amount.innerHTML <= 0){
       amount.innerHTML = 0
   }
   else{buycounter--
       amount.innerHTML = buycounter;}
};
// till here its about how much do you want to buy

var addToCartButton = document.getElementById("add-to-cart-button");
var cartBubble = document.getElementById("notification-bubble");

function addToCart(){
   if(amount.innerHTML == 0 && cartBubble.innerHTML == 0 ){
       cartBubble.style.display = "none";
       item.style.display ="none";
       checkout.style.display ="none";
   }
   else {
       item.style.display ="flex";
       checkout.style.display ="block";
       itemsInCart= itemsInCart + buycounter;
       cartBubble.innerHTML = itemsInCart;
       emptyCart.style.display ="none"
       }
       finalPriceCalculation()
       cartBubble.style.display = "block";  
}
    //till here is adding to the cart function

    var dropdownCart = document.getElementById("dropdown-cart");
    var item = document.getElementById("mini-info");
    var checkout = document.getElementById("checkout");
    var emptyCart= document.getElementById("empty-cart");
    function showCart(){
        if(dropdownCart.style.display =="block"){
            dropdownCart.style.display ="none";}
        
        else{
           dropdownCart.style.display ="block"
           if(cartBubble.innerHTML == 0){
               emptyCart.style.display ="block";
               }
           else{emptyCart.style.display ="none"}
        }
    };

    //till here view the cart function 
    
    var priceCalAmount = document.getElementById("mini-amount-to-buy");
    var finalPrice = document.getElementById("mini-total-price");
    var currentPrice = 125;
    var calculatedSum = 0;

    function finalPriceCalculation(){
        console.log(finalPrice.innerHTML);
        priceCalAmount.innerHTML = "x" + itemsInCart;
        finalPrice.innerHTML = "$" + currentPrice * itemsInCart;
        console.log(finalPrice.innerHTML);
    }

    //till here price calculation


function trash(){
    if(itemsInCart !== 0){
        itemsInCart--
        priceCalAmount.innerHTML ="x" +itemsInCart;
        cartBubble.innerHTML = itemsInCart;

    }
}
// till here is trash function

var mainImg = document.getElementById("main-img");
var slideImg1 = "images/image-product-1.jpg";
var slideImg2 = "images/image-product-2.jpg";
var slideImg3 = "images/image-product-3.jpg";
var slideImg4 = "images/image-product-4.jpg";
function changeImg(change){
    mainImg.src = change;
    
}
//till here slide show
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

mainImg.addEventListener("click", e =>{
    lightbox.classList.add("active");
    var lightboxImg = document.createElement("img");
    lightboxImg.id ="lightboxImg";
    lightboxImg.src = mainImg.src;
    while(lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild)
    };
    lightbox.appendChild(lightboxImg);
})
lightbox.addEventListener("click", e=>{
    if(e.target !== lightbox) return
    lightbox.classList.remove("active")
})
    
