
const languageBtn = document.getElementById("languageBtn");
const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");

let language = "fa";
let cart = 0;

languageBtn.addEventListener("click", function () {
  language = language === "fa" ? "en" : "fa";

  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";

  document.body.classList.toggle("english", language === "en");

  document.querySelectorAll("[data-fa]").forEach(function (element) {
    element.textContent = element.dataset[language];
  });

  languageBtn.textContent = language === "fa" ? "EN" : "FA";
});

document.querySelectorAll(".add-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    cart++;
    cartCount.textContent = cart;

    toast.textContent = language === "fa"
      ? "عطر به سبد خرید اضافه شد!"
      : "Perfume added to your bag!";

    toast.classList.add("show");

    setTimeout(function () {
      toast.classList.remove("show");
    }, 2000);
  });
});
