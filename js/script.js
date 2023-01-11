///////////////// Бургер /////////////////////
let toggle = document.querySelector('.burger');
let header = document.querySelector('.header');
let body = document.body;

toggle.addEventListener('click', function (e) {
    this.classList.toggle('opened');
    header.classList.toggle('opened');
    document.body.classList.toggle('overflow--hide')
});
///////////////// Бургер /////////////////////
///
///
///
///////////////// кошелек и уведомления /////////////////////
const notif__btn = document.querySelector(".header__notification");
const notif__closebtn = document.querySelector(".notification .closebtn");
const notif__block = document.querySelector(".notification__body");

notif__btn.addEventListener("click", () => {
    notif__block.classList.add("active");
})

notif__closebtn.addEventListener("click", () => {
    notif__block.classList.remove("active");
})


document.addEventListener('click', e => {
    let target = e.target;
    let its_block = target == notif__block || notif__block.contains(target);
    let its_btn = target == notif__btn;
    let block_is_active = notif__block.classList.contains("active");

    if (!its_block && !its_btn && block_is_active) {
        notif__block.classList.remove("active");
    }
})


const wallet__btn = document.querySelector(".header__wallet");
const wallet__closebtn = document.querySelector(".wallet .closebtn");
const wallet__block = document.querySelector(".wallet__body");

wallet__btn.addEventListener("click", () => {
    wallet__block.classList.add("active");
})

wallet__closebtn.addEventListener("click", () => {
    wallet__block.classList.remove("active");
})


document.addEventListener('click', e => {
    let target = e.target;
    let its_block = target == wallet__block || wallet__block.contains(target);
    let its_btn = target == wallet__btn;
    let block_is_active = wallet__block.classList.contains("active");

    if (!its_block && !its_btn && block_is_active) {
        wallet__block.classList.remove("active");
    }
})
///////////////// кошелек и уведомления /////////////////////