let doc = document.getElementById('show');

let inputValue = "";

function click1(num) {
    inputValue += num;
    doc.innerHTML = inputValue;
}

function click2(num) {
    inputValue += num;
    doc.innerHTML = inputValue;
}

function click3(num) {
    inputValue += num;
    doc.innerHTML = inputValue;
}

function click4(num) {
    inputValue += num;
    doc.innerHTML = inputValue;
}

function click5(num) {
    inputValue += num;
    doc.innerHTML = inputValue;
}

function click6(num) {
    inputValue += num;
    doc.innerHTML = inputValue;
}

function click7(num) {
    inputValue += num;
    doc.innerHTML = inputValue;
}

function click8(num) {
    inputValue += num;
    doc.innerHTML = inputValue;
}

function click9(num) {
    inputValue += num;
    doc.innerHTML = inputValue;
}

function click0(num) {
    inputValue += num;
    doc.innerHTML = inputValue;
}

function clickPer(opr) {
    let lastChar = inputValue.charAt(inputValue.length - 1)

    if (lastChar === '%') {
        return;
    }
    inputValue += opr;
    doc.innerHTML = inputValue;
}


function clickDiv(opr) {
    let lastChar = inputValue.charAt(inputValue.length - 1)

    if (lastChar === '/') {
        return;
    }
    inputValue += opr;
    doc.innerHTML = inputValue;
}


function clickMul(opr) {
    let lastChar = inputValue.charAt(inputValue.length - 1)

    if (lastChar === '*') {
        return;
    }
    inputValue += opr;
    doc.innerHTML = inputValue;
}

function clickAC() {
    inputValue = "";
    doc.innerHTML = inputValue;

}

function clickDel() {
    inputValue = inputValue.slice(0, -1);
    doc.innerHTML = inputValue;

}

function clickSub(opr) {
    let lastChar = inputValue.charAt(inputValue.length - 1)

    if (lastChar === '-') {
        return;
    }
    inputValue += opr;
    doc.innerHTML = inputValue;

}

function clickAdd(opr) {
    let lastChar = inputValue.charAt(inputValue.length - 1);

    if (lastChar === '+') {
        return;
    }
    inputValue += opr;
    doc.innerHTML = inputValue;

}

function onclickEqual() {
    let total = eval(inputValue)
    doc.innerText = total
    console.log(total);
}