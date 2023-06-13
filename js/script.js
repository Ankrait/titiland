///////////////// Бургер /////////////////////
let toggle = document.querySelector('.burger');
let header = document.querySelector('.header');
let header_menu = document.querySelector('.header__menu');
let body = document.body;

toggle.addEventListener('click', function (e) {
    this.classList.toggle('opened');
    header.classList.toggle('opened');
    body.classList.toggle('overflow--hide')
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_block = target == header_menu || header_menu.contains(target);
    let its_btn = toggle.contains(target);
    let block_is_active = header.classList.contains("opened");

    if (!its_block && !its_btn && block_is_active) {
        toggle.classList.remove('opened');
        header.classList.remove('opened');
        body.classList.remove('overflow--hide')
    }
})
///////////////// Бургер /////////////////////
///
///
///
///////////////// кошелек и уведомления /////////////////////
const notif__btn = document.querySelector(".header__notification");
const notif__closebtn = document.querySelector(".notification .closebtn");
const notif__block = document.querySelector(".notification__body");
const notif__block2 = document.querySelector(".notification");

notif__btn.addEventListener("click", () => {
    notif__block.classList.add("active");
    notif__block2.classList.add("active");
})

notif__closebtn.addEventListener("click", () => {
    notif__block.classList.remove("active");
    notif__block2.classList.remove("active");
})


document.addEventListener('click', e => {
    let target = e.target;
    let its_block = target == notif__block || notif__block.contains(target);
    let its_btn = target == notif__btn;
    let block_is_active = notif__block.classList.contains("active");

    if (!its_block && !its_btn && block_is_active) {
        notif__block.classList.remove("active");
        notif__block2.classList.remove("active");
    }
})


const open_btn = document.querySelector(".header__wallet");
const close_btn = document.querySelector(".wallet .closebtn");
const block_popup = document.querySelector(".wallet__body");
const wallet__block2 = document.querySelector(".wallet");

open_btn.addEventListener("click", () => {
    block_popup.classList.add("active");
    wallet__block2.classList.add("active");
})

close_btn.addEventListener("click", () => {
    block_popup.classList.remove("active");
    wallet__block2.classList.remove("active");
})


document.addEventListener('click', e => {
    let target = e.target;
    let its_block = target == block_popup || block_popup.contains(target);
    let its_btn = target == open_btn;
    let block_is_active = block_popup.classList.contains("active");

    if (!its_block && !its_btn && block_is_active) {
        block_popup.classList.remove("active");
        wallet__block2.classList.remove("active");
    }
})
///////////////// кошелек и уведомления /////////////////////