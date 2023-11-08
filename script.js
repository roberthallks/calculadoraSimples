function inserirDisplay(value) {
    document.getElementById('display').value += value;
}

function calculaResult() {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}

function LimpaDisplay() {
    document.getElementById('display').value = '';
}
