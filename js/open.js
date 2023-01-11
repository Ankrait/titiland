function openFunc(btn, block) {
    btn.addEventListener("click", () => {
        block.classList.toggle("dn");
    })

    // let close = block.querySelector(".closebtn");
    // close.addEventListener("click", () => {
    //     block.classList.add("dn");
    // })

    document.addEventListener('click', e => {
        let target = e.target;
        let its_block = target == block || block.contains(target);
        let its_btn = target == btn;
        let block_is_active = !block.classList.contains("dn");

        if (!its_block && !its_btn && block_is_active) {
            block.classList.add("dn");
        }
    })
}

let btn1 = document.querySelector(".btn.registr");
let block1 = document.querySelector(".registration");
let btn2 = document.querySelector(".btn.collect");
let block2 = document.querySelector(".collection");
let btn3 = document.querySelector(".btn.nft");
let block3 = document.querySelector(".nft-card");
let btn4 = document.querySelector(".btn.sale");
let block4 = document.querySelector(".nft-card.sale");
let btn5 = document.querySelector(".btn.bought");
let block5 = document.querySelector(".nft-card.bought");
let btn6 = document.querySelector(".btn.my");
let block6 = document.querySelector(".nft-card.my");
let btn7 = document.querySelector(".btn.mint");
let block7 = document.querySelector(".minting");
let btn8 = document.querySelector(".btn.warn");
let block8 = document.querySelector(".warning");
openFunc(btn1, block1);
openFunc(btn2, block2);
openFunc(btn3, block3);
openFunc(btn4, block4);
openFunc(btn5, block5);
openFunc(btn6, block6);
openFunc(btn7, block7);
openFunc(btn8, block8);
