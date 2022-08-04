let box = document.querySelector('.box');

let topLeft = document.querySelector('#top-left');
let topRight = document.querySelector('#top-right');
let bottomLeft = document.querySelector('#bottom-left');
let bottomRight = document.querySelector('#bottom-right');

let codeButton = document.querySelector('#generate-code');
let codeDiv = document.querySelector('#code');

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

codeButton.addEventListener('click', generateCode);

function generateCode() {

    codeDiv.innerHTML = '';

    setDefaultValue();

    if (compareValues()) {
        let code = `.box {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;border-radius: ${topLeft.value}px;<br>
        }`;
        codeDiv.innerHTML += `<p>${code}</p>`;
        return;
    }

    let code1 = `.box {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;border-top-left-radius: ${topLeft.value}px;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;border-top-right-radius: ${topRight.value}px;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;border-bottom-right-radius: ${bottomRight.value}px;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;border-bottom-left-radius: ${bottomLeft.value}px;<br>
    }`

    let code2 = `.box {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;<br>
    }`

    codeDiv.innerHTML += `<p>${code1}</p>`;
    // codeDiv.innerHTML += '<br>'
    codeDiv.innerHTML += `<p>${code2}</p>`;

}

function setDefaultValue() {
    if (topLeft.value == '') {
        topLeft.value = 0;
    }

    if (topRight.value == '') {
        topRight.value = 0;
    }

    if (bottomRight.value == '') {
        bottomRight.value = 0;
    }

    if (bottomLeft.value == '') {
        bottomLeft.value = 0;
    }
}

function compareValues() {
    if (topLeft.value == topRight.value &&
        topRight.value == bottomRight.value &&
        bottomRight.value == bottomLeft.value &&
        bottomLeft.value == topLeft.value) {
            return true;
        }
}