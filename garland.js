function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    return `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
}

let isGarlandWork = false;

function createGarland(quantity) {
    const garlandContainer = document.querySelector(".garland-container");

    for (let i = 0; quantity > i; i++) {
        const newLamp = document.createElement("div");
        newLamp.className = "lamp";
        newLamp.style.background = getRandomColor();
        garlandContainer.append(newLamp);
    }
}

createGarland(getRandomInt(1, 50));

function changeGarlandColor() {
    const listLampArr = document.querySelectorAll(".lamp");
    listLampArr.forEach((item) => {
        item.style.background = getRandomColor();
    })
}

const increaseBtn = document.getElementById("increase");
increaseBtn.addEventListener("click", () => {
    createGarland(getRandomInt(1, 50));
});

const SSBtn = document.getElementById("start_stop");
SSBtn.addEventListener("click", () => {

    if (SSBtn.innerText === "Start") {
        SSBtn.innerText = "Stop";
    } else {
        SSBtn.innerText = "Start";
    }
});
let changeColorInterval;

SSBtn.onclick = () => {
    if (isGarlandWork === false) {
        changeColorInterval = setInterval(() => {
            changeGarlandColor();
        }, 1600);
        isGarlandWork = true;
    } else {
        clearInterval(changeColorInterval);
        isGarlandWork = false;
    }
}





