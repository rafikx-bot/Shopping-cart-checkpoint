let itemsContainer = document.querySelector(".cart-items");
let item = Array.from(itemsContainer.children);

//initial price
let totalPrice= 0;
let productsPrices = Array.from(document.querySelectorAll(".productPrice"))
productsPrices.forEach((Price)=>{
    totalPrice+=parseInt(Price.innerHTML)
});

document.querySelector(".totalPrice").innerHTML=totalPrice;

item.forEach((item,index)=>{
    // handle increment
  item.children[3].children[0].addEventListener("click", function () {
    totalPrice += parseInt(item.children[1].children[1].innerHTML);
    item.children[2].children[1].innerHTML = parseInt(item.children[2].children[1].innerHTML) + 1;
    document.querySelector(".totalPrice").innerHTML = totalPrice;
  });
  //handle decrement
  item.children[3].children[1].addEventListener("click", () => {
    if (parseInt(item.children[2].children[1].innerHTML) <= 1) {
      item.remove();
    }
    totalPrice -= parseInt(item.children[1].children[1].innerHTML);
    item.children[2].children[1].innerHTML = parseInt(item.children[2].children[1].innerHTML) - 1;
    document.querySelector(".totalPrice").innerHTML = totalPrice;
  });

  //handle delete
  item.children[3].children[2].addEventListener("click", () => {
    pricetominus =
      parseInt(item.children[1].children[1].innerHTML) *
      parseInt(item.children[3].innerHTML);
    totalPrice -= pricetominus;
    document.querySelector(".totalPrice").innerHTML = totalPrice;
    item.remove();
  });

  //handle like
  let isLiked = false;
  item.children[3].children[3].addEventListener("click", () => {
    if (isLiked) {
      item.children[3].children[3].children[0].style = "color:black";
      isLiked = false;
    } else {
      isLiked = true;
      item.children[3].children[3].children[0].style = "color:red";
    }
  });
})







