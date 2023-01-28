const calculator = document.querySelector(".calculator")
const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button")
let numbers = ""
const operation = {
    firstValue: 0,
    secondValue: 0,
    operator: "",
    result: 0,

    get result() {
        return eval(`${this.firstValue} ${this.operator} ${this.secondValue}`)
    }
}

buttons.forEach((item) => {
    item.onclick = (e) => {
        if (numbers.length >= 8) {
            return null
        }

        if (item.className === "number_key" || item.id === "key_0") {
            numbers += e.target.value
            display.value = numbers
        }

        if (item.id === "key_period") {
            numbers.includes(".") ? null : numbers += e.target.value
        }

        if (item.id === "key_clear") {
            numbers = ""
            display.value = '0'
        }

        if (item.className === "operators_key") {
            operation.firstValue = parseFloat(numbers)
            numbers = ""
            operation.operator = e.target.value
        }

        if (item.className === "equal_key") {
            operation.secondValue = parseFloat(numbers)
            display.value = operation.result
            operation.firstValue = 0
            operation.secondValue = 0
            numbers = 0
            console.log(operation);

        }
    }
})