let form_search = document.querySelector("#form-search");

let my_submit = document.getElementById("my_submit");
let search = document.getElementById("search");
form_search.onsubmit = function (e) {
  return false;
}
my_submit.addEventListener("click", function () {
  if (search.isVisible()) {
    if (search.value == "") { // если форма пустая
      search.hide_search();
    } else { // если что-то в форме есть, отправляем запрос
      form_search.submit();
    }
  } else {
    search.show_search();
  }
}, false);
search.addEventListener("blur", function () {
  search.hide_search();
}, false);


search.show_search = () => {
  search.style.display = "block";
  setTimeout(() => {
    search.classList.add("search_width");
  }, 10);
  search.focus();
}
search.hide_search = () => {
  search.classList.remove("search_width");
  setTimeout(() => {
    search.style.display = "none";
  }, 1000 * parseFloat(window.getComputedStyle(search).transitionDuration));
}
search.isVisible = () => {
  if (search.style.display == "block") {
    return true;
  }
  return false;
}
form_search.addEventListener("submit", function () {

}, false);


/* затемение фона header-а при нажатии на кнопку*/
let toggler = document.getElementById("toggler");
toggler.addEventListener("click", function () {
  document.getElementsByTagName("header")[0].classList.toggle("dark-header");
}, false);


/* переключение категорий последних проектов*/
let cat = document.querySelector(".categories");
let target_cat = document.querySelector(".cat-items");

let current_cat = cat.querySelector(".active");
let choosen_cat;
for (let i = 0; i < cat.children.length; i++) {
  cat.children[i].addEventListener("click", function (e) {
    e.preventDefault();
    if (cat.children[i].classList.contains("active")) {
      return;
    }
    choosen_cat = cat.children[i];
    current_cat.classList.remove("active");
    choosen_cat.classList.add("active");
    target_cat.querySelector(`.${current_cat.id}`).classList.remove("show");
    target_cat.children[i].classList.add("show");
    current_cat = choosen_cat;
  }, false);
}