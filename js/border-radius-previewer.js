let box = document.querySelector('.box');

let topLeft = document.querySelector('#top-left');
let topRight = document.querySelector('#top-right');
let bottomRight = document.querySelector('#bottom-right');
let bottomLeft = document.querySelector('#bottom-left');

let codeButton = document.querySelector('#generate-code');
let code1Div = document.querySelector('#code1-div');
let code2Div = document.querySelector('#code2-div');
let code1p = document.querySelector('#code1')
let code2p = document.querySelector('#code2')
let orDiv = document.querySelector('#or');

let copyButton1 = document.querySelector('#copy-button1');
let copyButton2 = document.querySelector('#copy-button2');

function setBorderRadius() {
    box.style.borderTopLeftRadius = `${topLeft.value}px`;
    box.style.borderTopRightRadius = `${topRight.value}px`;
    box.style.borderBottomRightRadius = `${bottomRight.value}px`;
    box.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
}

function setDefaultValue() {
    if (topLeft.value == '' || topLeft.value < 0) {
        topLeft.value = 0;
        setBorderRadius();
    }

    if (topRight.value == '' || topRight.value < 0) {
        topRight.value = 0;
        setBorderRadius();
    }

    if (bottomRight.value == '' || bottomRight.value < 0) {
        bottomRight.value = 0;
        setBorderRadius();
    }

    if (bottomLeft.value == '' || bottomLeft.value < 0) {
        bottomLeft.value = 0;
        setBorderRadius();
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

function resetCode() {
    code1p.innerHTML = '';
    code2p.innerHTML = '';
    code1Div.classList.add('hidden');
    code2Div.classList.add('hidden');
    orDiv.classList.add('hidden');
}

function generateCode() {

    resetCode();
    setDefaultValue();

    if (compareValues()) {
        code1Div.classList.remove('hidden');
        let code1 = `.box {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;border-radius: ${topLeft.value}px;<br>
        }`;
        code1p.innerHTML += `${code1}`;
        // code2Div.classList.add('hidden');
        return;
    } else {
        code1Div.classList.remove('hidden');
        orDiv.classList.remove('hidden');
        code2Div.classList.remove('hidden');
        
        let code1 = `.box {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;border-top-left-radius: ${topLeft.value}px;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;border-top-right-radius: ${topRight.value}px;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;border-bottom-right-radius: ${bottomRight.value}px;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;border-bottom-left-radius: ${bottomLeft.value}px;<br>
        }`
    
        let code2 = `.box {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;<br>
        }`
    
        code1p.innerHTML += `${code1}`;
        code2p.innerHTML += `${code2}`;
    }
}

function copyCode1() {
    let range = document.createRange();
    range.selectNode(code1p);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

function copyCode2() {
    let range = document.createRange();
    range.selectNode(code2p);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

topLeft.addEventListener('input', setBorderRadius);
topRight.addEventListener('input', setBorderRadius);
bottomRight.addEventListener('input', setBorderRadius);
bottomLeft.addEventListener('input', setBorderRadius);

topLeft.addEventListener('focusout', setDefaultValue);
topRight.addEventListener('focusout', setDefaultValue);
bottomRight.addEventListener('focusout', setDefaultValue);
bottomLeft.addEventListener('focusout', setDefaultValue);

codeButton.addEventListener('click', generateCode);

copyButton1.addEventListener('click', copyCode1)
copyButton2.addEventListener('click', copyCode2)