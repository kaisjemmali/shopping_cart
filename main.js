/* Get Heart icon Red */
let heart = document.getElementsByClassName("fa-heart");
for (let i = 0; i < heart.length; i++) {
  heart[i].onclick = function () {
    if (heart[i].style.color === "black") {
      heart[i].style.color = "red";
    } else {
      heart[i].style.color = "black";
    }
  };
}

/* Remove element */

let removeElt = document.getElementsByClassName("fa-circle-xmark");
let prodSection = document.getElementsByClassName("product_section");
let totProductCart = document.getElementsByClassName("tot_prdct");

for (let i = 0; i < removeElt.length; i++) {
  removeElt[i].onclick = function () {
    prodSection[i].remove();
    totProductCart[i].remove();
  };
}

/* Adding and Sustraction Quantity */

let quantity = document.getElementsByClassName("qtity");
let plusBtn = document.getElementsByClassName("plus");
let minusBtn = document.getElementsByClassName("minus");
let price = document.getElementsByClassName("price");
let priceProduct = document.getElementsByClassName("product_price");
let totalPriceProduct = document.getElementsByClassName("total_Price_Product");
let totalSum = document.getElementById("final_sum");

/* Extract prices in array */
let price_value = [];
for (let i = 0; i < price.length; i++) {
  price_value.push(+price[i].innerHTML);
}

for (let i = 0; i < quantity.length; i++) {
  plusBtn[i].onclick = function () {
    +quantity[i].innerHTML++;
    priceProduct[i].innerHTML = price_value[i] * +quantity[i].innerHTML;
    totalPriceProduct[i].innerHTML = price_value[i] * +quantity[i].innerHTML;
    totalSum.innerHTML = +totalSum.innerHTML + price_value[i];
  };
}

for (let i = 0; i < quantity.length; i++) {
  minusBtn[i].onclick = function () {
    if (+quantity[i].innerHTML > 0) {
      +quantity[i].innerHTML--;
      priceProduct[i].innerHTML = price_value[i] * +quantity[i].innerHTML;
      totalPriceProduct[i].innerHTML = price_value[i] * +quantity[i].innerHTML;
      totalSum.innerHTML = +totalSum.innerHTML - price_value[i];
    }
  };
}
