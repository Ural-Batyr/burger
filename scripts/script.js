

// кнопка
document.getElementById("main-action-button").onclick = function () {
  document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

// меню

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
}
  }


  let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("order").scrollIntoView({behavior: "smooth"});
}
  }

  //формы

  let burger = document.getElementById("burger");
  let namee = document.getElementById("namee");
  let phone = document.getElementById("phone");
  document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [burger, namee, phone].forEach(item => {
if (!item.value) {
  item.parentElement.style.background = "red";
  hasError = true;
} else {
  item.parentElement.style.background = "";
}
    });

if (!hasError) {
  [burger, namee, phone].forEach(item => {
    item.value = "";
  });
  alert ("Спассибо за заказ! Мы скоро свяжемся с вами!")
}

  }

  // валюта
  let prices = document.getElementsByClassName("products-item-price");
  document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;
    
    if (currentCurrency === "$") {
      newCurrency = "₽";
      coefficient = 100;
    } else if (currentCurrency === "₽") {
      newCurrency = "BIN";
      coefficient = 3;
    } else if (currentCurrency === 'BIN') {
      newCurrency = '¥';
      coefficient = 6.9;
  }

    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
      prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
  }

