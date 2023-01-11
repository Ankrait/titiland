
////////////////// input цены //////////////////
const progress = document.querySelector(".filter__slider-progress");
const priceInput = document.querySelectorAll(".filter__price--min, .filter__price--max");
const rangeInput = document.querySelectorAll(".filter__slider--range input");
rangeInput.forEach(input => {
    input.addEventListener("input", (e) => {
        let minValue = parseInt(rangeInput[0].value);
        let maxValue = parseInt(rangeInput[1].value);
        if (maxValue - minValue < 0) {
            if (e.target.className === "max-value") {
                rangeInput[0].value = maxValue;
                progress.style.left = ((maxValue) / rangeInput[0].max) * 100 + "%"
                priceInput[0].value = maxValue;
            }
            else {
                rangeInput[1].value = minValue;
                progress.style.right = 100 - ((minValue) / rangeInput[1].max) * 100 + "%"
                priceInput[1].value = minValue;
            }
        } else {
            priceInput[0].value = minValue;
            priceInput[1].value = maxValue;
            progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
        }

    })
})

priceInput.forEach(input => {
    input.addEventListener("input", (e) => {
        let minValue = parseInt(priceInput[0].value);
        let maxValue = parseInt(priceInput[1].value);

        if (e.target.className === "filter__price--min") {
            if (minValue < priceInput[0].min) {
                priceInput[0].value = priceInput[0].min;
                minValue = parseInt(priceInput[1].value);
            } else if (minValue > maxValue) {
                priceInput[0].value = maxValue;
                minValue = maxValue;
            }

        } else {
            if (maxValue > priceInput[1].max) {
                priceInput[1].value = priceInput[1].max;
                maxValue = parseInt(priceInput[1].value);
            } else if (maxValue < minValue) {
                priceInput[1].value = minValue;
                maxValue = minValue;
            }
        }


        if (maxValue - minValue >= 0) {
            if (e.target.className === "filter__price--min") {
                progress.style.left = ((minValue) / rangeInput[0].max) * 100 + "%"
                rangeInput[0].value = minValue;
            }
            else {
                progress.style.right = 100 - ((maxValue) / rangeInput[1].max) * 100 + "%"
                rangeInput[1].value = maxValue;
            }
        }
    })
})
////////////////// input цены //////////////////
///
///
///
/////////////////// Перенос кнопки //////////////////
let profile_btn = document.querySelector(".profile__button")
let move_from = profile_btn.parentElement;
let move_to = document.querySelector(".profile");

window.addEventListener('resize', btnRemove);
function btnRemove() {
    if (window.matchMedia('screen and (max-width: 525px)').matches)
        move_to.appendChild(profile_btn);
    else
        move_from.appendChild(profile_btn);

}
btnRemove()
/////////////////// Перенос кнопки //////////////////
///
///
///
///////////////// Скролл на меню /////////////////
const p_menu = document.querySelector('.p-menu')

function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    p_menu.scrollLeft -= (delta * 60); // Multiplied by 10

    if (p_menu.scrollLeft != 0 && (p_menu.scrollWidth - p_menu.clientWidth >= p_menu.scrollLeft))
        e.preventDefault();
}

if (p_menu.addEventListener) {
    // IE9, Chrome, Safari, Opera
    p_menu.addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    p_menu.addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
    // IE 6/7/8
    p_menu.attachEvent("onmousewheel", scrollHorizontally);
}
///////////////// Скролл на меню /////////////////
///
///
///
///////////////// Блок редактирования /////////////////
const p_menu__items = document.querySelectorAll(".p-menu__item");
const p_content__items = document.querySelector(".main-profile .content").children;

profile_btn.addEventListener("click", () => {
    profile_btn.classList.add('dn');

    for (let i = 0; i < p_menu__items.length; i++) {
        p_menu__items[i].classList.remove("active");
        if (p_menu__items[i].classList.contains("edit")) {
            p_menu__items[i].classList.remove("dn");
            p_menu__items[i].classList.add("active");
        }
    };

    for (let i = 0; i < p_content__items.length; i++) {
        p_content__items[i].classList.add("dn");
        if (p_content__items[i].classList.contains("editing"))
            p_content__items[i].classList.remove("dn");
    };

});
///////////////// Блок редактирования /////////////////
///
///
///
///////////////// Блок Инвенторя /////////////////
const menu_invent = document.querySelector(".p-menu__item.invent");

menu_invent.addEventListener("click", () => {
    for (let i = 0; i < p_menu__items.length; i++) {
        p_menu__items[i].classList.remove("active");
        if (p_menu__items[i].classList.contains("invent")) {
            p_menu__items[i].classList.add("active");
        }
        if (p_menu__items[i].classList.contains("edit")) {
            p_menu__items[i].classList.add("dn");
        }
    };

    for (let i = 0; i < p_content__items.length; i++) {
        p_content__items[i].classList.add("dn");
        if (p_content__items[i].classList.contains("inventory"))
            p_content__items[i].classList.remove("dn");
    };

    profile_btn.classList.remove('dn');
})
///////////////// Блок Инвенторя /////////////////
///
///
///
///////////////// Блок Уведомлений /////////////////
const menu_notif = document.querySelector(".p-menu__item.notif");

menu_notif.addEventListener("click", () => {
    for (let i = 0; i < p_menu__items.length; i++) {
        p_menu__items[i].classList.remove("active");
        if (p_menu__items[i].classList.contains("notif")) {
            p_menu__items[i].classList.add("active");
        }
        if (p_menu__items[i].classList.contains("edit")) {
            p_menu__items[i].classList.add("dn");
        }
    };

    for (let i = 0; i < p_content__items.length; i++) {
        p_content__items[i].classList.add("dn");
        if (p_content__items[i].classList.contains("p-notification"))
            p_content__items[i].classList.remove("dn");
    };

    profile_btn.classList.remove('dn');
})
///////////////// Блок Уведомлений /////////////////
///
///
///
///////////////// Размер /////////////////
const small_btn = document.querySelector('.sort__size-small');
const big_btn = document.querySelector('.sort__size-big');
const inventory = document.querySelector('.inventory__items');

small_btn.addEventListener("click", () => {
    small_btn.classList.add("active");
    big_btn.classList.remove("active");
    inventory.classList.add("items-small");
})
big_btn.addEventListener("click", () => {
    small_btn.classList.remove("active");
    big_btn.classList.add("active");
    inventory.classList.remove("items-small");
})

window.addEventListener("resize", toSmallInventory);
function toSmallInventory(e) {
    if (window.matchMedia('screen and (max-width: 900px)').matches) {
        small_btn.classList.add("active");
        big_btn.classList.remove("active");
        inventory.classList.add("items-small");
    }
}
///////////////// Размер /////////////////
///
///
///
///////////////// Выплывание фильтра /////////////////
const filter_btn = document.querySelector(".sort__filter");
const filter_closebtn = document.querySelector(".filter .closebtn");
const filter_bg = document.querySelector(".filter__bg");
const filter = document.querySelector(".filter");

filter_btn.addEventListener("click", () => {
    filter.classList.add("active");
    filter_bg.classList.add("active");
    document.body.classList.add("overflow--hide");
})

filter_closebtn.addEventListener("click", () => {
    filter.classList.remove("active");
    filter_bg.classList.remove("active");
    document.body.classList.remove("overflow--hide");
})

filter_bg.addEventListener("click", () => {
    filter.classList.remove("active");
    filter_bg.classList.remove("active");
    document.body.classList.remove("overflow--hide");
})
///////////////// Выплывание фильтра /////////////////
///
///
///
////////////////// Фильтр //////////////////
const filter_item_btn = document.querySelectorAll(".filter__btn");
const filter_item = document.querySelectorAll(".filter__item");

for (let i = 0; i < filter_item_btn.length; i++) {
    filter_item_btn[i].addEventListener("click", () => {
        filter_item[i].classList.toggle("active");
        filter_item_btn[i].classList.toggle("active");
    })
}
////////////////// Фильтр //////////////////
///
///
///
////////////////// Сортировка //////////////////
const sort_block = document.querySelector(".sort__by");
const sort_btn = document.querySelector(".by-sort__main");
const sort_menu = document.querySelector(".by-sort__menu");

sort_btn.addEventListener("click", () => {
    sort_menu.classList.toggle("active");
    sort_block.classList.toggle("active");
})

const sort_item = document.querySelectorAll(".by-sort__item");
for (let i = 0; i < sort_item.length; i++) {
    sort_item[i].addEventListener("click", () => {
        if (!sort_item[i].classList.contains("active")) {
            sort_btn.innerHTML = sort_item[i].innerHTML;

            for (let i = 0; i < sort_item.length; i++)
                sort_item[i].classList.remove("active");

            sort_item[i].classList.add("active");
        }
        sort_menu.classList.remove("active");
        sort_block.classList.remove("active");
    })
}
////////////////// Сортировка //////////////////