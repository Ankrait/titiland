const minting_input = document.querySelector(".minting__value");
const minus = document.querySelector(".minting__count .minus");
const plus = document.querySelector(".minting__count .plus");

minting_input.addEventListener("input", () => {
    let minVal = parseInt(minting_input.min);
    let maxVal = parseInt(minting_input.max);
    let val = parseInt(minting_input.value);

    if (val >= maxVal) {
        plus.classList.remove("active");
        minus.classList.add("active");
    } else if (val <= minVal) {
        minus.classList.remove("active")
        plus.classList.add("active");
    } else if (val > minVal && val < maxVal) {
        minus.classList.add("active")
        plus.classList.add("active");
    }
});

minting_input.addEventListener("change", () => {
    let minVal = parseInt(minting_input.min);
    let maxVal = parseInt(minting_input.max);
    let val = parseInt(minting_input.value);

    if (val >= maxVal) {
        minting_input.value = maxVal;
    } else if (val <= minVal) {
        minting_input.value = minVal;
    }
});

minus.addEventListener("click", () => {
    val = parseInt(minting_input.value); 
    let minVal = parseInt(minting_input.min);
    let maxVal = parseInt(minting_input.max);

    if (minus.classList.contains("active")) {
        minting_input.value = val - 1;
    }
    
    val = parseInt(minting_input.value);
    if (val >= maxVal) {
        plus.classList.remove("active");
        minus.classList.add("active");
    } else if (val <= minVal) {
        minus.classList.remove("active")
        plus.classList.add("active");
    } else if (val > minVal && val < maxVal) {
        minus.classList.add("active")
        plus.classList.add("active");
    }
});

plus.addEventListener("click", () => {
    val = parseInt(minting_input.value);
    let minVal = parseInt(minting_input.min);
    let maxVal = parseInt(minting_input.max);

    if (plus.classList.contains("active")) {
        minting_input.value = val + 1;
    }
    
    val = parseInt(minting_input.value);
    if (val >= maxVal) {
        plus.classList.remove("active");
        minus.classList.add("active");
    } else if (val <= minVal) {
        minus.classList.remove("active")
        plus.classList.add("active");
    } else if (val > minVal && val < maxVal) {
        minus.classList.add("active")
        plus.classList.add("active");
    }
});