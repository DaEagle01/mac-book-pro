// interacting with mac book pro
let ramSmall = document.getElementById("ram-small");
let ramLarge = document.getElementById("ram-large");
let ssdSmall = document.getElementById("ssd-small");
let ssdMid = document.getElementById("ssd-mid");
let ssdLarge = document.getElementById("ssd-large");
let freeDelivery = document.getElementById("free-delivery");
let expressDelivery = document.getElementById("express-delivery");
let extraRamCost = document.getElementById("extra-ram-cost");
let extraSsdCost = document.getElementById("extra-ssd-cost");
let deliveryCost = document.getElementById("extra-delivery-charge");
let totalPrice = document.getElementById("total-price");
totalPrice.innerText = Number(1299);
let totalOut = document.getElementById("total");
let input = document.getElementById('promo-input');
let promoButton = document.getElementById('promo-button')

ramSmall.addEventListener("click", function () {
  extraRamCost.innerText = 0;
});

ramLarge.addEventListener("click", function () {
  extraRamCost.innerText = 180;
  extraMemCost = extraRamCost;
  totalCost = Number(totalPrice.innerText) + parseFloat(extraMemCost.innerText);
  totalPrice.innerText = totalCost;
  totalOut.innerText = totalCost;
});

ssdSmall.addEventListener("click", function () {
  extraSsdCost.innerText = 0;
});

ssdMid.addEventListener("click", function () {
  extraSsdCost.innerText = 100;
  extraStorageCost = extraSsdCost;
  totalCost = Number(totalPrice.innerText) + parseFloat(extraStorageCost.innerText);
  totalPrice.innerText = totalCost;
  totalOut.innerText = totalCost;
});

ssdLarge.addEventListener("click", function () {
  extraSsdCost.innerText = 180;
  extraStorageCost = extraSsdCost;
  totalCost = Number(totalPrice.innerText) + parseFloat(extraStorageCost.innerText);
  totalPrice.innerText = totalCost;
  totalOut.innerText = totalCost;
});

freeDelivery.addEventListener("click", function () {
  deliveryCost.innerText = 0;
});

expressDelivery.addEventListener("click", function () {
  deliveryCost.innerText = 20;
  expressDeliveryCost = deliveryCost;
  totalCost = Number(totalPrice.innerText) + parseFloat(expressDeliveryCost.innerText);
  totalPrice.innerText = totalCost;
  totalOut.innerText = totalCost;
});

promoButton.addEventListener('click', function () {
  if (input.value == 'stevekaku') {
    let afterPromoApply = parseFloat(totalOut.innerText)
    afterPromoApply = afterPromoApply - (afterPromoApply * 0.2);
    totalOut.innerText = afterPromoApply;
}
})


