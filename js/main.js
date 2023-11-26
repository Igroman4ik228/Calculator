const result = document.getElementById('result')
const btn = document.getElementById('calculate')
const math = document.querySelector('select')
console.log(math.value)
const num1 = document.getElementById('num1')
console.log(num1.value)
const num2 = document.getElementById('num2')
console.log(num2.value)


function color() {
    if (result.textContent < 0) {
        result.style.color = 'red'
    } else {
        result.style.color = 'green'
    }
}


btn.onclick = function () {

    if (math.value == '+') {
        console.log(math.value)
        result.textContent = Number(num1.value) + Number(num2.value)
    } else if (math.value == '-') {
        console.log(math.value)
        result.textContent = Number(num1.value) - Number(num2.value)
    } else if (math.value == "*") {
        console.log(math.value)
        result.textContent = Number(num1.value) * Number(num2.value)
    } else {
        console.log(math.value)
        result.textContent = Number(num1.value) / Number(num2.value)
    }

    color()
    console.log(result.textContent)
}


