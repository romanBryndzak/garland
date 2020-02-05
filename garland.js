function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    return `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
}

let isGarlandWork = false;

function createGarland() {
    const garlandContainer = document.querySelector(".garland-container");

    for (let i = 0; getRandomInt(1, 100) > i; i++) {
        const newLamp = document.createElement("div");
        newLamp.className = "lamp";
        newLamp.style.background = getRandomColor();
        garlandContainer.append(newLamp);
    }
}
createGarland();

function changeGarlandColor() {
   const listLampArr = document.querySelectorAll(".lamp");
    listLampArr.forEach((item) => {
        item.style.background = getRandomColor();
    })
}

const garlandSartBtn = document.querySelector(".start-btn");
let changeColorInterval;

garlandSartBtn.onclick = () => {
    if (isGarlandWork === false) {
        changeColorInterval = setInterval(() => {
            changeGarlandColor();
        }, 1000);
        isGarlandWork = true;
    } else {
        clearInterval(changeColorInterval);
        isGarlandWork = false;
    }
}





