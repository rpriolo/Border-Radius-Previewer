let box = document.querySelector('.box');

let topLeft = document.querySelector('#top-left');
let topRight = document.querySelector('#top-right');
let bottomLeft = document.querySelector('#bottom-left');
let bottomRight = document.querySelector('#bottom-right');

function setBorderRadius() {
    box.style.borderTopLeftRadius = `${topLeft.value}px`;
    box.style.borderTopRightRadius = `${topRight.value}px`;
    box.style.borderBottomRightRadius = `${bottomRight.value}px`;
    box.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
}

topLeft.addEventListener('input', setBorderRadius);
topRight.addEventListener('input', setBorderRadius);
bottomLeft.addEventListener('input', setBorderRadius);
bottomRight.addEventListener('input', setBorderRadius);


function generateCode() {

    setDefaultValue();

    let option1 = `.box {
        border-top-left-radius: ${topLeft.value}px;
        border-top-right-radius: ${topRight.value}px;
        border-bottom-right-radius: ${bottomRight.value}px;
        border-bottom-left-radius: ${bottomLeft.value}px;
    }`

    let option2 = `.box {
        border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;
    }`

    console.log(option1)
    console.log(option2)
    
}


function setDefaultValue() {
    if (topLeft.value == '') {
        topLeft.value = 0;
    }

    if (topRight.value == '') {
        topRight.value = 0;
    }

    if (bottomLeft.value == '') {
        bottomLeft.value = 0;
    }

    if (bottomRight.value == '') {
        bottomRight.value = 0;
    }
}