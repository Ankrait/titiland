function openFunc(btn, block) {
    btn.addEventListener("click", () => {
        block.classList.toggle("dn");
    })

    if (block.querySelector(".closebtn")) {
        let close = block.querySelector(".closebtn");
        close.addEventListener("click", () => {
            block.classList.add("dn");
        })
    }

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
let btn9 = document.querySelector(".btn.connect");
let block9 = document.querySelector(".connection");
let btn10 = document.querySelector(".btn.tutor");
let block10 = document.querySelector(".tutorial");
openFunc(btn1, block1);
openFunc(btn2, block2);
openFunc(btn3, block3);
openFunc(btn4, block4);
openFunc(btn5, block5);
openFunc(btn6, block6);
openFunc(btn7, block7);
openFunc(btn8, block8);
openFunc(btn9, block9);
openFunc(btn10, block10);

let close1 = block2.querySelector(".closebtn");
close1.addEventListener("click", () => {
    block1.classList.add("dn");
})
let close2 = block3.querySelector(".closebtn");
close2.addEventListener("click", () => {
    block2.classList.add("dn");
})
let close3 = block4.querySelector(".closebtn");
close3.addEventListener("click", () => {
    block3.classList.add("dn");
})
let close4 = block5.querySelector(".closebtn");
close4.addEventListener("click", () => {
    block4.classList.add("dn");
})
let close5 = block6.querySelector(".closebtn");
close5.addEventListener("click", () => {
    block5.classList.add("dn");
})
let close6 = block7.querySelector(".closebtn");
close6.addEventListener("click", () => {
    block6.classList.add("dn");
})
let close7 = block9.querySelector(".closebtn");
close7.addEventListener("click", () => {
    block9.classList.add("dn");
})
let close8 = block10.querySelector(".btn");
close8.addEventListener("click", () => {
    block10.classList.add("dn");
})