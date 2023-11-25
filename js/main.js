const result = document.getElementById('result')
const btn = document.getElementById('calculate')


let math = document.querySelector('select')
console.log(math.value)

let num1 = document.getElementById('num1')
console.log(num1.value)

let num2 = document.getElementById('num2')
console.log(num2.value)

btn.onclick = function () {

    if (math.value == '+') {
        console.log(math.value)
        result.textContent = Number(num1.value) + Number(num2.value)
    }
    if (math.value == '-') {
        console.log(math.value)
        result.textContent = Number(num1.value) - Number(num2.value)
    }
    if (math.value == "*") {
        console.log(math.value)
        result.textContent = Number(num1.value) * Number(num2.value)
    }
    if (math.value == "/") {
        console.log(math.value)
        result.textContent = Number(num1.value) / Number(num2.value)
    }



    console.log(result.textContent)
}


